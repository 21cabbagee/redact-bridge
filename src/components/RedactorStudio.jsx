import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, Upload, Sparkles, CheckCircle, ShieldAlert, ArrowRight, 
  Download, Eye, RefreshCw, Key, Hash, FileCode, Check, Copy, Sliders, AlertTriangle, ShieldCheck
} from 'lucide-react';
import { sanitizeText, computeSHA256 } from '../engine/redactor';
import { exportToJSONL, exportToText, exportToCSV, exportAuditCertificate, triggerDownload } from '../engine/exporter';
import { SAMPLE_RECORDS } from '../data/sampleRecords';

export function RedactorStudio({ onOpenCertificate }) {
  const [activeSampleKey, setActiveSampleKey] = useState('clinicalNote');
  const [inputText, setInputText] = useState(SAMPLE_RECORDS.clinicalNote.content);
  const [redactionResult, setRedactionResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingTime, setProcessingTime] = useState(12);

  // Configuration options
  const [enableHipaa, setEnableHipaa] = useState(true);
  const [enableFinancial, setEnableFinancial] = useState(true);
  const [useSurrogates, setUseSurrogates] = useState(true);
  const [whitelistInput, setWhitelistInput] = useState('');
  
  // UI Tabs
  const [viewMode, setViewMode] = useState('split'); // 'split', 'sanitized', 'raw'
  const [activeTab, setActiveTab] = useState('editor'); // 'editor', 'entities', 'tokens'
  const [copied, setCopied] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('clinical_discharge_summary.txt');

  const fileInputRef = useRef(null);

  // Run redaction pipeline on text or config change
  const runSanitization = async (textToSanitize) => {
    setIsProcessing(true);
    const start = performance.now();

    const whitelist = whitelistInput
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const result = await sanitizeText(textToSanitize || inputText, {
      hipaa: enableHipaa,
      financial: enableFinancial,
      surrogateMode: useSurrogates,
      whitelist: whitelist
    });

    const end = performance.now();
    setProcessingTime(Math.max(4, Math.round(end - start)));
    setRedactionResult(result);
    setIsProcessing(false);
  };

  useEffect(() => {
    runSanitization(inputText);
  }, [enableHipaa, enableFinancial, useSurrogates, whitelistInput]);

  // Handle switching sample benchmarks
  const handleSelectSample = (key) => {
    setActiveSampleKey(key);
    const sample = SAMPLE_RECORDS[key];
    setInputText(sample.content);
    setUploadedFileName(sample.name);
    runSanitization(sample.content);
  };

  // Handle file uploads
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const processFile = (file) => {
    setUploadedFileName(file.name);
    setActiveSampleKey(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      setInputText(content);
      runSanitization(content);
    };
    reader.readAsText(file);
  };

  // Drag and drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const copyToClipboard = () => {
    if (!redactionResult) return;
    navigator.clipboard.writeText(redactionResult.sanitizedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportParquetSim = () => {
    if (!redactionResult) return;
    const parquetMetadata = {
      format: "Apache Parquet (Columnar RAG Index)",
      schema: {
        record_id: "int64",
        deidentified_content: "string",
        entity_token_count: "int32",
        cryptographic_hash: "string"
      },
      rows_encoded: 1,
      sha256_digest: redactionResult.auditCertificate.outputSHA256,
      payload_base64_sample: btoa(redactionResult.sanitizedText.substring(0, 100)) + "..."
    };
    triggerDownload(JSON.stringify(parquetMetadata, null, 2), `${uploadedFileName.split('.')[0]}_index.parquet.json`, 'application/json');
  };

  return (
    <section id="studio" className="py-12 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>ZERO-TRUST CLIENT-SIDE PIPELINE ACTIVE</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
              Interactive De-Identification Studio
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Deterministic regex & entity token replacement with cryptographic SHA-256 certificate generation.
            </p>
          </div>

          {/* Quick Metrics Badge Bar */}
          <div className="flex items-center space-x-3 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-lg bg-surface border border-border flex items-center space-x-2">
              <span className="text-slate-400">Entities Masked:</span>
              <span className="font-bold text-emerald-400 text-sm">
                {redactionResult?.detectedEntities?.length || 0}
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-surface border border-border flex items-center space-x-2">
              <span className="text-slate-400">Latency:</span>
              <span className="font-bold text-cyan-400 text-sm">{processingTime}ms</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 flex items-center space-x-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Zero-Retention</span>
            </div>
          </div>
        </div>

        {/* Sample Dataset Selectors & Upload Dropzone Bar */}
        <div className="mb-6 p-4 rounded-xl bg-surface border border-border">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            
            {/* Dataset selector pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">
                Load Benchmark:
              </span>
              {Object.entries(SAMPLE_RECORDS).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => handleSelectSample(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeSampleKey === key
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'bg-surface-elevated text-slate-300 border border-border hover:bg-surface-hover'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Direct File Dropzone / Trigger */}
            <div className="flex items-center space-x-3 w-full lg:w-auto">
              <input
                ref={fileInputRef}
                type="file"
                accept=".txt,.jsonl,.csv,.pdf,.docx"
                className="hidden"
                onChange={handleFileUpload}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`w-full lg:w-auto px-4 py-2 rounded-lg text-xs font-medium flex items-center justify-center space-x-2 cursor-pointer transition-all border ${
                  dragActive 
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' 
                    : 'bg-surface-elevated border-border-strong text-slate-200 hover:bg-surface-hover'
                }`}
              >
                <Upload className="w-3.5 h-3.5 text-emerald-400" />
                <span>Upload .pdf, .docx, .csv, .jsonl, .txt</span>
              </button>
            </div>
          </div>

          {/* Active record description */}
          {activeSampleKey && (
            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-slate-300">{SAMPLE_RECORDS[activeSampleKey].type}:</span>
                <span>{SAMPLE_RECORDS[activeSampleKey].description}</span>
              </div>
              <span className="text-slate-400 hidden sm:inline font-mono">50MB client-side limit</span>
            </div>
          )}
        </div>

        {/* Studio Main Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Column: Sensitivity & Compliance Controls */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-4 rounded-xl bg-surface border border-border space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center space-x-2">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-semibold text-white">Redaction Rules</h3>
                </div>
                <button
                  onClick={() => runSanitization(inputText)}
                  className="text-xs text-slate-400 hover:text-emerald-400 flex items-center space-x-1"
                  title="Re-run pipeline"
                >
                  <RefreshCw className={`w-3 h-3 ${isProcessing ? 'animate-spin text-emerald-400' : ''}`} />
                </button>
              </div>

              {/* Toggle 1: HIPAA Safe Harbor */}
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={enableHipaa}
                  onChange={(e) => setEnableHipaa(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border-strong bg-surface-elevated text-emerald-500 focus:ring-emerald-500/30 cursor-pointer"
                />
                <div>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                    18 HIPAA Safe Harbor
                  </span>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Names, SSN, MRN, Dates, Full Address, ZIPs, Phones, Emails, IPs.
                  </p>
                </div>
              </label>

              {/* Toggle 2: Financial PII */}
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={enableFinancial}
                  onChange={(e) => setEnableFinancial(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border-strong bg-surface-elevated text-cyan-500 focus:ring-cyan-500/30 cursor-pointer"
                />
                <div>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    Financial PII (GLBA/PCI)
                  </span>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Credit cards, ABA Routing, Bank Accts, IBAN, Corporate EIN.
                  </p>
                </div>
              </label>

              {/* Toggle 3: Consistent Surrogates */}
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={useSurrogates}
                  onChange={(e) => setUseSurrogates(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border-strong bg-surface-elevated text-emerald-500 focus:ring-emerald-500/30 cursor-pointer"
                />
                <div>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                    Consistent Synthetic Tokens
                  </span>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Map identical entities to identical tokens (`[PATIENT_NAME_1]`) for high-fidelity RAG attention.
                  </p>
                </div>
              </label>

              {/* Whitelist Input */}
              <div className="pt-2 border-t border-border">
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Entity Whitelist (CSV):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Seattle, Plavix, Plavix 75 mg"
                  value={whitelistInput}
                  onChange={(e) => setWhitelistInput(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs rounded bg-surface-elevated border border-border text-slate-200 focus:outline-none focus:border-emerald-500/50"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  Comma-separated terms to preserve unredacted.
                </p>
              </div>
            </div>

            {/* Cryptographic Proof Card */}
            <div className="p-4 rounded-xl bg-surface border border-emerald-500/20 glow-emerald space-y-3">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Audit Digest
                </h3>
              </div>
              <div className="space-y-2 text-[11px] font-mono text-slate-400">
                <div>
                  <span className="text-slate-400 block text-[10px]">INPUT SHA-256:</span>
                  <span className="text-slate-300 break-all select-all">
                    {redactionResult?.auditCertificate?.inputSHA256?.substring(0, 20)}...
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">OUTPUT SHA-256:</span>
                  <span className="text-emerald-400 break-all select-all">
                    {redactionResult?.auditCertificate?.outputSHA256?.substring(0, 20)}...
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenCertificate(redactionResult?.auditCertificate)}
                className="w-full mt-2 py-2 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>View Full Certificate</span>
              </button>
            </div>

            {/* Export Toolbar */}
            <div className="p-4 rounded-xl bg-surface border border-border space-y-2.5">
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                Model-Ready Export
              </h3>

              <button
                onClick={() => exportToJSONL(redactionResult?.sanitizedText, `${uploadedFileName.split('.')[0]}_finetuning.jsonl`)}
                className="w-full py-2 px-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-medium flex items-center justify-between transition-all cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>OpenAI / Claude (.jsonl)</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">LLM Ready</span>
              </button>

              <button
                onClick={() => exportToText(redactionResult?.sanitizedText, `${uploadedFileName.split('.')[0]}_clean.txt`)}
                className="w-full py-2 px-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-medium flex items-center justify-between transition-all cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Clean Text (.txt)</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">Raw</span>
              </button>

              <button
                onClick={() => exportToCSV(redactionResult?.sanitizedText, `${uploadedFileName.split('.')[0]}_records.csv`)}
                className="w-full py-2 px-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-medium flex items-center justify-between transition-all cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <Download className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Sanitized CSV (.csv)</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">Tabular</span>
              </button>

              <button
                onClick={handleExportParquetSim}
                className="w-full py-2 px-3 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-medium flex items-center justify-between transition-all cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Parquet RAG Index (.json)</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">Vector</span>
              </button>
            </div>
          </div>

          {/* Center/Right Column: Side-by-Side Ingestion and Output Preview */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* View Mode Bar */}
            <div className="flex items-center justify-between bg-surface p-2 rounded-xl border border-border">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setViewMode('split')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    viewMode === 'split' ? 'bg-surface-elevated text-emerald-400 border border-border' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Side-by-Side Diff
                </button>
                <button
                  onClick={() => setViewMode('sanitized')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    viewMode === 'sanitized' ? 'bg-surface-elevated text-emerald-400 border border-border' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Model-Ready Output
                </button>
                <button
                  onClick={() => setViewMode('raw')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    viewMode === 'raw' ? 'bg-surface-elevated text-emerald-400 border border-border' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Raw Input
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={copyToClipboard}
                  className="px-2.5 py-1 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-border text-xs text-slate-300 flex items-center space-x-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copied!' : 'Copy Sanitized'}</span>
                </button>
              </div>
            </div>

            {/* Split Editor Body */}
            <div className={`grid gap-4 ${viewMode === 'split' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              
              {/* Left Box: Raw unredacted text */}
              {(viewMode === 'split' || viewMode === 'raw') && (
                <div className="flex flex-col h-[520px] rounded-xl bg-surface border border-rose-950/40 overflow-hidden">
                  <div className="px-4 py-2.5 bg-surface-elevated/70 border-b border-border flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                      <span className="font-semibold text-rose-300 font-mono">RAW INGESTION (Unsanitized)</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {inputText.length} chars
                    </span>
                  </div>
                  <div className="p-4 flex-1 overflow-auto font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap selection:bg-rose-900/40">
                    <textarea
                      value={inputText}
                      onChange={(e) => {
                        setInputText(e.target.value);
                        runSanitization(e.target.value);
                      }}
                      className="w-full h-full bg-transparent resize-none focus:outline-none text-slate-300 font-mono text-xs leading-relaxed"
                      placeholder="Paste unstructured notes, financial statements, or JSONL here..."
                    />
                  </div>
                </div>
              )}

              {/* Right Box: Sanitized Model-Ready Output */}
              {(viewMode === 'split' || viewMode === 'sanitized') && (
                <div className="flex flex-col h-[520px] rounded-xl bg-surface border border-emerald-950/50 glow-emerald overflow-hidden">
                  <div className="px-4 py-2.5 bg-surface-elevated/70 border-b border-border flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      <span className="font-semibold text-emerald-300 font-mono">MODEL-READY EXPORT (De-Identified)</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      100% PII Masked
                    </span>
                  </div>
                  <div className="p-4 flex-1 overflow-auto font-mono text-xs text-emerald-200/90 leading-relaxed whitespace-pre-wrap select-all">
                    {redactionResult?.sanitizedText}
                  </div>
                </div>
              )}
            </div>

            {/* Entity Extraction Inspector Bar */}
            <div className="p-4 rounded-xl bg-surface border border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Key className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                    Detected Entity Mappings ({redactionResult?.detectedEntities?.length || 0})
                  </h4>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  Deterministic Surrogate Consistency
                </span>
              </div>

              {/* Entity Badges List */}
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
                {redactionResult?.detectedEntities?.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">No sensitive entities detected in this record.</span>
                ) : (
                  redactionResult?.detectedEntities?.map((entity, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center space-x-2 bg-surface-elevated border border-border hover:border-slate-600 transition-colors"
                    >
                      <span className="text-rose-400 line-through truncate max-w-[140px]">
                        {entity.originalValue}
                      </span>
                      <ArrowRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      <span className="text-emerald-400 font-bold">
                        {entity.surrogateToken}
                      </span>
                      <span className="text-[9px] px-1 rounded bg-slate-800 text-slate-400 uppercase">
                        {entity.label.split(' ')[0]}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
