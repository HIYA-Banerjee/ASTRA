const STATS = [
  { label: "Papers Indexed",   value: "0",    unit: "",   color: "#6366f1", icon: "📄" },
  { label: "Queries Run",      value: "0",    unit: "",   color: "#22d3ee", icon: "◈"  },
  { label: "Graph Nodes",      value: "0",    unit: "",   color: "#a855f7", icon: "⬡"  },
  { label: "Gaps Detected",    value: "0",    unit: "",   color: "#10b981", icon: "◎"  },
];

const MODULES = [
  { name: "RAG Pipeline",    status: "Pending Phase 1", color: "#f59e0b" },
  { name: "BERT Classifier", status: "Pending Phase 2", color: "#f59e0b" },
  { name: "Neo4j Graph",     status: "Pending Phase 3", color: "#f59e0b" },
  { name: "Gap Engine",      status: "Pending Phase 4", color: "#f59e0b" },
  { name: "FastAPI Backend", status: "Online",           color: "#10b981" },
  { name: "Next.js Frontend",status: "Online",           color: "#10b981" },
];

export default function DashboardPage() {
  return (
    <div style={{ minHeight: "100%" }}>
      {/* Header */}
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="badge badge-indigo" style={{ marginBottom: 10 }}>◉ Dashboard</div>
            <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
              Platform Overview
            </h1>
            <p style={{ color: "var(--text-secondary)", marginTop: 6, fontSize: 14 }}>
              System status, metrics, and module health for HELIX AI.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 10 }}>
            <span className="status-dot" />
            <span style={{ fontSize: 13, color: "#10b981", fontWeight: 600 }}>System Online</span>
          </div>
        </div>
      </div>

      <div className="page-body">
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
          {STATS.map((s) => (
            <div key={s.label} className="stat-card animate-fadeInUp">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <span style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Phase 0</span>
              </div>
              <div style={{ fontSize: 36, fontWeight: 800, color: s.color, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Module status */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 20 }}>Module Status</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {MODULES.map((m) => (
              <div
                key={m.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  background: "var(--bg-secondary)",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: m.color,
                      boxShadow: `0 0 6px ${m.color}`,
                    }}
                  />
                  <span style={{ fontSize: 12, color: m.color, fontWeight: 600 }}>{m.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
