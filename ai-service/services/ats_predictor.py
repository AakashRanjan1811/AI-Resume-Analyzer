import joblib
from pathlib import Path

model_dir = Path(__file__).resolve().parents[1] / "models"
model = joblib.load(model_dir / "ats_model.pkl")
vectorizer = joblib.load(model_dir / "ats_vectorizer.pkl")

def predict_ats_score(text):

    text_vector = vectorizer.transform([text])

    score = model.predict(text_vector)

    return round(float(score[0]), 2)
