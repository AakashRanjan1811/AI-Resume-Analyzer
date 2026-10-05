/* eslint-disable no-undef */

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import fs from 'node:fs'

import authRoutes from './routes/authRoutes.js'
import analyzeRoutes from './routes/analyzeRoutes.js'
import resumeRoutes from './routes/resumeRoutes.js'

import {

    notFound,
    errorHandler,

} from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()

/* =========================
   SECURITY
========================= */

app.use(helmet())

/* =========================
   RATE LIMIT
========================= */

const limiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 100,
})

app.use(limiter)

/* =========================
   MIDDLEWARE
========================= */

app.use(cors())

app.use(express.json())

app.use(morgan('dev'))

/* =========================
   STATIC FOLDER
========================= */

fs.mkdirSync('uploads', { recursive: true })

app.use('/uploads', express.static('uploads'))

/* =========================
   ROUTES
========================= */

app.use('/api/auth', authRoutes)

app.use('/api/analyze', analyzeRoutes)

app.use('/api/resume', resumeRoutes)

/* =========================
   HOME ROUTE
========================= */

app.get('/', (req, res) => {

    res.json({

        message: 'AI Resume Analyzer Backend Running',
    })
})

/* =========================
   ERROR MIDDLEWARE
========================= */

app.use(notFound)

app.use(errorHandler)

/* =========================
   DATABASE
========================= */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log('MongoDB Connected')

    app.listen(process.env.PORT || 5000, () => {

        console.log(

            `Server Running On Port ${process.env.PORT || 5000}`
        )
    })
})

.catch((error) => {

    console.log(error)
})
