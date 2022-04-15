import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { env } from 'process'

interface Credentials {
    username: string,
    password: string
}

const router = Router()

const defaultCredentials: Credentials = {
    username: "admin",
    password: "admin"
}

router.post('/login', (req: Request, res: Response) => {

    const usrCredentials: Credentials = {
        username: req.body.username,
        password: req.body.password
    }

    if(defaultCredentials.username != usrCredentials.username ||
        defaultCredentials.password != usrCredentials.password)
        return res.status(401).send({
            message: "Unauthorized"
        })

    const token = jwt.sign({
        Credentials: usrCredentials
    },env.SECRET_KEY!)

    res.status(200).send({
        auth: true,
        acessToken: token
    })

})

export default router