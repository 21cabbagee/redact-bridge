import React from 'react';
import { ShieldCheck, Lock, ExternalLink } from 'lucide-react';

export function Footer({ onScrollToStudio, onOpenCAB }) {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white font-mono">Redact<span className="text-emerald-400">Bridge</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instant client-side PII/PHI de-identification pipeline producing model-ready training and RAG files with cryptographic audit trails.
            </p>
            <div className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400">
              <Lock className="w-3 h-3" />
              <span>Zero-Retention Ephemeral Pipeline</span>
            </div>
          </div>

          {/* High-Intent SEO Long-Tail Solutions */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Specialized LLM Workflows
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={onScrollToStudio} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                  Clean patient notes for LLM fine-tuning
                </button>
              </li>
              <li>
                <button onClick={onScrollToStudio} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                  Anonymize client financial statements for AI prompt
                </button>
              </li>
              <li>
                <button onClick={onScrollToStudio} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                  HIPAA compliant text scrubber for Claude
                </button>
              </li>
              <li>
                <button onClick={onScrollToStudio} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                  PII mask JSONL file generator
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Standards */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Statutory Compliance
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#safe-harbor" className="hover:text-emerald-400 transition-colors">45 CFR § 164.514(b)(2) (Safe Harbor)</a></li>
              <li><a href="#safe-harbor" className="hover:text-emerald-400 transition-colors">GLBA 15 U.S.C. § 6801-6809</a></li>
              <li><a href="#safe-harbor" className="hover:text-emerald-400 transition-colors">PCI-DSS 4.0 Primary Account Numbers</a></li>
              <li><a href="#safe-harbor" className="hover:text-emerald-400 transition-colors">GDPR Article 4(5) Pseudonymisation</a></li>
            </ul>
          </div>

          {/* Advisory & Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Advisory Board & Access
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={onOpenCAB} className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium cursor-pointer">
                  Apply for CAB ($149/mo Partner Tier)
                </button>
              </li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing & ROI Calculator</a></li>
              <li><a href="#studio" className="hover:text-emerald-400 transition-colors">Client-Side Dropzone (50MB)</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} RedactBridge Inc. All files sanitized in client browser sandbox with zero remote retention.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="font-mono text-emerald-400">SHA-256 Web Crypto Certified</span>
            <span>|</span>
            <span>Open Source Micro-Bridge</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
