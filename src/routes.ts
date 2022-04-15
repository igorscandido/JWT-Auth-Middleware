import { Router } from "express"

/**
 * Controller imports
 */
import authController from './controllers/AuthController'
import jobsController from './controllers/JobsController'

const routes = Router()

routes.use('/auth',authController)
routes.use('/jobs',jobsController)

export default routes