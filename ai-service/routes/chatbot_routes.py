import ollama
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/chatbot", tags=["Chatbot"])


class ChatRequest(BaseModel):
    prompt: str


@router.post("/ask")
def chat(data: ChatRequest):
    return {"response": ask_phi3(data.prompt)}

# ================= GENERAL CHAT =================

def ask_phi3(prompt):

    response = ollama.chat(

        model="phi3",

        messages=[

            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]

# ================= RESUME FEEDBACK =================

def generate_ai_feedback(resume_text):

    prompt = f"""

    You are an expert ATS recruiter and career coach.

    Analyze this resume and provide:

    1. ATS score improvement tips
    2. Missing skills
    3. Resume weaknesses
    4. Interview preparation advice
    5. Career suggestions
    6. Better resume summary

    Resume:

    {resume_text}
    """

    response = ollama.chat(

        model="phi3",

        messages=[

            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]
