"use client";

import { useState } from "react";

const SAMPLE_TOPICS = [
  "Large Language Models",
  "Federated Learning",
  "Graph Neural Networks",
  "Diffusion Models",
  "Reinforcement Learning from Human Feedback",
];

export default function ReviewPage() {
  const [topic, setTopic] = useState("");
  const [depth, setDepth] = useState<"brief" | "standard" | "deep">("standard");
  const [submitted, setSubmitted] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setTopic("");
  };

  return (
    <div style={{ minHeight: "100%" }}>
      {/* Header */}
      <div className="page-header">
        <div className="badge badge-purple" style={{ marginBottom: 10 }}>≡ Literature Review</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
          Auto Literature Review
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: 6, fontSize: 14 }}>
          Multi-paper synthesis powered by RAG · Available in Phase 2
        </p>
      </div>

      <div className="page-body">
        {!submitted ? (
          <div style={{ maxWidth: 680 }}>
            {/* Topic input */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>
                Research Topic
              </label>
              <input
                className="helix-input"
                placeholder="e.g. Transformer architectures in NLP"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            {/* Sample topics */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 10 }}>Quick select:</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SAMPLE_TOPICS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTopic(t)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 99,
                      background: topic === t ? "var(--accent-glow)" : "var(--bg-card)",
                      border: `1px solid ${topic === t ? "var(--accent)" : "var(--border)"}`,
                      color: topic === t ? "var(--accent-light)" : "var(--text-secondary)",
                      fontSize: 12,
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Review depth */}
            <div style={{ marginBottom: 32 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 10 }}>
                Review Depth
              </label>
              <div style={{ display: "flex", gap: 10 }}>
                {(["brief", "standard", "deep"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDepth(d)}
                    style={{
                      flex: 1,
                      padding: "12px 16px",
                      borderRadius: 10,
                      background: depth === d ? "var(--accent-glow)" : "var(--bg-card)",
                      border: `1px solid ${depth === d ? "var(--accent)" : "var(--border)"}`,
                      color: depth === d ? "var(--accent-light)" : "var(--text-secondary)",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      textTransform: "capitalize",
                      transition: "all 0.2s",
                    }}
                  >
                    {d === "brief" ? "📝 Brief" : depth === d && d === "standard" ? "📋 Standard" : d === "standard" ? "📋 Standard" : "📚 Deep"}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={handleGenerate}
              disabled={!topic.trim()}
              style={{
                width: "100%",
                justifyContent: "center",
                padding: 14,
                opacity: topic.trim() ? 1 : 0.5,
                cursor: topic.trim() ? "pointer" : "not-allowed",
              }}
            >
              ≡ Generate Literature Review
            </button>
          </div>
        ) : (
          <div style={{ maxWidth: 720 }}>
            {/* Placeholder result */}
            <div
              style={{
                padding: 32,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                marginBottom: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>{topic}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>
                    Depth: <span style={{ color: "var(--accent-light)", textTransform: "capitalize" }}>{depth}</span>
                  </div>
                </div>
                <span className="badge badge-purple">Phase 2</span>
              </div>

              <div
                style={{
                  padding: 20,
                  background: "rgba(168,85,247,0.06)",
                  borderRadius: 12,
                  border: "1px solid rgba(168,85,247,0.2)",
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                }}
              >
                🚧 <strong style={{ color: "var(--text-primary)" }}>RAG pipeline not yet connected.</strong>
                <br /><br />
                In Phase 2, this section will contain a synthesized literature review across all indexed
                papers on <em style={{ color: "var(--accent-light)" }}>{topic}</em>, with citations,
                methodology comparison, and a structured summary organized by sub-themes.
              </div>
            </div>

            <button onClick={handleReset} className="btn-secondary">
              ← New Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
