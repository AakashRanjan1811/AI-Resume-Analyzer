from fastapi import APIRouter

from pydantic import BaseModel

from services.recommendation_engine import (
    recommend_jobs,
    recommend_skills
)

from services.skill_extractor import (
    extract_skills
)

router = APIRouter(
    prefix="/recommend",
    tags=["Recommendations"]
)

class ResumeRequest(BaseModel):

    resume_text: str

@router.post("/career")

def recommend(data: ResumeRequest):

    # RESUME TEXT
    resume_text = data.resume_text

    # EXTRACT SKILLS
    extracted_skills = extract_skills(
        resume_text
    )

    # RECOMMEND JOBS
    jobs = recommend_jobs(
        resume_text
    )

    # RECOMMEND SKILLS
    skills = recommend_skills(
        extracted_skills
    )

    return {

        "current_skills":
        extracted_skills,

        "recommended_jobs":
        jobs,

        "recommended_skills":
        skills
    }