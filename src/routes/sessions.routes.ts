import { Router } from 'express';
import AuthenticateUserController from '../controllers/AuthenticateUserController';


const sessionsRouter = Router();

sessionsRouter.post('/', new AuthenticateUserController().handle);


export default sessionsRouter;