<div align="center">

# 🧬 HELIX AI
### *Research Intelligence Platform*

**Index 5000+ papers · RAG-powered chat · BERT classification · Neo4j knowledge graphs · Automated gap discovery**

[![Phase](https://img.shields.io/badge/Phase-0%20%E2%80%94%20Skeleton-10b981?style=for-the-badge&labelColor=0a0f1e)](.)
[![Stack](https://img.shields.io/badge/Stack-Next.js%20%2B%20FastAPI-6366f1?style=for-the-badge&labelColor=0a0f1e)](.)
[![License](https://img.shields.io/badge/License-MIT-a855f7?style=for-the-badge&labelColor=0a0f1e)](.)

</div>

---

## 🌌 What is HELIX AI?

HELIX AI is a next-generation **research intelligence brain** — a full-stack platform that indexes thousands of academic papers and surfaces knowledge through:

| Capability | Technology | Phase |
|---|---|---|
| 🔍 **RAG Research Chat** | ChromaDB + LangChain + LangGraph | Phase 1 |
| 🏷️ **Paper Classification** | Fine-tuned BERT | Phase 2 |
| 📝 **Literature Review** | Multi-doc RAG synthesis | Phase 2 |
| 🕸️ **Knowledge Graph** | Neo4j + Cypher | Phase 3 |
| ◎ **Gap Discovery** | Graph traversal + LLM reasoning | Phase 4 |
| 💡 **Novelty Ideation** | LangGraph multi-agent | Phase 4 |

> **Current status:** Phase 0 — Full-stack skeleton is live. No AI logic yet. Ready for Phase 1 integration.

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- Python 3.10+
- npm or yarn

### 1 · Clone & setup
```bash
git clone <your-repo-url>
cd HELIX-AI
```

### 2 · Start the Backend (FastAPI)
```bash
cd backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Copy env file
cp .env.example .env

# Start the server
uvicorn main:app --reload
```
Backend is now live at → **http://localhost:8000**
Interactive API docs at → **http://localhost:8000/docs**

### 3 · Start the Frontend (Next.js)
```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```
Frontend is now live at → **http://localhost:3000** 🚀

---

## 🏗️ Project Structure

```
HELIX-AI/
│
├── frontend/                        # Next.js 16 · App Router · TypeScript · Tailwind
│   └── src/
│       ├── app/
│       │   ├── page.tsx             # 🏠 Landing page — hero + feature grid
│       │   ├── dashboard/           # 📊 Platform metrics & system status
│       │   ├── chat/                # 💬 RAG research chat UI
│       │   ├── upload/              # 📄 Paper upload with drag-and-drop
│       │   ├── review/              # 📋 Literature review generator
│       │   ├── gaps/                # ◎  Gap discovery & novelty scoring
│       │   ├── graph/               # 🕸️  Interactive knowledge graph
│       │   ├── layout.tsx           # Root layout with Sidebar
│       │   └── globals.css          # Full design system & animations
│       ├── components/
│       │   └── Sidebar.tsx          # Navigation sidebar with active states
│       ├── services/
│       │   └── api.ts               # Backend API connector (typed stubs)
│       └── lib/
│           └── utils.ts             # Shared utilities
│
├── backend/                         # FastAPI · Python 3.10+ · Uvicorn
│   ├── main.py                      # App factory, CORS, router registration
│   ├── config.py                    # Pydantic settings & env loading
│   ├── requirements.txt
│   ├── .env.example
│   ├── api/
│   │   ├── chat.py                  # POST /api/chat/
│   │   ├── upload.py                # POST /api/upload/
│   │   ├── review.py                # POST /api/review/
│   │   ├── classify.py              # POST /api/classify/
│   │   ├── gaps.py                  # POST /api/gaps/
│   │   └── dashboard.py             # GET  /api/dashboard/
│   └── utils/
│       ├── logger.py                # Structured console logger
│       └── helpers.py               # Response envelope, file utilities
│
├── database/                        # Reserved — ChromaDB & Neo4j configs (Phase 1+)
├── .env.example                     # Root environment template
└── README.md                        # You are here
```

---

## 🔌 API Reference

All backend routes are available at `http://localhost:8000`

| Method | Endpoint | Description | Phase |
|--------|----------|-------------|-------|
| `GET`  | `/health` | System health check | ✅ Live |
| `POST` | `/api/chat/` | RAG research query | Phase 1 |
| `POST` | `/api/upload/` | Paper ingestion | Phase 1 |
| `POST` | `/api/review/` | Literature review | Phase 2 |
| `POST` | `/api/classify/` | BERT classification | Phase 2 |
| `POST` | `/api/gaps/` | Gap discovery | Phase 4 |
| `GET`  | `/api/dashboard/` | Platform metrics | Phase 1 |

> All Phase 0 endpoints return `{ "message": "not implemented" }`  
> Interactive docs: **http://localhost:8000/docs**

---

## 🗺️ Roadmap

```
Phase 0  ████████████████  ✅ COMPLETE — Full-stack skeleton
Phase 1  ░░░░░░░░░░░░░░░░  ⏳ RAG pipeline + ChromaDB + paper ingestion
Phase 2  ░░░░░░░░░░░░░░░░  ⏳ BERT classifier + literature review synthesis
Phase 3  ░░░░░░░░░░░░░░░░  ⏳ Neo4j knowledge graph construction
Phase 4  ░░░░░░░░░░░░░░░░  ⏳ LangGraph multi-agent gap & novelty engine
```

---

## 🧠 Architecture Principles

```
┌─────────────────────────────────────────────────────┐
│                    HELIX AI SYSTEM                   │
├───────────────┬──────────────────┬───────────────────┤
│   Frontend    │     Backend      │     Database      │
│  (UI Shell)   │   (API Shell)    │   (Reserved)      │
│               │                  │                   │
│  Next.js 16   │    FastAPI       │   ChromaDB        │
│  App Router   │    Uvicorn       │   (RAG vectors)   │
│  TypeScript   │    Pydantic      │                   │
│  Tailwind     │    CORS          │   Neo4j           │
│               │                  │   (Graph engine)  │
└───────────────┴──────────────────┴───────────────────┘
        │                │
        └────────────────┘
         Separation of Concerns
         UI ≠ Logic ≠ Data
```

**Design Rule:** Frontend = UI only · Backend = API only · No business logic leaks across layers.

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend Framework | Next.js | 16.x |
| UI Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Backend Framework | FastAPI | 0.115 |
| ASGI Server | Uvicorn | 0.30 |
| Schema Validation | Pydantic v2 | 2.9 |
| Future: Vector Store | ChromaDB | — |
| Future: Graph DB | Neo4j | — |
| Future: LLM Orchestration | LangGraph | — |
| Future: Classification | HuggingFace BERT | — |

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/phase-1-rag`
3. **Commit** changes: `git commit -m "feat: add RAG pipeline"`
4. **Push**: `git push origin feature/phase-1-rag`
5. **Open** a Pull Request

Please follow the phase-based separation — no AI logic until Phase 1 is started.

---

<div align="center">

Built with ❤️ for the research community · **HELIX AI** · Phase 0

</div>
