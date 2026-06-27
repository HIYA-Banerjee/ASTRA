"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/",          icon: "⬡",  label: "Home"             },
  { href: "/dashboard", icon: "◉",  label: "Dashboard"        },
  { href: "/chat",      icon: "◈",  label: "Research Chat"    },
  { href: "/upload",    icon: "⊕",  label: "Upload Papers"    },
  { href: "/review",    icon: "≡",  label: "Literature Review" },
  { href: "/gaps",      icon: "◎",  label: "Research Gaps"    },
  { href: "/graph",     icon: "⬡",  label: "Knowledge Graph"  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div style={{ padding: "24px 20px 16px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            H
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              HELIX AI
            </div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 1 }}>
              Research Intelligence
            </div>
          </div>
        </div>

        {/* Phase badge */}
        <div
          style={{
            marginTop: 12,
            padding: "4px 10px",
            borderRadius: 6,
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.2)",
            fontSize: 11,
            color: "#10b981",
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 6px #10b981" }} />
          Phase 0 · Skeleton
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, paddingTop: 12 }}>
        <div style={{ padding: "0 12px 6px", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase" }}>
          Navigation
        </div>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${pathname === item.href ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div
        style={{
          padding: "16px 20px",
          borderTop: "1px solid var(--border)",
          fontSize: 11,
          color: "var(--text-muted)",
        }}
      >
        <div style={{ fontWeight: 600, color: "var(--text-secondary)", marginBottom: 2 }}>HELIX AI v0.1.0</div>
        <div>Phase 0 — No AI logic yet</div>
      </div>
    </aside>
  );
}
