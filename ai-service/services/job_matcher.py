from sklearn.metrics.pairwise import cosine_similarity

from sentence_transformers import (
    SentenceTransformer
)

import pandas as pd
from pathlib import Path

# LOAD MODEL
model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

# LOAD DATASET
jobs_df = pd.read_csv(
    Path(__file__).resolve().parents[1] / "datasets/job_dataset.csv"
)

# REMOVE NULL VALUES
jobs_df = jobs_df.fillna("")

# CONVERT EACH ROW INTO TEXT
jobs_texts = jobs_df.apply(

    lambda row: " ".join(
        row.astype(str)
    ),

    axis=1

).tolist()

# CREATE EMBEDDINGS
job_embeddings = model.encode(
    jobs_texts
)

# MATCHING FUNCTION
def match_jobs(resume_text):

    # ENCODE RESUME
    resume_embedding = model.encode(
        [resume_text]
    )

    # CALCULATE SIMILARITY
    similarities = cosine_similarity(

        resume_embedding,

        job_embeddings

    )[0]

    # TOP MATCHES
    top_indices = similarities.argsort()[-5:][::-1]

    matched_jobs = []

    for idx in top_indices:

        matched_jobs.append({

            "job":
            jobs_texts[idx],

            "score":
            float(similarities[idx])
        })

    return matched_jobs
