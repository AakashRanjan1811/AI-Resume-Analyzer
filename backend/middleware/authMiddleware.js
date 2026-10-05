/* eslint-disable no-undef */

import jwt from 'jsonwebtoken'

const protect = async (

    req,
    res,
    next

) => {

    let token

    if (

        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')

    ) {

        try {

            token =
                req.headers.authorization
                    .split(' ')[1]

            const decoded = jwt.verify(

                token,

                process.env.JWT_SECRET
            )

            req.user = decoded

            next()

        } catch (error) {

            console.log(error)

            res.status(401).json({

                message: 'Not Authorized',
            })
        }

    } else {

        res.status(401).json({

            message: 'No Token',
        })
    }
}

export default protect