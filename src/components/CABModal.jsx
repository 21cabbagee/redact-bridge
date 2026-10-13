import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, Building2, User } from 'lucide-react';

export function CABModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Head of Engineering',
    useCase: 'Clinical Notes Fine-Tuning'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-surface border border-emerald-500/40 glow-emerald shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border bg-surface-elevated flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-sans">
                Customer Advisory Board (CAB)
              </h3>
              <p className="text-[11px] text-emerald-400 font-mono">
                5 Design Partner Seats Available — 70% Lifetime Discount
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Application Received!</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you for applying to the RedactBridge Design Partner Program. A member of our founding engineering team will reach out to <strong className="text-white font-mono">{formData.email}</strong> within 24 hours to schedule your introductory feedback session and lock in your $149/mo lifetime rate.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2 rounded-xl bg-surface-elevated border border-border text-xs font-semibold text-white hover:bg-surface-hover"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Outreach Context Box */}
              <div className="p-3.5 rounded-xl bg-surface-elevated border border-border text-xs text-slate-300 italic leading-relaxed">
                "We are assembling a 7-company Data Privacy & AI Compliance Advisory Board of mid-market engineering leaders to define the exact redaction standards for model ingestion. We are offering direct roadmap input and a 70% lifetime discount ($149/mo) for 5 design partners who participate in bi-weekly feedback calls."
              </div>

              {/* Form Fields */}
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Work Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Company Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="HealthTech AI Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-emerald-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Title / Role:</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-emerald-500/50"
                    >
                      <option>Head of Engineering</option>
                      <option>VP of Data</option>
                      <option>Chief Compliance Officer</option>
                      <option>Founding Engineer / CTO</option>
                      <option>Product Manager (AI)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Primary LLM Use Case:</label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-emerald-500/50"
                  >
                    <option>Clinical Notes De-Identification for Fine-Tuning</option>
                    <option>Financial Statement PII Sanitization for Prompt Ingestion</option>
                    <option>Legal Deposition Discovery Masking</option>
                    <option>RAG Vector Store Pre-Ingestion Sanitization</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <span>Submit Design Partner Application ($149/mo)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center text-[10px] text-slate-400 font-mono">
                No credit card required upfront. 14-day evaluation period.
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
