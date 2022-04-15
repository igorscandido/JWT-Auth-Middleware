import { Router, Request, Response } from 'express'
import loggedMiddleware from '../providers/AuthMiddleware'

const router = Router()

router.get('/list', loggedMiddleware, (req: Request, res: Response) => {

    //console.log(req.body.credentials)
    /**
     * Working, just add code here to use credentials
     */
})

export default router