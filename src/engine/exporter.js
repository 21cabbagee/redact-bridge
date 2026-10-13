/**
 * RedactBridge — Model-Ready Exporter & Cryptographic Audit Download
 * Generates formatted OpenAI/Anthropic fine-tuning .jsonl, .csv, .txt, and audit certificates.
 */

// Trigger browser file download
export function triggerDownload(content, filename, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 1. Export as OpenAI / Anthropic formatted JSONL
export function exportToJSONL(sanitizedText, filename = 'redacted_model_dataset.jsonl') {
  const lines = sanitizedText.split('\n\n').filter(p => p.trim().length > 0);
  const jsonlEntries = lines.map((para, index) => {
    return JSON.stringify({
      messages: [
        {
          role: "system",
          content: "You are an enterprise AI assistant processing de-identified records adhering to HIPAA Safe Harbor and financial privacy standards."
        },
        {
          role: "user",
          content: `Analyze the following sanitized record context:\n${para.trim()}`
        },
        {
          role: "assistant",
          content: `Record verified de-identified. All surrogate tokens [ENTITY_ID] preserved for RAG retrieval and zero PII leakage.`
        }
      ]
    });
  });

  const fullJsonl = jsonlEntries.join('\n');
  triggerDownload(fullJsonl, filename, 'application/json');
}

// 2. Export as Clean Text
export function exportToText(sanitizedText, filename = 'redacted_clean_record.txt') {
  triggerDownload(sanitizedText, filename, 'text/plain');
}

// 3. Export as CSV
export function exportToCSV(sanitizedText, filename = 'redacted_records.csv') {
  const lines = sanitizedText.split('\n').filter(l => l.trim().length > 0);
  const csvRows = ['"ROW_ID","SANITIZED_CONTENT"'];
  lines.forEach((line, idx) => {
    const escaped = line.replace(/"/g, '""');
    csvRows.push(`"${idx + 1}","${escaped}"`);
  });
  triggerDownload(csvRows.join('\n'), filename, 'text/csv');
}

// 4. Export Cryptographic Audit Certificate JSON
export function exportAuditCertificate(certificate, filename = 'redactbridge_audit_certificate.json') {
  const jsonStr = JSON.stringify(certificate, null, 2);
  triggerDownload(jsonStr, filename, 'application/json');
}
