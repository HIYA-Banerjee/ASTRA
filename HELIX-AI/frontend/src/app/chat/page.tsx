"use client";

import { useState } from "react";

const EXAMPLE_QUERIES = [
  "What are the latest methods in transformer-based NLP?",
  "Summarize recent advances in graph neural networks",
  "What gaps exist in federated learning research?",
  "Compare attention mechanisms across architectures",
];

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "ai", text: "🚧 RAG pipeline not yet connected. This feature will be available in Phase 1. Your query has been logged." },
    ]);
    setInput("");
  };

  const handleExample = (q: string) => setInput(q);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Header */}
      <div className="page-header">
        <div className="badge badge-indigo" style={{ marginBottom: 10 }}>◈ Research Chat</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
          Ask the Research Brain
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: 6, fontSize: 14 }}>
          Query 5000+ papers using RAG · Powered by LangGraph (Phase 1)
        </p>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px 40px" }}>
        {messages.length === 0 ? (
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 32, color: "var(--text-muted)", fontSize: 14 }}>
              No messages yet. Try an example query below.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {EXAMPLE_QUERIES.map((q) => (
                <button
                  key={q}
                  onClick={() => handleExample(q)}
                  className="glow-card"
                  style={{
                    padding: 16,
                    textAlign: "left",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    color: "var(--text-secondary)",
                    fontSize: 13,
                    cursor: "pointer",
                    lineHeight: 1.5,
                  }}
                >
                  "{q}"
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "75%",
                    padding: "12px 16px",
                    borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background: m.role === "user"
                      ? "linear-gradient(135deg, #6366f1, #a855f7)"
                      : "var(--bg-card)",
                    border: m.role === "ai" ? "1px solid var(--border)" : "none",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "var(--text-primary)",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input bar */}
      <div style={{ padding: "16px 40px 24px", borderTop: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", gap: 12 }}>
          <input
            className="helix-input"
            placeholder="Ask a research question…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            style={{ flex: 1 }}
          />
          <button
            className="btn-primary"
            onClick={handleSend}
            disabled={!input.trim()}
            style={{ opacity: input.trim() ? 1 : 0.5, cursor: input.trim() ? "pointer" : "not-allowed" }}
          >
            Send ↑
          </button>
        </div>
      </div>
    </div>
  );
}
