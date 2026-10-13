export const SAMPLE_RECORDS = {
  clinicalNote: {
    name: "clinical_discharge_summary.txt",
    type: "Healthcare PHI (HIPAA Safe Harbor)",
    description: "Inpatient discharge note containing 12 statutory HIPAA identifiers including patient name, MRN, SSN, dates, and full address.",
    content: `HOSPITAL CLINICAL DISCHARGE SUMMARY & OPERATIVE NOTE
PATIENT NAME: Eleanor Vance
DATE OF BIRTH: 04/18/1976
DATE OF ADMISSION: October 14, 2024
DATE OF DISCHARGE: October 18, 2024
ATTENDING PHYSICIAN: Dr. Robert Chen, MD
MEDICAL RECORD NO: MRN-9482103
HEALTH PLAN BENEFICIARY ID: Policy: HICN-8849201
SOCIAL SECURITY NUMBER: 942-01-8392
HOME RESIDENCE: 742 Evergreen Terrace, Apt 4B, Seattle, WA
POSTAL ZIP CODE: ZIP: 98101
PRIMARY TELEPHONE: (206) 555-0192
PRIMARY EMAIL: eleanor.vance@gmail.com

CHIEF COMPLAINT:
Patient Eleanor Vance presented to the emergency department on October 14, 2024 with acute retrosternal chest pain and diaphoresis.

HOSPITAL COURSE & ASSESSMENT:
Diagnostic evaluation confirmed non-ST-elevation myocardial infarction (NSTEMI). Coronary angiography was performed by Dr. Robert Chen on October 15, 2024, demonstrating 85% stenosis in the left anterior descending artery. Drug-eluting stent successfully deployed.

DISCHARGE MEDICATIONS & INSTRUCTIONS:
1. Clopidogrel (Plavix) 75 mg daily by mouth.
2. Atorvastatin (Lipitor) 80 mg nightly.
Follow-up scheduled at the outpatient cardiology clinic at 742 Evergreen Terrace with Dr. Robert Chen in two weeks. For urgent inquiries, patient Eleanor Vance was advised to contact the triage desk at (206) 555-0192.`
  },

  financialStatement: {
    name: "wealth_advisory_wire_memo.csv",
    type: "Financial PII (GLBA / PCI-DSS)",
    description: "Corporate wealth management wire confirmation with ABA routing number, IBAN, corporate EIN, bank account, and credit card.",
    content: `TRANSACTION_ID,CLIENT_NAME,CORPORATE_EIN,ROUTING_NUMBER,ACCOUNT_NUMBER,IBAN,CREDIT_CARD_ON_FILE,CONTACT_PHONE,EMAIL
TX-98402,Marcus Brody,12-3456789,Routing: 021000021,Account # 849201948201,GB29NWBK60161331926819,4532-1920-8472-9102,(415) 555-9821,marcus.brody@brodywealth.com
TX-98403,Sarah Jenkins,98-7654321,Routing: 121000358,Account # 948102948194,DE89370400440532013000,5425-2341-9876-1234,(212) 555-8472,s.jenkins@jenkinsglobal.com`
  },

  legalDeposition: {
    name: "confidential_settlement_brief.docx",
    type: "Legal Discovery & Enterprise PII",
    description: "Sworn deposition record containing witness identities, personal SSNs, residential addresses, and confidential litigation terms.",
    content: `IN THE UNITED STATES DISTRICT COURT FOR THE WESTERN DISTRICT OF TEXAS
AUSTIN DIVISION

CASE NO: 24-CV-09412-WD
IN RE: ENTERPRISE TRADE SECRET LITIGATION

CONFIDENTIAL DEPOSITION TRANSCRIPT:
WITNESS: Sarah Jenkins
RESIDENCE: 1204 Oakwood Blvd, Austin, TX
POSTAL ZIP: ZIP: 78701
SOCIAL SECURITY NUMBER: 482-99-1029
CONTACT PHONE: (512) 555-4819
COUNSEL FOR CLAIMANT: Dr. Emily Hayes, Esq.

TESTIMONY:
Q: Ms. Sarah Jenkins, did you transmit the proprietary algorithmic weights on October 14, 2024?
A: I was at my residence at 1204 Oakwood Blvd when I received instructions from Dr. Emily Hayes. I accessed the secure server from IP address 192.168.1.104 and downloaded the customer database.
Q: Were you aware that the account registered under SSN 482-99-1029 was subject to non-disclosure restrictions?
A: Yes, Dr. Emily Hayes informed me that Sarah Jenkins was listed as the primary signatory.`
  },

  jsonlConversations: {
    name: "chat_rag_prompts.jsonl",
    type: "AI Model Fine-Tuning Standard (OpenAI / Anthropic)",
    description: "Production JSONL training records with system, user, and assistant turns ready for immediate fine-tuning export.",
    content: `{"messages": [{"role": "system", "content": "You are a clinical assistant."}, {"role": "user", "content": "Patient Eleanor Vance, born 04/18/1976 with SSN 942-01-8392 needs dosage review for Plavix. Reach her at eleanor.vance@gmail.com."}, {"role": "assistant", "content": "Patient Eleanor Vance should take 75mg daily as prescribed by Dr. Robert Chen."}]}
{"messages": [{"role": "system", "content": "You are a fintech compliance advisor."}, {"role": "user", "content": "Initiate wire transfer for Marcus Brody under corporate EIN 12-3456789 from Account # 849201948201 with Routing: 021000021."}, {"role": "assistant", "content": "Wire initiated for Marcus Brody to account 849201948201."}]}`
  }
};
