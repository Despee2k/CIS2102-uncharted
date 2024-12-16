import {Router} from 'express'
import { login, me, signup, updateProfile } from '../controllers/auth'
import { errorHandler } from '../error-handler'
import {authMiddleware }from '../middlewares/auth'
import { completeSurvey } from '../controllers/auth'

const authRoutes: Router = Router()

authRoutes.post('/signup', errorHandler(signup))
authRoutes.post('/login', errorHandler(login))
authRoutes.get('/me', [authMiddleware], errorHandler(me))
authRoutes.put('/update-profile', [authMiddleware], errorHandler(updateProfile))
authRoutes.post('/complete-survey', [authMiddleware], errorHandler(completeSurvey))

export default authRoutes;
