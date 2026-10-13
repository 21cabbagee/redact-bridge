import React, { useState } from 'react';
import { X, ShieldCheck, Download, Copy, Check, FileCode, CheckCircle2, Lock } from 'lucide-react';
import { exportAuditCertificate } from '../engine/exporter';

export function AuditCertificateModal({ certificate, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !certificate) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(certificate, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    exportAuditCertificate(certificate, `${certificate.certificateId}.json`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-surface border border-emerald-500/30 glow-emerald shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border bg-surface-elevated flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-mono flex items-center space-x-2">
                <span>Cryptographic Verification Certificate</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                  VERIFIED
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Tamper-Evident SHA-256 Audit Trail for Compliance & Legal Records
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Body */}
        <div className="p-6 space-y-6 overflow-y-auto font-sans text-xs">
          
          {/* Certificate Metadata Grid */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-background border border-border">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-mono">Certificate ID:</span>
              <span className="text-white font-mono font-bold text-sm">{certificate.certificateId}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-mono">Timestamp (UTC):</span>
              <span className="text-slate-300 font-mono">{certificate.timestamp}</span>
            </div>
            <div className="col-span-2 pt-2 border-t border-border">
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-mono">Statutory Compliance Standard:</span>
              <span className="text-emerald-400 font-mono font-medium">{certificate.standard}</span>
            </div>
          </div>

          {/* SHA-256 Hashes */}
          <div className="space-y-3 p-4 rounded-xl bg-background border border-border font-mono text-[11px]">
            <div>
              <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                <span>INPUT DIGEST (SHA-256):</span>
                <span>Pre-Sanitization</span>
              </div>
              <div className="p-2 rounded bg-surface border border-border text-slate-300 break-all select-all">
                {certificate.inputSHA256}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-emerald-400 text-[10px] mb-1">
                <span>OUTPUT DIGEST (SHA-256):</span>
                <span>Post-Sanitization (Model-Ready)</span>
              </div>
              <div className="p-2 rounded bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 break-all select-all">
                {certificate.outputSHA256}
              </div>
            </div>
          </div>

          {/* Sanitized Entities Breakdown */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span>Sanitized Entity Breakdown:</span>
              <span className="text-emerald-400 font-bold">{certificate.totalEntitiesSanitized} Entities Scrubbed</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto">
              {Object.entries(certificate.entityCategoryBreakdown || {}).map(([category, count], idx) => (
                <div key={idx} className="p-2 rounded-lg bg-background border border-border flex items-center justify-between font-mono text-[11px]">
                  <span className="text-slate-300 truncate pr-2">{category}</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Zero-Retention Attestation */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30 flex items-start space-x-3">
            <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-emerald-300 font-semibold block text-xs">
                Zero-Retention Ephemeral Attestation
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {certificate.complianceAttestation}
              </p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-border bg-surface-elevated flex items-center justify-between">
          <button
            onClick={handleCopy}
            className="px-3 py-2 rounded-lg bg-surface border border-border hover:bg-surface-hover text-slate-300 text-xs font-medium flex items-center space-x-2 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span>{copied ? 'Copied JSON!' : 'Copy Certificate JSON'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 text-xs font-semibold hover:from-emerald-400 hover:to-cyan-400 transition-all flex items-center space-x-2 cursor-pointer shadow-md shadow-emerald-500/20"
          >
            <Download className="w-3.5 h-3.5 text-slate-950" />
            <span>Download Signed Certificate (.json)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
