import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, Zap, DollarSign, Clock, Lock, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * OutcomeChart for RedactBridge (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $22,000/mo manual HIPAA compliance agencies & PII de-identification firms ($6 layer)
 * with Autonomous Client-Side WebAssembly Safe Harbor Scrubber ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous HIPAA & PII Data Scrubber for Model Training",
  defaultRecords = 2500,
  onCtaClick
}) {
  const [records, setRecords] = useState(defaultRecords);

  // Legacy manual redaction services: $6.50/record in manual human reviewer inspection & legal certification
  const legacyServicesCost = records * 6.50;
  // RedactBridge software fee: $49/mo flat unlimited + $0.05/record
  const autoSoftwareCost = 49 + Math.round(records * 0.05);
  const netValueReclaimed = legacyServicesCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyServicesCost - autoSoftwareCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 5);

  return (
    <div className="relative rounded-2xl border border-emerald-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-emerald-500/40 text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $22,000/mo HIPAA Consulting Agencies ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Data Anonymization Economics: <span className="text-emerald-400">{savingsPercent}% Compliance Cost Reclaimed</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Julien Bek Thesis: Displacing expensive offshore data cleaning contractors and HIPAA law firm retainers with in-browser WebAssembly neural tokenizers.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/80 border border-emerald-500/30 rounded-xl p-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <div className="text-right">
            <div className="text-xs text-slate-400 font-mono">Net Monthly Savings</div>
            <div className="text-lg font-black text-emerald-400 font-mono">
              +${netValueReclaimed.toLocaleString()}/mo
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="my-6 bg-slate-900/60 rounded-xl p-4 border border-white/5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Monthly Patient Records & Financial Documents Scrubbed:</span>
          </label>
          <span className="text-base font-bold text-emerald-400 font-mono bg-emerald-500/10 px-3 py-0.5 rounded-lg border border-emerald-500/20">
            {records.toLocaleString()} Files/mo
          </span>
        </div>
        <input
          type="range"
          min="200"
          max="8000"
          step="100"
          value={records}
          onChange={(e) => setRecords(parseInt(e.target.value))}
          className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer h-2"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>200 Clinical Notes</span>
          <span>4,000 Fine-Tuning Corpus</span>
          <span>8,000+ Enterprise Health RAG</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Legacy Manual Services ($6) */}
        <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                <Clock className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">Human HIPAA Scrubbers</h4>
                <p className="text-xs text-rose-300/70">Manual Reviewers & Agency Retainers</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded">
              The $6 Service Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Human Review Labor ($6.50/doc):</span>
              <span className="font-mono text-rose-400 font-bold">${legacyServicesCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Turnaround Time to Training:</span>
              <span className="font-mono text-rose-400 font-bold">14 - 21 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• HIPAA Violation Risk:</span>
              <span className="font-mono text-rose-400 font-bold">Cloud Server Leakage</span>
            </div>
            <div className="border-t border-rose-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Total Human Cost:</span>
              <span className="font-mono text-rose-400">${legacyServicesCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-rose-500/30">
            <div
              className="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${legacyBarHeight}%` }}
            />
          </div>
        </div>

        {/* RedactBridge Software Layer ($1) */}
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/15 p-5 relative overflow-hidden shadow-lg shadow-emerald-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">RedactBridge WASM Engine</h4>
                <p className="text-xs text-emerald-300/80">Local In-Browser De-Identification</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
              The $1 Software Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Zero-Knowledge Privacy:</span>
              <span className="font-mono text-emerald-400 font-bold">100% Client-Side</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• 18 Safe Harbor Identifiers:</span>
              <span className="font-mono text-emerald-400 font-bold">&lt; 30 seconds</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Software Fee (Zero Per-Seat Taxes):</span>
              <span className="font-mono text-emerald-400 font-bold">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
            <div className="border-t border-emerald-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Software Price:</span>
              <span className="font-mono text-emerald-400">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-emerald-500/30">
            <div
              className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${autoBarHeight}%` }}
            />
          </div>
        </div>
      </div>

      {/* Larry Ellison Economic Guarantee Box */}
      <div className="rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/30 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>The Ellison SLA: Zero-Cloud-Transmission Guarantee</span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">100% Air-Gapped</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              RedactBridge processes 100% of PII in local browser memory via WebAssembly. Zero bytes of raw text ever touch any external server.
            </p>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
        >
          Scrub Sample File Free
        </button>
      </div>
    </div>
  );
}
