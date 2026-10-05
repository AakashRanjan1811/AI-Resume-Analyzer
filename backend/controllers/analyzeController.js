import fs from 'fs'

import pdf from 'pdf-parse/lib/pdf-parse.js'

import Resume from '../models/Resume.js'

import calculateATS from '../services/atsService.js'

const analyzeResume = async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' })
        }

        const dataBuffer =
            fs.readFileSync(req.file.path)

        const pdfData =
            await pdf(new Uint8Array(dataBuffer))

        const atsScore =
            calculateATS(pdfData.text)

        const feedback =
            atsScore > 70
                ? 'Strong Resume'
                : 'Needs Improvement'

        const resume =
            await Resume.create({

                user: req.user.id,

                fileName:
                    req.file.filename,

                atsScore,

                feedback,
            })

        res.status(200).json({

            atsScore,

            feedback,

            resume,
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({

            message: error.message,
        })
    }
}

// Connect the existing Analyzer upload form to the existing Python pipeline.
const analyzeUpload = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' })
        }
        if (!req.body.jobDescription?.trim()) {
            return res.status(400).json({ message: 'Please enter job description' })
        }

        const pdfData = await pdf(new Uint8Array(fs.readFileSync(req.file.path)))
        // eslint-disable-next-line no-undef
        const aiUrl = process.env.AI_SERVICE_URL || 'http://127.0.0.1:8000'
        const response = await fetch(`${aiUrl}/predict/resume`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                resume_text: pdfData.text,
                job_description: req.body.jobDescription,
            }),
        })
        if (!response.ok) {
            return res.status(502).json({ message: `AI service returned ${response.status}` })
        }
        const analysis = await response.json()
        return res.json({
            data: {
                score: analysis.ats_score,
                matchedSkills: analysis.matched_skills,
                missingSkills: analysis.missing_skills,
                suggestions: analysis.missing_skills.map(skill => `Review the job requirement: ${skill}`),
                resumeName: req.file.originalname,
            },
        })
    } catch (error) {
        next(error)
    }
}

export {

    analyzeResume,
    analyzeUpload,
}
