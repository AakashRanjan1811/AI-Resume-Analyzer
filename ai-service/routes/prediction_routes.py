from fastapi import APIRouter

from pydantic import BaseModel

from services.role_predictor import (
    predict_role
)

from services.ats_predictor import (
    predict_ats_score
)

from services.skill_extractor import (
    extract_skills
)

from services.job_matcher import (
    match_jobs
)

from services.recommendation_engine import (
    recommend_jobs
)

router = APIRouter(
    prefix="/predict",
    tags=["Resume Prediction"]
)

class ResumeRequest(BaseModel):

    resume_text: str
    job_description: str = ""

@router.post("/resume")

def analyze_resume(data: ResumeRequest):

    # INPUT TEXT
    resume_text = data.resume_text

    # ROLE PREDICTION
    role = predict_role(resume_text)

    # ATS SCORE
    ats_score = predict_ats_score(
        resume_text
    )

    # SKILLS
    skills = extract_skills(
        resume_text
    )

    # JOB MATCHING
    matched_jobs = match_jobs(
        resume_text
    )

    # JOB RECOMMENDATIONS
    recommendations = recommend_jobs(
        resume_text
    )

    # Adapt the existing extractor output for the upload/dashboard contract.
    required_skills = extract_skills(data.job_description) if data.job_description else []
    current_skills = {skill.lower() for skill in skills}
    matched_skills = [skill for skill in required_skills if skill.lower() in current_skills]
    missing_skills = [skill for skill in required_skills if skill.lower() not in current_skills]

    return {

        "predicted_role": role,

        "ats_score": ats_score,

        "skills": skills,

        "matched_jobs": matched_jobs,

        "recommendations": recommendations,

        "matched_skills": matched_skills if data.job_description else skills,

        "missing_skills": missing_skills
    }
