from utils.pdf_reader import extract_text_from_pdf
from services.skill_extractor import extract_skills

def parse_resume(pdf_path):

    text = extract_text_from_pdf(pdf_path)

    skills = extract_skills(text)

    return {
        "text": text,
        "skills": skills
    }