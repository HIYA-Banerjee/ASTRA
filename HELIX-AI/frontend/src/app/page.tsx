import Link from "next/link";

const FEATURES = [
  {
    icon: "◈",
    title: "RAG Research Chat",
    desc: "Query 5000+ research papers with retrieval-augmented generation.",
    href: "/chat",
    color: "#6366f1",
    badge: "Phase 1",
  },
  {
    icon: "⬡",
    title: "Knowledge Graph",
    desc: "Neo4j-powered graph of concepts, citations, and relationships.",
    href: "/graph",
    color: "#22d3ee",
    badge: "Phase 3",
  },
  {
    icon: "◎",
    title: "Gap Discovery",
    desc: "AI-driven research gap detection and novelty idea generation.",
    href: "/gaps",
    color: "#a855f7",
    badge: "Phase 4",
  },
  {
    icon: "≡",
    title: "Literature Review",
    desc: "Auto-synthesize multi-paper literature reviews instantly.",
    href: "/review",
    color: "#10b981",
    badge: "Phase 2",
  },
  {
    icon: "⊕",
    title: "Paper Ingestion",
    desc: "Upload and process papers into the vector knowledge base.",
    href: "/upload",
    color: "#f59e0b",
    badge: "Phase 1",
  },
  {
    icon: "◉",
    title: "Analytics Dashboard",
    desc: "Platform metrics, corpus stats, and system health at a glance.",
    href: "/dashboard",
    color: "#ec4899",
    badge: "Phase 0",
  },
];

const STACK = [
  { label: "RAG Pipeline",    tech: "ChromaDB + LangChain",  icon: "🔍" },
  { label: "Classification",  tech: "BERT Fine-tuned",        icon: "🏷️" },
  { label: "Knowledge Graph", tech: "Neo4j + Cypher",         icon: "🕸️" },
  { label: "Multi-Agent",     tech: "LangGraph",              icon: "🤖" },
  { label: "API Layer",       tech: "FastAPI + Uvicorn",      icon: "⚡" },
  { label: "Frontend",        tech: "Next.js + Tailwind",     icon: "🎨" },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100%", position: "relative", overflow: "hidden" }}>
      {/* Background orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: "#6366f1", top: -200, left: -100 }} />
      <div className="orb" style={{ width: 400, height: 400, background: "#22d3ee", top: 200, right: -100 }} />
      <div className="orb" style={{ width: 300, height: 300, background: "#a855f7", bottom: -100, left: "40%" }} />

      {/* Hero */}
      <section style={{ padding: "80px 40px 60px", position: "relative" }}>
        <div className="animate-fadeInUp" style={{ maxWidth: 720 }}>
          <div className="badge badge-indigo" style={{ marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block", marginRight: 6, boxShadow: "0 0 6px #10b981" }} />
            Phase 0 — System Skeleton Active
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            The{" "}
            <span className="gradient-text">Intelligence Layer</span>
            <br />
            for Research Discovery
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: 600,
              marginBottom: 36,
            }}
          >
            HELIX AI indexes 5000+ research papers and surfaces insights through
            RAG-powered chat, BERT classification, Neo4j knowledge graphs, and
            automated gap discovery — so you can find and create novelty faster.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/chat" className="btn-primary">
              ◈ Start Research Chat
            </Link>
            <Link href="/dashboard" className="btn-secondary">
              ◉ View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section style={{ padding: "0 40px 60px" }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24 }}>
          Platform Modules
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {FEATURES.map((f, i) => (
            <Link
              key={f.href}
              href={f.href}
              className="glow-card animate-fadeInUp"
              style={{
                padding: 24,
                display: "block",
                textDecoration: "none",
                animationDelay: `${i * 0.08}s`,
                opacity: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${f.color}18`,
                    border: `1px solid ${f.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    color: f.color,
                  }}
                >
                  {f.icon}
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 99,
                    background: `${f.color}18`,
                    border: `1px solid ${f.color}30`,
                    color: f.color,
                    letterSpacing: "0.06em",
                  }}
                >
                  {f.badge}
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-primary)", marginBottom: 8 }}>
                {f.title}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {f.desc}
              </div>
              <div style={{ marginTop: 16, fontSize: 12, color: f.color, fontWeight: 600 }}>
                Explore → 
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section
        style={{
          margin: "0 40px 60px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: 32,
        }}
      >
        <h2 style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24 }}>
          Technology Stack
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
          {STACK.map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 22 }}>{s.icon}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{s.tech}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
