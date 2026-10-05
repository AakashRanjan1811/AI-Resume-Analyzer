import pandas as pd

people_df = pd.read_csv("datasets/01_people.csv")
abilities_df = pd.read_csv("datasets/02_abilities.csv")
education_df = pd.read_csv("datasets/03_education.csv")
experience_df = pd.read_csv("datasets/04_experience.csv")
person_skills_df = pd.read_csv("datasets/05_person_skills.csv")
skills_df = pd.read_csv("datasets/06_skills.csv")

resume_df = pd.read_csv("datasets/resume_dataset_1200.csv")
screening_df = pd.read_csv("datasets/AI_Resume_Screening.csv")
jobs_df = pd.read_csv("datasets/job_dataset.csv")

print("People:", people_df.shape)
print("Abilities:", abilities_df.shape)
print("Education:", education_df.shape)
print("Experience:", experience_df.shape)
print("Person Skills:", person_skills_df.shape)
print("Skills:", skills_df.shape)
print("Resume:", resume_df.shape)
print("Screening:", screening_df.shape)
print("Jobs:", jobs_df.shape)

master_df = screening_df.copy()

master_df.dropna(inplace=True)

master_df.to_csv("datasets/master_dataset.csv", index=False)

print("Master Dataset Saved")
print(master_df.head())