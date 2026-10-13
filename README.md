# RedactBridge 🛡️
> **Regulated Data Redaction & Export Micro-Bridge**  
> *Instant client-side PII/PHI de-identification pipeline producing model-ready training and RAG files with cryptographic audit trails.*

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Compliance: HIPAA Safe Harbor](https://img.shields.io/badge/Compliance-45_CFR_§_164.514(b)(2)-blue.svg)](#18-hipaa-safe-harbor-identifiers)
[![Security: Zero-Retention](https://img.shields.io/badge/Security-Zero--Retention_Client--Side-green.svg)](#zero-trust-architecture)
[![Export: OpenAI & Anthropic](https://img.shields.io/badge/Export-OpenAI_%7C_Anthropic_JSONL-purple.svg)](#model-ready-export-engine)

---

## 1. Executive Summary & Problem Thesis
Enterprises and mid-market organizations deploying large language models face statutory compliance liabilities (**HIPAA**, **GDPR**, **GLBA**, **PCI-DSS**) when ingesting unstructured records (clinical notes, financial statements, legal depositions, and customer support transcripts).

Hyperscalers (Databricks, Snowflake, Google Cloud) provide governance tools built exclusively for centralized multi-petabyte data lakes. Mid-market engineering and operational teams lack a lightweight, verifiable bridge to sanitize ad-hoc files before sending prompts or fine-tuning datasets to model providers.

**RedactBridge** bridges this divide:
- **Zero Server Retention:** 100% in-browser client-side WebCrypto execution. Unsanitized data never leaves the engineer's device.
- **Deterministic Synthetic Tokens:** Replaces sensitive entities with consistent surrogate variables (e.g. `[PATIENT_NAME_1]`, `[ACCOUNT_NUM_1]`), preserving semantic structure for LLM attention and RAG retrieval.
- **Cryptographic Verification:** SHA-256 pre- and post-sanitization hash digests bound into verifiable audit certificates.
- **Model-Ready Ingestion:** One-click exports formatted directly for OpenAI/Anthropic `.jsonl` fine-tuning datasets, `.csv`, and columnar Parquet metadata indices.

---

## 2. Market Sizing & Playbook Validation
- **Target Audience:** 400,000 mid-market B2B SaaS companies, law practices, medical groups, and financial firms deploying internal AI.
- **Pricing:** $499/month ($5,988/year) for compliance conduits, automated batch scrubbers, and cryptographically signed audit logs.
- **Calculated TAM:** 400,000 × $5,988 = **$2.395 Billion** (exceeds the $2B venture hurdle).
- **Statutory Desperation Filter:**
  - HIPAA violations reach up to $50,000 per violation (Tier 4 willful neglect).
  - GDPR penalties reach up to 4% of global annual turnover or €20M.
  - Existing alternatives (brittle ad-hoc regex scripts or manual line-by-line scrubbing) either leak sensitive PII or bottleneck production releases for months.

---

## 3. Core Feature Matrix

| Feature | Description | Status |
| :--- | :--- | :--- |
| **Direct Batch Dropzone** | Support for `.pdf`, `.docx`, `.csv`, `.jsonl`, and `.txt` files up to 50MB. | ✅ Active |
| **18 HIPAA Safe Harbor Rules** | Complete statutory coverage per 45 CFR § 164.514(b)(2). | ✅ Active |
| **Financial PII (GLBA/PCI-DSS)** | Credit cards, ABA routing numbers, IBANs, bank accounts, and corporate EINs. | ✅ Active |
| **Consistent Surrogate Tokens** | Same entity consistently resolves to same token (`[PERSON_NAME_1]`). | ✅ Active |
| **Cryptographic Audit Certificate** | SHA-256 tamper-evident digest certificate with category breakdowns. | ✅ Active |
| **OpenAI / Claude JSONL Export** | Pre-formatted `messages` conversation blocks for fine-tuning ingestion. | ✅ Active |
| **Custom Entity Whitelist** | Client-configurable exception dictionary (e.g. drugs, cities, legal terms). | ✅ Active |

---

## 4. The 18 HIPAA Safe Harbor Identifiers
Per **45 CFR § 164.514(b)(2)**, Protected Health Information (PHI) is certified de-identified once all 18 identifiers are scrubbed:

1. **Names** — Patient, relative, physician, and employer names (`[PERSON_NAME_X]`).
2. **Geographic subdivisions smaller than a state** — Street addresses, cities, counties, and postal ZIP codes (`[GEO_ADDRESS_X]`, `[ZIP_X]`).
3. **All elements of dates** — Birth dates, admission dates, discharge dates, death dates, and ages over 89 (`[DATE_X]`).
4. **Telephone numbers** — Residential, mobile, direct clinical lines (`[PHONE_NUM_X]`).
5. **Fax numbers** — Facsimile numbers (`[FAX_NUM_X]`).
6. **Electronic mail addresses** — Personal and clinical email addresses (`[EMAIL_ADDR_X]`).
7. **Social Security Numbers** — 9-digit US taxpayer SSNs (`[SSN_X]`).
8. **Medical Record Numbers (MRN)** — Patient chart, EHR, and clinical IDs (`[CLINICAL_MRN_X]`).
9. **Health plan beneficiary numbers** — HICN, Medicare, Medicaid IDs (`[HEALTH_PLAN_ID_X]`).
10. **Account numbers** — Bank and clinical billing accounts (`[ACCOUNT_NUM_X]`).
11. **Certificate / license numbers** — Medical license, driver's licenses (`[LICENSE_NUM_X]`).
12. **Vehicle identifiers and serial numbers** — VINs and license plates (`[VEHICLE_ID_X]`).
13. **Device identifiers and serial numbers** — UDI pacemakers, stents (`[DEVICE_SERIAL_X]`).
14. **Web URLs** — Patient portal links and parameters (`[WEB_URL_X]`).
15. **IP addresses** — IPv4 and IPv6 network identifiers (`[IP_ADDR_X]`).
16. **Biometric identifiers** — Fingerprints, voiceprints, retinal notes (`[BIOMETRIC_DATA_X]`).
17. **Full-face photographic images** — Facial photo references (`[PHOTO_IMAGE_X]`).
18. **Any unique identifying number, characteristic, or code** — Catch-all tracking codes (`[UNIQUE_CODE_X]`).

---

## 5. Zero-Trust Architecture
```
┌────────────────────────────────────────────────────────┐
│                   BROWSER CLIENT RUNTIME               │
│                                                        │
│  [ Raw File / Benchmark ]                              │
│             │                                          │
│             ▼                                          │
│  [ In-Memory Stream ] ──► [ WebCrypto SHA-256 Digest ] │
│             │                                          │
│             ▼                                          │
│  [ Deterministic Regex & NER ]                         │
│             │                                          │
│             ▼                                          │
│  [ Consistent Surrogate Mapper ]                       │
│    (Eleanor Vance ──► [PERSON_NAME_1])                 │
│             │                                          │
│             ▼                                          │
│  [ Model-Ready Exporter Engine ]                       │
│    ├── OpenAI / Anthropic .jsonl                       │
│    ├── Clean Sanitized .txt                            │
│    ├── Tabular Model .csv                              │
│    └── Cryptographic Audit Certificate (.json)         │
│                                                        │
│  NO EXTERNAL SERVERS  •  NO RETENTION  •  EPHEMERAL    │
└────────────────────────────────────────────────────────┘
```

---

## 6. Model-Ready Export Formats

### 1. OpenAI / Anthropic Fine-Tuning Standard (`.jsonl`)
```json
{"messages": [{"role": "system", "content": "You are an enterprise AI assistant processing de-identified records adhering to HIPAA Safe Harbor and financial privacy standards."}, {"role": "user", "content": "Analyze the following sanitized record context:\nPATIENT: [PERSON_NAME_1] was admitted on [DATE_1] under [CLINICAL_MRN_1]..."}, {"role": "assistant", "content": "Record verified de-identified. All surrogate tokens [ENTITY_ID] preserved for RAG retrieval and zero PII leakage."}]}
```

### 2. Cryptographic Verification Certificate (`.json`)
```json
{
  "certificateId": "RB-CERT-8X29KLA",
  "standard": "HIPAA Safe Harbor (45 CFR § 164.514(b)(2)) & GLBA/PCI-DSS",
  "timestamp": "2026-10-13T14:42:16.890Z",
  "inputSHA256": "4b92c4...ee18",
  "outputSHA256": "a90f12...bc45",
  "totalEntitiesSanitized": 14,
  "entityCategoryBreakdown": {
    "Social Security Number": 1,
    "Medical Record Number": 1,
    "Patient / Person Full Name": 4,
    "Full Residential Address": 2,
    "Postal ZIP Code": 1,
    "Email Address": 1
  },
  "retentionPolicy": "Zero-Retention Verified (Ephemeral In-Memory Sanitization)",
  "complianceAttestation": "All 18 Safe Harbor identifiers and financial account tokens mapped to consistent synthetic surrogates."
}
```

---

## 7. Pricing & Customer Advisory Board (CAB)

- **Community Dev ($0/mo):** 3 batch scrubs/month, client-side WebCrypto SHA-256, OpenAI JSONL exporter.
- **Design Partner CAB ($149/mo - 70% Lifetime Discount):** 5 spots for engineering leaders. Bi-weekly feedback calls, unlimited batch scrubbers, priority roadmap input, custom surrogate token mappings.
- **Enterprise Conduit ($499/mo):** Automated batch conduits up to 50MB, custom regex pipelines, BAA & SOC2 compliance pack, dedicated Slack support.

### Customer Advisory Board Outreach Script
> *"We are assembling a 7-company Data Privacy & AI Compliance Advisory Board of mid-market engineering leaders to define the exact redaction standards for model ingestion. We are offering direct roadmap input and a 70% lifetime discount ($149/mo) for 5 design partners who participate in bi-weekly feedback calls."*

---

## 8. Quickstart & Local Development

### Prerequisites
- Node.js >= 18
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/21cabbagee/redact-bridge.git
cd redact-bridge

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```

---

## 9. License
Distributed under the MIT License. See `LICENSE` for more information.
