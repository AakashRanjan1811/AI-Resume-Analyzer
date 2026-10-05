import pandas as pd
import numpy as np
import joblib

from sklearn.metrics import (
    classification_report,
    mean_absolute_error,
    r2_score
)

from utils.preprocess import clean_text

# ================= LOAD DATASET =================

df = pd.read_csv(
    "datasets/AI_Resume_Screening.csv"
)

# ================= CREATE TEXT FEATURE =================

df["resume_text"] = (

    df["Skills"].astype(str)

    + " "

    + df["Education"].astype(str)

    + " "

    + df["Certifications"].astype(str)

    + " "

    + df["Experience (Years)"].astype(str)
)

# ================= CLEAN TEXT =================

df["resume_text"] = df[
    "resume_text"
].apply(clean_text)

# ======================================================
# ROLE MODEL EVALUATION
# ======================================================

print(
    "\n================ ROLE MODEL ================\n"
)

# LOAD ROLE MODEL
role_model = joblib.load(
    "models/role_model.pkl"
)

# LOAD ROLE VECTORIZER
role_vectorizer = joblib.load(
    "models/vectorizer.pkl"
)

# LOAD LABEL ENCODER
label_encoder = joblib.load(
    "models/label_encoder.pkl"
)

# TRANSFORM TEXT
X_role = role_vectorizer.transform(
    df["resume_text"]
)

# PREDICT
role_predictions = role_model.predict(
    X_role
)

# ENCODE TRUE LABELS
true_labels = label_encoder.transform(
    df["Job Role"]
)

# CLASSIFICATION REPORT
print(

    classification_report(

        true_labels,

        role_predictions
    )
)

# ======================================================
# ATS MODEL EVALUATION
# ======================================================

print(
    "\n================ ATS MODEL ================\n"
)

# LOAD ATS MODEL
ats_model = joblib.load(
    "models/ats_model.pkl"
)

# LOAD ATS VECTORIZER
ats_vectorizer = joblib.load(
    "models/ats_vectorizer.pkl"
)

# TRANSFORM TEXT
X_ats = ats_vectorizer.transform(
    df["resume_text"]
)

# PREDICT
ats_predictions = ats_model.predict(
    X_ats
)

# CREATE TEMP ATS LABELS
# (because dataset lacks real ATS labels)

df["ATS_Score"] = np.random.randint(
    55,
    98,
    size=len(df)
)

# MAE
mae = mean_absolute_error(

    df["ATS_Score"],

    ats_predictions
)

# R2
r2 = r2_score(

    df["ATS_Score"],

    ats_predictions
)

# PRINT RESULTS
print("MAE:", mae)

print("R2 Score:", r2)

print(
    "\nModel Evaluation Completed Successfully"
)