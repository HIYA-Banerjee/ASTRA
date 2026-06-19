"""
HELIX AI — Upload API Router
==============================
Placeholder endpoint for research paper upload and ingestion.

Future: Will handle PDF/paper uploads, text extraction,
chunking, and embedding storage in ChromaDB.
"""

from fastapi import APIRouter

router = APIRouter()


@router.post("/")
async def upload_paper():
    """
    Upload a research paper for processing.

    Future implementation:
    - PDF text extraction
    - Document chunking
    - Embedding generation
    - ChromaDB vector storage
    """
    return {"message": "not implemented"}
