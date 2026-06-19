"""
HELIX AI — Helper Utilities
==============================
Common utility functions used across the platform.

Phase 0: Basic helpers only — no AI/ML logic.
"""

from datetime import datetime, timezone
from typing import Any, Dict


def get_timestamp() -> str:
    """Return current UTC timestamp in ISO format."""
    return datetime.now(timezone.utc).isoformat()


def create_response(
    data: Any = None,
    message: str = "success",
    status: str = "ok",
) -> Dict[str, Any]:
    """
    Create a standardized API response envelope.

    Args:
        data: Response payload.
        message: Human-readable message.
        status: Response status indicator.

    Returns:
        Structured response dictionary.
    """
    return {
        "status": status,
        "message": message,
        "data": data,
        "timestamp": get_timestamp(),
    }


def sanitize_filename(filename: str) -> str:
    """
    Sanitize a filename by removing unsafe characters.

    Args:
        filename: Original filename string.

    Returns:
        Cleaned filename string.
    """
    unsafe_chars = ['<', '>', ':', '"', '/', '\\', '|', '?', '*']
    for char in unsafe_chars:
        filename = filename.replace(char, '_')
    return filename.strip()
