"""
HELIX AI — Backend Entry Point
================================
FastAPI application server for the HELIX AI Research Intelligence Platform.

Phase 0: System Skeleton — No AI logic implemented.
All routes return placeholder responses.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import settings
from utils.logger import logger

# Import API routers
from api.chat import router as chat_router
from api.upload import router as upload_router
from api.review import router as review_router
from api.classify import router as classify_router
from api.gaps import router as gaps_router
from api.dashboard import router as dashboard_router


# ──────────────────────────────────────────────
# Application Factory
# ──────────────────────────────────────────────

app = FastAPI(
    title="HELIX AI API",
    description="Research Intelligence Platform — Phase 0 Skeleton",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# ──────────────────────────────────────────────
# CORS Middleware
# ──────────────────────────────────────────────

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ──────────────────────────────────────────────
# Health Check
# ──────────────────────────────────────────────

@app.get("/health", tags=["System"])
async def health_check():
    """System health check endpoint."""
    return {"status": "ok"}


# ──────────────────────────────────────────────
# Register Routers
# ──────────────────────────────────────────────

app.include_router(chat_router, prefix="/api/chat", tags=["Chat"])
app.include_router(upload_router, prefix="/api/upload", tags=["Upload"])
app.include_router(review_router, prefix="/api/review", tags=["Review"])
app.include_router(classify_router, prefix="/api/classify", tags=["Classify"])
app.include_router(gaps_router, prefix="/api/gaps", tags=["Gaps"])
app.include_router(dashboard_router, prefix="/api/dashboard", tags=["Dashboard"])


# ──────────────────────────────────────────────
# Startup Event
# ──────────────────────────────────────────────

@app.on_event("startup")
async def startup_event():
    logger.info("🧬 HELIX AI Backend started successfully")
    logger.info(f"📡 Environment: {settings.ENVIRONMENT}")
    logger.info(f"🔗 CORS Origins: {settings.ALLOWED_ORIGINS}")


@app.on_event("shutdown")
async def shutdown_event():
    logger.info("🧬 HELIX AI Backend shutting down")
