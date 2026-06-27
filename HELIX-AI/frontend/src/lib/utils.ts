/**
 * HELIX AI — Utility Library
 * ============================
 * Shared helper functions across the frontend.
 */

// ── Date & Time ──────────────────────────────────────────────────────────────

/**
 * Format a Date to a human-readable relative string.
 * e.g. "2 minutes ago", "3 days ago"
 */
export function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const intervals: [number, string][] = [
    [31536000, "year"],
    [2592000,  "month"],
    [86400,    "day"],
    [3600,     "hour"],
    [60,       "minute"],
    [1,        "second"],
  ];
  for (const [secs, label] of intervals) {
    const count = Math.floor(seconds / secs);
    if (count >= 1) return `${count} ${label}${count > 1 ? "s" : ""} ago`;
  }
  return "just now";
}

/**
 * Format bytes to a human-readable size string.
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

// ── String ───────────────────────────────────────────────────────────────────

/**
 * Truncate a string to a max length with ellipsis.
 */
export function truncate(str: string, max = 80): string {
  return str.length <= max ? str : `${str.slice(0, max)}…`;
}

/**
 * Convert a string to title case.
 */
export function titleCase(str: string): string {
  return str.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

// ── Validation ───────────────────────────────────────────────────────────────

/**
 * Check if a file is a valid PDF.
 */
export function isPDF(file: File): boolean {
  return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// ── Class names ───────────────────────────────────────────────────────────────

/**
 * Join class name strings, filtering out falsy values.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
