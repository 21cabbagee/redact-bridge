import React from 'react';
import { Lock, ShieldCheck, Cpu, Database, FileCheck2, Terminal, AlertTriangle } from 'lucide-react';

export function SecuritySpec() {
  return (
    <section id="compliance" className="py-20 bg-surface/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>ZERO-TRUST ARCHITECTURE SPECIFICATION</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Engineered for Zero Data Retention & Statutory Verification
          </h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Unlike cloud-hosted AI governance tools that require transmitting unredacted patient and financial records to third-party endpoints, RedactBridge runs entirely inside your browser's ephemeral memory sandbox.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Zero Server Retention</h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Files dropped into RedactBridge never leave your device. Regex compilation, NER entity extraction, and surrogate token mapping execute in local browser memory via WebCrypto and JavaScript runtime.
            </p>
            <div className="mt-4 pt-3 border-t border-border text-[11px] font-mono text-emerald-400">
              No backend ingestion servers
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Deterministic Surrogates</h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Preserve core entity relationships across prompt turns and multi-document RAG indices. The same patient or bank account consistently receives the exact same surrogate token ID (<code className="text-emerald-400">[PATIENT_NAME_1]</code>).
            </p>
            <div className="mt-4 pt-3 border-t border-border text-[11px] font-mono text-cyan-400">
              High-fidelity LLM attention preserved
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">SHA-256 Audit Verification</h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Every sanitized batch generates a cryptographically signed verification certificate with pre- and post-sanitization SHA-256 digests. Store certificates for corporate audit defenses and HIPAA compliance books.
            </p>
            <div className="mt-4 pt-3 border-t border-border text-[11px] font-mono text-indigo-400">
              Tamper-evident legal compliance proof
            </div>
          </div>

        </div>

        {/* Enterprise Comparison Banner */}
        <div className="p-8 rounded-2xl bg-surface border border-border-strong">
          <h3 className="text-lg font-bold text-white mb-6 text-center">
            How RedactBridge Solves the Mid-Market Compliance Chasm
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-border text-slate-400 font-mono text-[11px]">
                  <th className="pb-3 font-semibold">Evaluation Criteria</th>
                  <th className="pb-3 font-semibold text-rose-400">Manual Regex / Ad-Hoc Scripts</th>
                  <th className="pb-3 font-semibold text-amber-400">Centralized Cloud Lakes (Snowflake/GCP)</th>
                  <th className="pb-3 font-semibold text-emerald-400">RedactBridge Micro-Bridge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-slate-300 font-sans">
                <tr>
                  <td className="py-3 font-medium text-white">Time to First Clean File</td>
                  <td className="py-3 text-rose-300">Days to weeks of custom coding</td>
                  <td className="py-3 text-amber-300">Months of enterprise data engineering</td>
                  <td className="py-3 text-emerald-300 font-semibold font-mono">&lt; 30 seconds (browser instant)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Retention Liability</td>
                  <td className="py-3 text-rose-300">Unencrypted plaintext scripts on laptops</td>
                  <td className="py-3 text-amber-300">Cloud servers retain raw unredacted data</td>
                  <td className="py-3 text-emerald-300 font-semibold font-mono">Zero-Retention (Ephemeral in RAM)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Format Compatibility</td>
                  <td className="py-3 text-slate-400">Raw text output only</td>
                  <td className="py-3 text-slate-400">SQL tables / Parquet lakes</td>
                  <td className="py-3 text-emerald-300 font-semibold font-mono">Direct OpenAI/Claude .JSONL + CSV</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Audit Trail Provided</td>
                  <td className="py-3 text-rose-300">None</td>
                  <td className="py-3 text-slate-400">Complex CloudWatch/BigQuery logs</td>
                  <td className="py-3 text-emerald-300 font-semibold font-mono">One-click SHA-256 Certificate JSON</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Total Cost of Ownership</td>
                  <td className="py-3 text-rose-300">High engineering overhead + leak risk</td>
                  <td className="py-3 text-amber-300">$50,000 - $150,000 / year + lake fees</td>
                  <td className="py-3 text-emerald-300 font-semibold font-mono">$149/mo (CAB) or $499/mo standard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
