from fastapi import FastAPI

from routes.prediction_routes import (
    router as prediction_router
)

from routes.chatbot_routes import (
    router as chatbot_router
)

from routes.recommendation_routes import (
    router as recommendation_router
)

from routes.ats_routes import (
    router as ats_router
)

app = FastAPI(

    title="AI Resume Analyzer API",

    description="""
    AI + ML powered resume analysis platform
    with ATS scoring, role prediction,
    recommendation engine, and AI chatbot.
    """,

    version="1.0.0"
)

# ================= ROUTES =================

app.include_router(
    prediction_router
)

app.include_router(
    chatbot_router
)

app.include_router(
    recommendation_router
)

app.include_router(
    ats_router
)

# ================= HOME =================

@app.get("/")

def home():

    return {

        "message":
        "AI Resume Analyzer Running"
    }
@app.get("/health")

def health_check():

    return {

        "status": "healthy"
    }