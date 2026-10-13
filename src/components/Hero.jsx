import React from 'react';
import { ShieldCheck, ArrowRight, FileCheck, Lock, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export function Hero({ onScrollToStudio, onOpenCAB }) {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Compliance pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-surface border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>45 CFR § 164.514(b)(2) & PCI-DSS 4.0 Standard Compliant</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Client-Side WebAssembly Pipeline</span>
        </div>

        {/* Mandatory SEO H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
          HIPAA & PII Data Scrubber for Model Training and Prompts
        </h1>

        {/* Subtitle with product thesis */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Instant client-side PII/PHI de-identification pipeline producing model-ready training and RAG files with cryptographic audit trails.
          Safely <strong className="text-white font-semibold">clean patient notes for LLM fine-tuning</strong> and <strong className="text-white font-semibold">anonymize client financial statements for AI prompts</strong> in under 30 seconds.
        </p>

        {/* Feature badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-300">
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>18 HIPAA Safe Harbor Identifiers</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Financial PII (GLBA & PCI-DSS)</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>OpenAI & Claude JSONL Exporter</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>SHA-256 Verification Certificate</span>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToStudio}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm hover:from-emerald-400 hover:to-cyan-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <ShieldCheck className="w-5 h-5 text-slate-950" />
            <span>Launch Scrubbing Studio</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onOpenCAB}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-surface border border-border-strong text-slate-200 font-medium text-sm hover:bg-surface-hover hover:border-slate-600 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Design Partner CAB ($149/mo)</span>
          </button>
        </div>

        {/* Statutory penalty / desperation filter stats */}
        <div className="mt-14 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 mt-1">Client-Side Zero-Trust Retention</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Files never touch remote servers</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-white">18/18</div>
            <div className="text-xs text-slate-400 mt-1">HIPAA Safe Harbor Coverage</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Names, MRNs, SSNs, Geocodes, IPs</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-cyan-400">&lt; 30ms</div>
            <div className="text-xs text-slate-400 mt-1">Execution Speed</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Sub-second client WebCrypto engine</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-rose-400">$50,000</div>
            <div className="text-xs text-slate-400 mt-1">Max Penalty Per Violation Avoided</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Statutory HHS OCR Tier 4 liability</div>
          </div>
        </div>
      </div>
    </section>
  );
}
