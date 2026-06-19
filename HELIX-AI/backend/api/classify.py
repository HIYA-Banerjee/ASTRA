"""
HELIX AI — Classify API Router
================================
Placeholder endpoint for research paper classification.

Future: Will use a fine-tuned BERT model to classify papers
by domain, methodology, novelty level, and research area.
"""

from fastapi import APIRouter

router = APIRouter()


@router.post("/")
async def classify_paper():
    """
    Classify a research paper into categories.

    Future implementation:
    - BERT-based multi-label classification
    - Domain/field detection
    - Methodology classification
    - Novelty scoring
    """
    return {"message": "not implemented"}
