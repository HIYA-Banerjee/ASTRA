"""
HELIX AI — Configuration
=========================
Environment configuration loader using Pydantic settings.
"""

import os
from typing import List
from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    # ── App ──
    APP_NAME: str = "HELIX AI"
    ENVIRONMENT: str = "development"
    DEBUG: bool = True

    # ── Server ──
    HOST: str = "0.0.0.0"
    PORT: int = 8000

    # ── CORS ──
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:3001",
    ]

    # ── Future Database Connections (reserved) ──
    # CHROMA_DB_HOST: str = ""
    # NEO4J_URI: str = ""
    # NEO4J_USER: str = ""
    # NEO4J_PASSWORD: str = ""

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()

