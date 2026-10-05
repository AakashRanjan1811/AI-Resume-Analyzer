import pandas as pd
from pathlib import Path
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer

jobs_df = pd.read_csv(Path(__file__).resolve().parents[1] / "datasets/job_dataset.csv").fillna("")

jobs_df["combined"] = jobs_df.astype(str).agg(" ".join, axis=1)

vectorizer = TfidfVectorizer()

job_vectors = vectorizer.fit_transform(jobs_df["combined"])

def recommend_jobs(resume_text):

    resume_vector = vectorizer.transform([resume_text])

    similarity = cosine_similarity(resume_vector, job_vectors)

    top_indexes = similarity[0].argsort()[-5:][::-1]

    recommendations = []

    for idx in top_indexes:

        recommendations.append(
            jobs_df.iloc[idx].to_dict()
        )

    return recommendations


def recommend_skills(extracted_skills):
    # The career route already calls this function; use the existing job results.
    current = {skill.lower() for skill in extracted_skills}
    jobs = recommend_jobs(" ".join(extracted_skills))
    required = {
        skill.strip()
        for job in jobs
        for skill in job["Skills"].split(";")
        if skill.strip()
    }
    return sorted(skill for skill in required if skill.lower() not in current)
