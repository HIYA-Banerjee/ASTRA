"use client";

import { useState, useRef } from "react";

export default function UploadPage() {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = Array.from(e.dataTransfer.files).filter((f) =>
      f.type === "application/pdf" || f.name.endsWith(".pdf")
    );
    setFiles((prev) => [...prev, ...dropped]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (idx: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== idx));

  const handleSubmit = () => {
    alert("🚧 Upload pipeline not yet connected. Phase 1 will ingest papers into ChromaDB.");
  };

  return (
    <div style={{ minHeight: "100%" }}>
      {/* Header */}
      <div className="page-header">
        <div className="badge badge-cyan" style={{ marginBottom: 10 }}>⊕ Upload</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
          Upload Research Papers
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: 6, fontSize: 14 }}>
          Add PDFs to the knowledge base · Vector embedding in Phase 1
        </p>
      </div>

      <div className="page-body" style={{ maxWidth: 720 }}>
        {/* Drop zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          style={{
            border: `2px dashed ${dragging ? "#6366f1" : "var(--border)"}`,
            borderRadius: 16,
            padding: "56px 40px",
            textAlign: "center",
            cursor: "pointer",
            background: dragging ? "var(--accent-glow)" : "var(--bg-card)",
            transition: "all 0.2s ease",
            marginBottom: 24,
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 12 }}>📄</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>
            Drop PDF files here
          </div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
            or <span style={{ color: "var(--accent-light)", fontWeight: 600 }}>click to browse</span>
          </div>
          <div style={{ marginTop: 12, fontSize: 11, color: "var(--text-muted)" }}>
            Supported: PDF · Max 50MB per file
          </div>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            multiple
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </div>

        {/* File list */}
        {files.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
              Queued Files ({files.length})
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {files.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 18 }}>📄</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{f.name}</div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                        {(f.size / 1024).toFixed(1)} KB
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(i)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                      fontSize: 16,
                      padding: "4px 8px",
                      borderRadius: 6,
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info box */}
        <div
          style={{
            padding: 16,
            background: "rgba(99,102,241,0.06)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            fontSize: 13,
            color: "var(--text-secondary)",
            marginBottom: 24,
          }}
        >
          <div style={{ fontWeight: 700, color: "var(--accent-light)", marginBottom: 6 }}>
            ℹ️ Phase 0 Note
          </div>
          Upload UI is complete. The backend ingestion pipeline (ChromaDB embedding, BERT tagging)
          will be wired up in Phase 1.
        </div>

        {/* Submit */}
        <button
          className="btn-primary"
          onClick={handleSubmit}
          style={{ width: "100%", justifyContent: "center", padding: "14px" }}
        >
          ⊕ Ingest {files.length > 0 ? `${files.length} Paper${files.length > 1 ? "s" : ""}` : "Papers"}
        </button>
      </div>
    </div>
  );
}
