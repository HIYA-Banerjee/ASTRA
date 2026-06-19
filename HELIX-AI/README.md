# HELIX AI – Phase 0 Skeleton

## Overview

**HELIX AI** is a next‑generation research intelligence platform that will eventually combine Retrieval‑Augmented Generation (RAG), large‑scale classification, graph‑based knowledge storage, and multi‑agent reasoning.  

**Phase 0** focuses exclusively on **infrastructure** – a clean, production‑ready full‑stack skeleton that can be deployed today without any AI logic.

- **Frontend** – Next.js (React) + TypeScript + Tailwind CSS, Vercel‑ready.
- **Backend** – FastAPI + Uvicorn, Render‑ready.
- **Database** – Reserved folder for future ChromaDB / Neo4j migrations.

The goal is a **runnable system**:
```bash
# Frontend
cd frontend && npm run dev
# Backend
cd backend && uvicorn main:app --reload
```
All routes return `{ "message": "not implemented" }` and the health check returns `{ "status": "ok" }`.

## Project Structure
```
HELIX-AI/
├─ frontend/      # Next.js UI shell
├─ backend/       # FastAPI API shell
├─ database/     # Placeholder for future DB assets
├─ .env.example   # Example environment file
├─ README.md      # (this file)
└─ ...
```

Future phases will flesh out each component, but the current repository is *ready to run* and provides a solid foundation for rapid, safe extension.
