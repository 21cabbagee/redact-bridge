import React from 'react';
import { Check, Sparkles, ShieldCheck, Zap, ArrowRight, HelpCircle } from 'lucide-react';

export function PricingSection({ onOpenCAB, onScrollToStudio }) {
  return (
    <section id="pricing" className="py-20 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Compliance Conduits for AI Deployments
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Eliminate statutory HIPAA/GDPR liability without paying $100K+ for centralized enterprise data lakes.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1: Free Developer Tier */}
          <div className="rounded-2xl bg-surface border border-border p-8 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-sans">Community Dev</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-slate-400 border border-border">
                  Sandbox
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                For individual engineers testing prompt sanitization pipelines.
              </p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white font-mono">$0</span>
                <span className="text-xs text-slate-400 ml-2 font-mono">/ month</span>
              </div>

              <ul className="mt-8 space-y-3 text-xs text-slate-300">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>3 batch file scrubs / month</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>18 HIPAA Safe Harbor extraction</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Client-side WebCrypto SHA-256</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>OpenAI JSONL export</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onScrollToStudio}
              className="mt-8 w-full py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              Start Free in Browser
            </button>
          </div>

          {/* Tier 2: Customer Advisory Board (CAB) Design Partner (Featured) */}
          <div className="rounded-2xl bg-surface border-2 border-emerald-500/50 p-8 flex flex-col justify-between glow-emerald relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 text-[11px] font-bold font-mono uppercase tracking-wider shadow-md">
              70% Lifetime CAB Discount
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-sans flex items-center space-x-2">
                  <span>Design Partner CAB</span>
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  5 SPOTS OPEN
                </span>
              </div>
              <p className="text-xs text-emerald-300/80 mt-2">
                Join our 7-company Data Privacy & AI Compliance Advisory Board.
              </p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white font-mono">$149</span>
                <span className="text-xs text-slate-400 ml-2 font-mono">/ mo (locked lifetime)</span>
              </div>
              <div className="text-[10px] text-slate-400 line-through font-mono mt-0.5">Regular: $499/mo</div>

              <ul className="mt-8 space-y-3 text-xs text-slate-200">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium text-white">Direct roadmap co-design input</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Bi-weekly feedback calls with founding team</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Unlimited batch file scrubbing</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Cryptographically signed audit logs</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Custom surrogate token dictionaries</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCAB}
              className="mt-8 w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for CAB Membership</span>
            </button>
          </div>

          {/* Tier 3: Standard Enterprise */}
          <div className="rounded-2xl bg-surface border border-border p-8 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-sans">Enterprise Conduit</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-slate-400 border border-border">
                  Annual B2B
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                For healthcare, fintech, and legal companies in production.
              </p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white font-mono">$499</span>
                <span className="text-xs text-slate-400 ml-2 font-mono">/ mo ($5,988/yr)</span>
              </div>

              <ul className="mt-8 space-y-3 text-xs text-slate-300">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Automated batch scrubbers (up to 50MB)</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>18 HIPAA + GLBA/PCI-DSS rulesets</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Verifiable SHA-256 certificate export</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Business Associate Agreement (BAA)</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated Slack compliance support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCAB}
              className="mt-8 w-full py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              Request Enterprise Contract
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
