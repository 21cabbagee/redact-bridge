import React from 'react';
import { ShieldCheck, Check, AlertCircle, FileText, ChevronRight } from 'lucide-react';

const SAFE_HARBOR_RULES = [
  { id: 1, name: "Names", description: "All patients, relatives, employers, or household members.", surrogate: "[PATIENT_NAME_1]", status: "Supported" },
  { id: 2, name: "Geographic Subdivisions", description: "Street addresses, cities, counties, precincts, and postal ZIP codes.", surrogate: "[GEO_ADDRESS_1], [ZIP_1]", status: "Supported" },
  { id: 3, name: "All Elements of Dates", description: "Dates of birth, admission, discharge, death, and all ages over 89.", surrogate: "[DATE_1]", status: "Supported" },
  { id: 4, name: "Telephone Numbers", description: "Mobile, residential, direct office, and triage phone numbers.", surrogate: "[PHONE_NUM_1]", status: "Supported" },
  { id: 5, name: "Fax Numbers", description: "Direct clinical, pharmacy, and corporate facsimile lines.", surrogate: "[FAX_NUM_1]", status: "Supported" },
  { id: 6, name: "Electronic Mail (Emails)", description: "Patient, physician, and staff email addresses.", surrogate: "[EMAIL_ADDR_1]", status: "Supported" },
  { id: 7, name: "Social Security Numbers", description: "9-digit US taxpayer SSNs with or without dashes.", surrogate: "[SSN_1]", status: "Supported" },
  { id: 8, name: "Medical Record Numbers (MRN)", description: "Inpatient, outpatient, chart IDs, and clinic MRNs.", surrogate: "[CLINICAL_MRN_1]", status: "Supported" },
  { id: 9, name: "Health Plan Beneficiary IDs", description: "HICN, Medicare, Medicaid, and commercial policy numbers.", surrogate: "[HEALTH_PLAN_ID_1]", status: "Supported" },
  { id: 10, name: "Account Numbers", description: "Bank, savings, deposit, and patient billing account IDs.", surrogate: "[ACCOUNT_NUM_1]", status: "Supported" },
  { id: 11, name: "Certificate / License Numbers", description: "Medical license, state driver's license, and DEA IDs.", surrogate: "[LICENSE_NUM_1]", status: "Supported" },
  { id: 12, name: "Vehicle Identifiers & Plates", description: "VIN numbers, license plate alphanumeric strings.", surrogate: "[VEHICLE_ID_1]", status: "Supported" },
  { id: 13, name: "Device Identifiers & Serial Numbers", description: "UDI pacemaker, stent, and implantable device serials.", surrogate: "[DEVICE_SERIAL_1]", status: "Supported" },
  { id: 14, name: "Web URLs", description: "Direct URLs containing patient portal links or parameters.", surrogate: "[WEB_URL_1]", status: "Supported" },
  { id: 15, name: "IP Addresses", description: "IPv4 and IPv6 network endpoint addresses.", surrogate: "[IP_ADDR_1]", status: "Supported" },
  { id: 16, name: "Biometric Identifiers", description: "Fingerprints, retinal scans, voiceprints recorded in notes.", surrogate: "[BIOMETRIC_DATA_1]", status: "Supported" },
  { id: 17, name: "Full-Face Photographic Identifiers", description: "Embedded facial photo image references.", surrogate: "[PHOTO_IMAGE_1]", status: "Supported" },
  { id: 18, name: "Any Unique Identifying Characteristic", description: "Catch-all patient tokens, admission codes, and UUIDs.", surrogate: "[UNIQUE_CODE_1]", status: "Supported" },
];

export function SafeHarborMatrix() {
  return (
    <section id="safe-harbor" className="py-16 bg-surface/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>STATUTORY COMPLIANCE SPECIFICATION</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            The 18 HIPAA Safe Harbor Identifiers
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Per 45 CFR § 164.514(b)(2), health information is formally de-identified once all 18 designated identifiers are removed. RedactBridge replaces each with model-preserving synthetic tokens.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SAFE_HARBOR_RULES.map((rule) => (
            <div 
              key={rule.id}
              className="p-4 rounded-xl bg-surface border border-border hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                    {rule.id}
                  </span>
                  <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {rule.name}
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                  {rule.status}
                </span>
              </div>

              <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                {rule.description}
              </p>

              <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Surrogate Token:</span>
                <span className="text-emerald-400 font-semibold">{rule.surrogate}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
