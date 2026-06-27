/**
 * HELIX AI — API Service Layer
 * ==============================
 * Central connector for all backend API calls.
 *
 * Phase 0: All functions are stubs returning placeholder data.
 * Phase 1+: Replace stub bodies with real fetch() calls to FastAPI.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

// ── Generic fetch wrapper ────────────────────────────────────────────────────

async function helixFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`HELIX API error: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

// ── Health ───────────────────────────────────────────────────────────────────

export async function getHealth(): Promise<{ status: string }> {
  return helixFetch("/health");
}

// ── Chat ─────────────────────────────────────────────────────────────────────

export async function sendChatQuery(
  _query: string
): Promise<{ message: string }> {
  // Phase 0 stub — Phase 1: replace with real RAG call
  return Promise.resolve({ message: "not implemented" });
}

// ── Upload ───────────────────────────────────────────────────────────────────

export async function uploadPaper(
  _file: File
): Promise<{ message: string }> {
  // Phase 0 stub — Phase 1: replace with FormData multipart upload
  return Promise.resolve({ message: "not implemented" });
}

// ── Literature Review ────────────────────────────────────────────────────────

export async function generateReview(
  _topic: string
): Promise<{ message: string }> {
  // Phase 0 stub — Phase 2: replace with RAG synthesis call
  return Promise.resolve({ message: "not implemented" });
}

// ── Classify ─────────────────────────────────────────────────────────────────

export async function classifyPaper(
  _text: string
): Promise<{ message: string }> {
  // Phase 0 stub — Phase 2: replace with BERT classifier call
  return Promise.resolve({ message: "not implemented" });
}

// ── Research Gaps ────────────────────────────────────────────────────────────

export async function discoverGaps(
  _field: string
): Promise<{ message: string }> {
  // Phase 0 stub — Phase 4: replace with gap engine call
  return Promise.resolve({ message: "not implemented" });
}

// ── Dashboard ────────────────────────────────────────────────────────────────

export async function getDashboardData(): Promise<{ message: string }> {
  // Phase 0 stub — Phase 1: replace with real metrics endpoint
  return Promise.resolve({ message: "not implemented" });
}
