import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import { env } from 'process'

const isLogged = (req: Request, res: Response, next: NextFunction) => {

    const acessToken = req.headers['authorization']
    const jwtToken = acessToken && acessToken.split(' ')[1]

    if(jwtToken === undefined) {
        res.status(401).send({
            message: "Not Authorized"
        })
    }

    jwt.verify(jwtToken!,env.SECRET_KEY!,(err, data) => {
        if (err) return res.status(422).send({message: "Non processable"})

        req.body.credentials = data
    })

    next()
}

export default isLogged