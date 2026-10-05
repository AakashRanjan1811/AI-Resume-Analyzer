# Resume Analysis Platform

A full-stack web application for analyzing resumes against job descriptions. Users can upload a PDF resume and receive resume scoring, skill-gap analysis, role prediction, and job recommendations.

## Features

- PDF resume upload and text extraction
- Resume and job-description skill comparison
- Matched and missing skill identification
- Resume scoring and role prediction
- Semantic job matching and recommendations
- User registration and JWT-based authentication
- MongoDB-backed user management
- REST API communication between backend services

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS  
**Backend:** Node.js, Express.js, FastAPI  
**Database:** MongoDB, Mongoose  
**Authentication:** JWT, bcrypt  
**Analysis:** Python, scikit-learn, TF-IDF, RapidFuzz, Sentence Transformers, MiniLM  
**Tools:** Git, Ollama, Phi-3

## Architecture

```text
React Frontend
      |
      v
Node.js / Express
     /       \
    v         v
MongoDB    FastAPI
              |
              v
       Resume Analysis
```

## How It Works

1. User uploads a PDF resume and provides a job description.
2. Express receives the request and extracts text from the resume.
3. Resume data is sent to the FastAPI analysis service.
4. The service performs skill extraction, scoring, role prediction, and job matching.
5. Results are returned to the React dashboard.

## Project Structure

```text
AI-Resume-Analyzer/
├── ai-service/     # Python/FastAPI analysis service
├── backend/        # Node.js/Express backend
├── public/
├── src/            # React frontend
├── package.json
└── README.md
```

## Current Limitations

- Supports PDF resumes only.
- Resume scoring is a prototype and not a validated real-world ATS score.
- The frontend chatbot is not currently connected end-to-end with the Phi-3 endpoint.
- The application is currently configured for local execution.
