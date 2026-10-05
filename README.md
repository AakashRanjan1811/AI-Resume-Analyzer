# Resume Analysis Platform

A full-stack resume analysis platform built with **React, Node.js, Express.js, MongoDB, and FastAPI**. The application allows users to upload PDF resumes, provide a job description, and receive resume analysis including skill comparison, resume scoring, role prediction, and job matching.

The project uses a multi-service architecture in which the React frontend communicates with a Node.js/Express backend responsible for authentication, file processing, API handling, and communication with a separate Python FastAPI analysis service.

---

## Features

- User registration and login
- JWT-based authentication
- Password hashing using bcrypt
- PDF resume upload and text extraction
- Resume and job-description analysis
- Matched and missing skill identification
- Resume scoring
- Role prediction
- Semantic job matching
- Job and skill recommendations
- MongoDB-backed user management
- REST API communication between Node.js and Python services
- Local Phi-3 API integration using Ollama

---

## Architecture

```text
                       User
                         |
                         v
                  React + Vite
                     Frontend
                         |
                    REST API
                         |
                         v
                Node.js + Express
                     Backend
                   /         \
                  /           \
                 v             v
             MongoDB        FastAPI
                            Python
                               |
                  +------------+------------+
                  |            |            |
                  v            v            v
               TF-IDF       MiniLM      ML Models
                  |            |            |
                  +------------+------------+
                               |
                               v
                        Analysis Results
                               |
                               v
                       Express Backend
                               |
                               v
                       React Dashboard


                 FastAPI
                    |
                    v
                  Ollama
                    |
                    v
                   Phi-3
```

---

## Application Flow

1. The user uploads a **PDF resume** and provides a **job description**.
2. The React frontend sends the resume and job description to the Express backend using a multipart HTTP request.
3. Express handles the uploaded file and extracts text from the PDF.
4. The extracted resume text and job description are sent to the Python FastAPI service.
5. FastAPI performs resume analysis including skill extraction, scoring, role prediction, and job matching.
6. The analysis results are returned to the Express backend.
7. Express transforms the response into the format required by the frontend.
8. The React dashboard displays the resume score, matched skills, missing skills, and suggestions.

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs
- JSON Web Tokens (JWT)
- bcrypt
- Multer
- pdf-parse

### Analysis Service

- Python
- FastAPI
- scikit-learn
- TF-IDF
- Logistic Regression
- Random Forest
- RapidFuzz
- Sentence Transformers
- MiniLM
- Cosine Similarity

### LLM Integration

- Ollama
- Phi-3

---

## Project Structure

```text
AI-Resume-Analyzer/
│
├── ai-service/
│   ├── datasets/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── training/
│   ├── utils/
│   └── app.py
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   └── server.js
│
├── public/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   └── services/
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Backend Architecture

The **Node.js and Express.js backend** acts as the main application server and sits between the React frontend and the Python analysis service.

It is responsible for:

- REST API routing
- User registration and login
- JWT generation and verification
- Password hashing
- MongoDB communication
- Multipart file uploads
- PDF text extraction
- Middleware and error handling
- Communication with FastAPI
- Transforming analysis responses for the frontend

The backend also uses middleware for security headers, CORS, rate limiting, request logging, file handling, and centralized error handling.

---

## FastAPI Analysis Service

The resume-analysis functionality is separated from the main Node.js application into an independent **Python FastAPI service**.

The service exposes functionality for:

- Resume prediction
- Resume scoring
- Skill extraction
- Resume and job-description skill comparison
- Role prediction
- Job matching
- Career recommendations
- Phi-3 interaction

The Express backend communicates with this service using **server-to-server HTTP requests**.

```text
React Frontend
      |
      v
Express REST API
      |
      | HTTP
      v
FastAPI Service
      |
      v
Analysis Components
```

---

## Resume Analysis

The analysis service combines multiple NLP and machine-learning techniques.

### Role Prediction

Resume text is transformed into numerical features using **TF-IDF** and processed by a saved **Logistic Regression** classifier.

The classifier predicts one of the job-role categories supported by the model.

### Skill Extraction

Skills are identified using a skills dictionary together with fuzzy string matching using **RapidFuzz**.

When a job description is provided, skills extracted from the resume and job description are compared to identify:

- Matched skills
- Missing skills

### Semantic Job Matching

Resume and job text are encoded using the pretrained:

```text
all-MiniLM-L6-v2
```

Sentence Transformer model.

The resulting embeddings are compared using **cosine similarity** to rank jobs according to semantic similarity with the resume.

### TF-IDF Job Matching

The project also contains a separate recommendation approach using **TF-IDF vectors and cosine similarity** to rank jobs based on textual similarity.

### Resume Scoring

A Random Forest regression model processes TF-IDF resume features and produces a prototype resume score.

The score is intended as a demonstration feature and should not be interpreted as a validated prediction of how a real-world Applicant Tracking System will rank a resume.

---

## Authentication

The application implements authentication using:

- **MongoDB** for user storage
- **bcrypt** for password hashing
- **JSON Web Tokens (JWT)** for authentication

After successful registration or login, the backend generates a JWT that can be used for authenticated API requests.

---

## PDF Processing

Resume files are uploaded to the Express backend using **Multer**.

The backend then extracts text from uploaded PDFs using `pdf-parse`.

The extracted text is forwarded to the FastAPI service for further analysis.

```text
PDF Resume
    |
    v
Multer Upload
    |
    v
Express Backend
    |
    v
PDF Text Extraction
    |
    v
FastAPI
```

---

## Phi-3 and Ollama

The FastAPI service includes an endpoint capable of communicating with a locally running **Phi-3** model through **Ollama**.

This provides API-side LLM integration within the Python service.

The current floating chatbot interface in the frontend is a demonstration interface and is not connected end-to-end with the Phi-3 endpoint.

---

## Environment Configuration

Create the required environment configuration before running the application.

### Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

### Backend

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ai_resume_analyzer
JWT_SECRET=replace-with-a-random-secret-before-starting
AI_SERVICE_URL=http://127.0.0.1:8000
```

Do not commit real environment variables, credentials, or secrets to the repository.

---

## Current Limitations

- Resume uploads currently support PDF files.
- DOC/DOCX resume processing is not implemented.
- OCR for scanned PDF resumes is not implemented.
- The resume scoring model is a prototype and is not a validated ATS predictor.
- The current scoring model does not use the supplied job description directly as an input.
- Role prediction is limited to the categories supported by the trained classifier.
- The browser chatbot interface is not currently connected to the Phi-3 API endpoint.
- Semantic job matching uses the included job dataset rather than a live job source.
- Complete results from the primary analysis flow are not persisted to MongoDB.

---

## Future Improvements

Possible improvements include:

- Dockerizing the individual services
- Adding automated unit and integration testing
- Adding CI/CD workflows
- Supporting DOCX resumes
- Adding OCR support for scanned resumes
- Improving persistent analysis history
- Connecting the frontend chatbot to the Phi-3 API
- Deploying the frontend and backend services to cloud infrastructure
- Improving validation and monitoring across services

---

## Project Purpose

This project demonstrates the integration of a modern frontend, REST APIs, authentication, database operations, file processing, and a separate Python analysis service within a full-stack application.

The primary engineering focus is the communication between:

```text
React
   ↓
Node.js / Express
   ↓
FastAPI
   ↓
Analysis Services

Express
   ↕
MongoDB
```

This architecture separates general application/backend responsibilities from Python-based resume analysis functionality.
