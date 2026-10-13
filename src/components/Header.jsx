import React from 'react';
import { ShieldCheck, Lock, Sparkles, ExternalLink, Cpu } from 'lucide-react';

export function Header({ onOpenCAB, onScrollToStudio }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/40 text-emerald-400">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold tracking-tight text-white font-mono">Redact<span className="text-emerald-400">Bridge</span></span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase">
                v1.0 Zero-Trust
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Regulated Data Redaction & Export Micro-Bridge</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <button 
            onClick={onScrollToStudio} 
            className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5"
          >
            <span>Live Studio</span>
          </button>
          <a href="#safe-harbor" className="hover:text-emerald-400 transition-colors">
            18 Safe Harbor Rules
          </a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors">
            Pricing
          </a>
          <a href="#compliance" className="hover:text-emerald-400 transition-colors">
            Security Spec
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>100% Client-Side Sandbox</span>
          </div>

          <button
            onClick={onOpenCAB}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:from-emerald-400 hover:to-cyan-400 transition-all shadow-sm hover:shadow-emerald-500/20 flex items-center space-x-1.5 cursor-pointer font-sans"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join CAB ($149/mo)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
