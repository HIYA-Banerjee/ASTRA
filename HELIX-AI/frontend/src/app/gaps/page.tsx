"use client";

import { useState } from "react";

const DOMAINS = [
  "Computer Vision",
  "Natural Language Processing",
  "Reinforcement Learning",
  "Federated Learning",
  "Graph Neural Networks",
  "Diffusion Models",
  "Quantum ML",
  "Multimodal AI",
];

const SAMPLE_GAPS = [
  {
    title: "Sparse Attention in Long-Context Retrieval",
    domain: "NLP",
    novelty: 92,
    desc: "Current RAG systems struggle with 100k+ token documents. Hybrid sparse-dense attention for retrieval is underexplored.",
    color: "#6366f1",
  },
  {
    title: "Cross-Domain GNN Transfer Learning",
    domain: "Graph ML",
    novelty: 87,
    desc: "Pre-trained GNNs rarely generalize across molecular, social, and citation domains without fine-tuning.",
    color: "#22d3ee",
  },
  {
    title: "Privacy-Preserving Knowledge Graph Construction",
    domain: "Federated Learning",
    novelty: 95,
    desc: "Building knowledge graphs from distributed data without exposing raw node information is an open problem.",
    color: "#a855f7",
  },
];

export default function GapsPage() {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [field, setField] = useState("");
  const [revealed, setRevealed] = useState(false);

  const handleDiscover = () => {
    if (!field.trim() && !selectedDomain) return;
    setRevealed(true);
  };

  return (
    <div style={{ minHeight: "100%" }}>
      {/* Header */}
      <div className="page-header">
        <div className="badge badge-purple" style={{ marginBottom: 10 }}>◎ Research Gaps</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
          Gap Discovery Engine
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: 6, fontSize: 14 }}>
          Detect unexplored research directions · Novelty scoring · Phase 4
        </p>
      </div>

      <div className="page-body">
        {/* Input panel */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 28,
            maxWidth: 720,
            marginBottom: 32,
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>
              Research Field
            </label>
            <input
              className="helix-input"
              placeholder="e.g. Federated learning with differential privacy"
              value={field}
              onChange={(e) => setField(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 10 }}>
              Domain
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {DOMAINS.map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDomain(d === selectedDomain ? "" : d)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 99,
                    background: selectedDomain === d ? "var(--purple-glow)" : "var(--bg-secondary)",
                    border: `1px solid ${selectedDomain === d ? "rgba(168,85,247,.5)" : "var(--border)"}`,
                    color: selectedDomain === d ? "#a855f7" : "var(--text-secondary)",
                    fontSize: 12,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <button
            className="btn-primary"
            onClick={handleDiscover}
            disabled={!field.trim() && !selectedDomain}
            style={{
              opacity: field.trim() || selectedDomain ? 1 : 0.5,
              cursor: field.trim() || selectedDomain ? "pointer" : "not-allowed",
            }}
          >
            ◎ Discover Research Gaps
          </button>
        </div>

        {/* Results */}
        {revealed && (
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>
                Detected Gaps
                <span style={{ marginLeft: 8, fontSize: 12, color: "var(--text-muted)" }}>
                  (Phase 0 — sample data)
                </span>
              </div>
              <button onClick={() => setRevealed(false)} className="btn-secondary" style={{ fontSize: 12, padding: "6px 14px" }}>
                Reset
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SAMPLE_GAPS.map((g) => (
                <div
                  key={g.title}
                  className="glow-card animate-fadeInUp"
                  style={{ padding: 24, opacity: 0 }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                        {g.title}
                      </div>
                      <span
                        style={{
                          fontSize: 11,
                          padding: "3px 10px",
                          borderRadius: 99,
                          background: `${g.color}18`,
                          border: `1px solid ${g.color}30`,
                          color: g.color,
                          fontWeight: 600,
                        }}
                      >
                        {g.domain}
                      </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: g.color, lineHeight: 1 }}>
                        {g.novelty}
                      </div>
                      <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        Novelty Score
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {g.desc}
                  </p>

                  {/* Novelty bar */}
                  <div style={{ marginTop: 16 }}>
                    <div style={{ height: 4, background: "var(--bg-secondary)", borderRadius: 99, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${g.novelty}%`,
                          background: `linear-gradient(90deg, ${g.color}, ${g.color}80)`,
                          borderRadius: 99,
                          transition: "width 0.8s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
