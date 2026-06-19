"""
HELIX AI — Dashboard API Router
=================================
Placeholder endpoint for platform analytics and metrics.

Future: Will provide aggregated statistics about the paper corpus,
user activity, system health, and knowledge graph metrics.
"""

from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def get_dashboard_data():
    """
    Retrieve dashboard analytics and metrics.

    Future implementation:
    - Total papers indexed
    - Knowledge graph statistics
    - Recent queries and activity
    - System performance metrics
    - Classification distribution
    """
    return {"message": "not implemented"}
