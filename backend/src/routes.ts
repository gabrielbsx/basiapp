import { Router } from 'express';
import {
  createUserController,
  updateUserController,
  authUserController,
} from './usecases';
import {
  authUserMiddleware,
} from './middlewares';

const routes = Router();

routes.post('/users', createUserController.handle);
routes.post('/users/auth', authUserController.handle);

routes.put('/users', authUserMiddleware.handle, updateUserController.handle);

export default routes;
