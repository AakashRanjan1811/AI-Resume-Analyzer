import pandas as pd
import numpy as np
import joblib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.metrics import r2_score

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

# ================= CREATE ATS LABELS =================
# Your dataset has NO ATS Score column
# so we create synthetic ATS labels

df["ATS_Score"] = np.random.randint(
    55,
    98,
    size=len(df)
)

# ================= FEATURES =================

X_text = df["resume_text"]

# ================= TARGET =================

y = df["ATS_Score"]

# ================= TFIDF =================

vectorizer = TfidfVectorizer(
    max_features=3000
)

X = vectorizer.fit_transform(
    X_text
)

# ================= TRAIN TEST SPLIT =================

X_train, X_test, y_train, y_test = train_test_split(

    X,
    y,

    test_size=0.2,

    random_state=42
)

# ================= MODEL =================

model = RandomForestRegressor(

    n_estimators=50,

    max_depth=20,

    random_state=42,

    n_jobs=-1
)

# ================= TRAIN =================

model.fit(
    X_train,
    y_train
)

# ================= PREDICT =================

predictions = model.predict(
    X_test
)

# ================= METRICS =================

mae = mean_absolute_error(
    y_test,
    predictions
)

r2 = r2_score(
    y_test,
    predictions
)

print("MAE:", mae)

print("R2 Score:", r2)

# ================= SAVE MODEL =================

joblib.dump(
    model,
    "models/ats_model.pkl"
)

joblib.dump(
    vectorizer,
    "models/ats_vectorizer.pkl"
)

print(
    "ATS model trained successfully"
)