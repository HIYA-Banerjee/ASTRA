"use client";

import { useState } from "react";

const SAMPLE_NODES = [
  { id: "transformer", label: "Transformer", x: 50, y: 30, color: "#6366f1", size: 22 },
  { id: "attention",   label: "Attention",   x: 22, y: 55, color: "#22d3ee", size: 16 },
  { id: "bert",        label: "BERT",        x: 50, y: 68, color: "#a855f7", size: 18 },
  { id: "gpt",         label: "GPT",         x: 78, y: 55, color: "#f59e0b", size: 18 },
  { id: "rag",         label: "RAG",         x: 30, y: 82, color: "#10b981", size: 14 },
  { id: "finetune",    label: "Fine-tuning", x: 70, y: 82, color: "#ec4899", size: 14 },
  { id: "embeddings",  label: "Embeddings",  x: 50, y: 10, color: "#22d3ee", size: 12 },
];

const EDGES = [
  ["transformer", "attention"],
  ["transformer", "bert"],
  ["transformer", "gpt"],
  ["attention",   "bert"],
  ["bert",        "rag"],
  ["gpt",         "finetune"],
  ["transformer", "embeddings"],
  ["bert",        "finetune"],
];

export default function GraphPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const getNode = (id: string) => SAMPLE_NODES.find((n) => n.id === id)!;
  const selectedNode = selected ? getNode(selected) : null;

  return (
    <div style={{ minHeight: "100%" }}>
      {/* Header */}
      <div className="page-header">
        <div className="badge badge-cyan" style={{ marginBottom: 10 }}>⬡ Knowledge Graph</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
          Research Knowledge Graph
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: 6, fontSize: 14 }}>
          Neo4j-powered concept graph · Citation network · Available in Phase 3
        </p>
      </div>

      <div className="page-body">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 20 }}>
          {/* Graph canvas */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              aspectRatio: "16/9",
            }}
          >
            {/* Phase label */}
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                padding: "6px 12px",
                background: "rgba(0,0,0,0.6)",
                borderRadius: 8,
                fontSize: 11,
                color: "var(--text-muted)",
                backdropFilter: "blur(8px)",
                zIndex: 10,
              }}
            >
              Sample graph · Phase 3 will connect to Neo4j
            </div>

            <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position: "absolute", inset: 0 }}>
              {/* Edges */}
              {EDGES.map(([a, b]) => {
                const na = getNode(a);
                const nb = getNode(b);
                const isHighlighted =
                  selected === a || selected === b || (!selected);
                return (
                  <line
                    key={`${a}-${b}`}
                    x1={na.x}
                    y1={na.y}
                    x2={nb.x}
                    y2={nb.y}
                    stroke={isHighlighted ? "rgba(99,102,241,0.4)" : "rgba(99,102,241,0.1)"}
                    strokeWidth="0.4"
                    style={{ transition: "stroke 0.3s" }}
                  />
                );
              })}

              {/* Nodes */}
              {SAMPLE_NODES.map((node) => {
                const isSelected = selected === node.id;
                const isDimmed = selected && !isSelected;
                return (
                  <g
                    key={node.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelected(isSelected ? null : node.id)}
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size / 4}
                      fill={node.color}
                      opacity={isDimmed ? 0.3 : 1}
                      style={{ filter: isSelected ? `drop-shadow(0 0 4px ${node.color})` : "none", transition: "all 0.3s" }}
                    />
                    <text
                      x={node.x}
                      y={node.y + node.size / 4 + 2.5}
                      textAnchor="middle"
                      fontSize="2.5"
                      fill={isDimmed ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.8)"}
                      style={{ transition: "all 0.3s", userSelect: "none" }}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Node detail panel */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: 20,
            }}
          >
            {selectedNode ? (
              <>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${selectedNode.color}20`,
                    border: `2px solid ${selectedNode.color}50`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    marginBottom: 14,
                  }}
                >
                  ⬡
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>{selectedNode.label}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>
                  Concept Node · ID: {selectedNode.id}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Connected to{" "}
                  {EDGES
                    .filter((e) => e.includes(selectedNode.id))
                    .map((e) => e.find((x) => x !== selectedNode.id))
                    .map((id) => (
                      <span
                        key={id}
                        style={{ color: selectedNode.color, fontWeight: 600, cursor: "pointer" }}
                        onClick={() => setSelected(id!)}
                      >
                        {getNode(id!).label}
                        {" "}
                      </span>
                    ))}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="btn-secondary"
                  style={{ marginTop: 20, width: "100%", justifyContent: "center", fontSize: 12 }}
                >
                  Clear Selection
                </button>
              </>
            ) : (
              <div style={{ textAlign: "center", paddingTop: 40 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>⬡</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>
                  Click a node to explore
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  {SAMPLE_NODES.length} nodes · {EDGES.length} edges
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Phase info */}
        <div
          style={{
            marginTop: 20,
            padding: 16,
            background: "rgba(34,211,238,0.05)",
            border: "1px solid rgba(34,211,238,0.15)",
            borderRadius: 12,
            fontSize: 13,
            color: "var(--text-secondary)",
          }}
        >
          <strong style={{ color: "#22d3ee" }}>Phase 3 →</strong> This graph will be powered by Neo4j with
          real paper citations, author networks, concept co-occurrence, and dynamic Cypher query exploration.
        </div>
      </div>
    </div>
  );
}
