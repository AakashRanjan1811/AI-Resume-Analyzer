import mongoose from 'mongoose'

const resumeSchema = new mongoose.Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,

        ref: 'User',
    },

    fileName: String,

    atsScore: Number,

    feedback: String,

    uploadedAt: {

        type: Date,

        default: Date.now,
    }
})

const Resume = mongoose.model('Resume', resumeSchema)

export default Resume