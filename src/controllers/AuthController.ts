import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { env } from 'process'

interface Credencials {
    username: string,
    password: string
}

const router = Router()

const defaultCredencials: Credencials = {
    username: "admin",
    password: "admin"
}

router.post('/login', (req: Request, res: Response) => {

    const usrCredencials: Credencials = {
        username: req.body.username,
        password: req.body.password
    }

    if(defaultCredencials.username != usrCredencials.username ||
        defaultCredencials.password != usrCredencials.password)
        return res.status(401).send({
            message: "Unauthorized"
        })

    const token = jwt.sign({
        credencials: usrCredencials
    },env.SECRET_KEY!)

    res.status(200).send({
        auth: true,
        acessToken: token
    })

})

export default router