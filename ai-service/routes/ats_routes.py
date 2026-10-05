from fastapi import APIRouter

from pydantic import BaseModel

from services.ats_predictor import predict_ats_score

router = APIRouter(prefix="/ats")

class ATSRequest(BaseModel):

    resume_text: str

@router.post("/score")
def ats_score(data: ATSRequest):

    score = predict_ats_score(data.resume_text)

    return {
        "ats_score": score
    }