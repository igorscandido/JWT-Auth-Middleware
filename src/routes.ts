import { Router } from "express"

/**
 * Controller imports
 */
import authController from './controllers/AuthController'

const routes = Router()

routes.use('/auth',authController)

export default routes