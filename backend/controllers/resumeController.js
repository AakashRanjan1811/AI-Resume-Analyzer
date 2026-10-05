import fs from 'fs'
import pdfParse from 'pdf-parse'

export const uploadResume = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                message: 'No file uploaded',
            })
        }


        const dataBuffer = fs.readFileSync(req.file.path)

        const pdfData = await pdfParse(new Uint8Array(dataBuffer))

        res.status(200).json({

            message: 'Resume uploaded and parsed successfully',

            extractedText: pdfData.text,
        })

    } catch (error) {

        res.status(500).json({

            message: error.message,
        })
    }
}
