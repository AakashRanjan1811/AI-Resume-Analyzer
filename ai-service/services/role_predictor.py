import joblib
from pathlib import Path

model_dir = Path(__file__).resolve().parents[1] / "models"
model = joblib.load(model_dir / "role_model.pkl")
vectorizer = joblib.load(model_dir / "vectorizer.pkl")
label_encoder = joblib.load(model_dir / "label_encoder.pkl")

def predict_role(text):

    text_vector = vectorizer.transform([text])

    prediction = model.predict(text_vector)

    return str(label_encoder.inverse_transform(prediction)[0])
