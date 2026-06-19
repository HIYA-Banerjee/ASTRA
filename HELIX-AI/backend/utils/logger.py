"""
HELIX AI — Logger Utility
===========================
Centralized logging configuration for the platform.
"""

import logging
import sys
from datetime import datetime


def setup_logger(name: str = "helix-ai") -> logging.Logger:
    """
    Create and configure a structured logger instance.

    Args:
        name: Logger name identifier.

    Returns:
        Configured logging.Logger instance.
    """
    logger = logging.getLogger(name)

    if not logger.handlers:
        logger.setLevel(logging.DEBUG)

        # ── Console Handler ──
        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setLevel(logging.INFO)

        # ── Formatter ──
        formatter = logging.Formatter(
            fmt="%(asctime)s │ %(levelname)-8s │ %(name)s │ %(message)s",
            datefmt="%Y-%m-%d %H:%M:%S",
        )
        console_handler.setFormatter(formatter)
        logger.addHandler(console_handler)

    return logger


# Singleton logger instance
logger = setup_logger()
