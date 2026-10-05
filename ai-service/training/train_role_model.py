import pandas as pd
import joblib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score

from utils.preprocess import clean_text

# LOAD DATASET
df = pd.read_csv("datasets/AI_Resume_Screening.csv")

# CREATE TEXT COLUMN
df["resume_text"] = (
    df["Skills"].astype(str)
    + " "
    + df["Education"].astype(str)
    + " "
    + df["Certifications"].astype(str)
)

# TARGET COLUMN
df["category"] = df["Job Role"]

# CLEAN TEXT
df["resume_text"] = df["resume_text"].apply(clean_text)

# FEATURES
X_text = df["resume_text"]

# LABELS
y_labels = df["category"]

# TFIDF
vectorizer = TfidfVectorizer(max_features=5000)

X = vectorizer.fit_transform(X_text)

# LABEL ENCODER
encoder = LabelEncoder()

y = encoder.fit_transform(y_labels)

# SPLIT
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# MODEL
model = LogisticRegression(max_iter=200)

model.fit(X_train, y_train)

# PREDICTIONS
predictions = model.predict(X_test)

# ACCURACY
accuracy = accuracy_score(y_test, predictions)

print("Accuracy:", accuracy)

# SAVE MODELS
joblib.dump(model, "models/role_model.pkl")

joblib.dump(vectorizer, "models/vectorizer.pkl")

joblib.dump(encoder, "models/label_encoder.pkl")

print("Role model trained successfully")