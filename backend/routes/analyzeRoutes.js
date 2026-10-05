import express from 'express'

import upload from '../utils/upload.js'
import pdfUpload from '../middleware/uploadMiddleware.js'

import protect from '../middleware/authMiddleware.js'

import {

    analyzeResume,
    analyzeUpload,

} from '../controllers/analyzeController.js'

const router = express.Router()

router.post('/upload', pdfUpload.single('resume'), analyzeUpload)

router.post(

    '/resume',

    protect,

    upload.single('resume'),

    analyzeResume
)

export default router
