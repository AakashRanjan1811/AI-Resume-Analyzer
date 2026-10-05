import pandas as pd
from rapidfuzz import fuzz
from pathlib import Path

skills_df = pd.read_csv(Path(__file__).resolve().parents[1] / "datasets/06_skills.csv")

ALL_SKILLS = skills_df.iloc[:, -1].dropna().tolist()

def extract_skills(text):

    found_skills = []

    text = text.lower()

    for skill in ALL_SKILLS:

        if fuzz.partial_ratio(skill.lower(), text) > 85:

            found_skills.append(skill)

    return list(set(found_skills))
