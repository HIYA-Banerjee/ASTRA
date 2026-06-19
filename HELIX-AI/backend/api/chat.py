"""
HELIX AI — Chat API Router
============================
Placeholder endpoint for the conversational research assistant.

Future: Will integrate with LangGraph multi-agent reasoning system
and RAG pipeline for research paper Q&A.
"""

from fastapi import APIRouter

router = APIRouter()


@router.post("/")
async def chat_query():
    """
    Send a research query to the AI assistant.

    Future implementation:
    - RAG-based document retrieval
    - LangGraph multi-agent reasoning
    - Context-aware conversational memory
    """
    return {"message": "not implemented"}
