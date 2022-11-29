import { Router } from 'express';
import {
  createUserController,
  updateUserController,
  authUserController,
  createServerController,
} from './usecases';
import {
  authUserMiddleware,
  userAdminMiddleware,
  userServerOwnerMiddleware,
} from './middlewares';

const routes = Router();

routes.post('/users', createUserController.handle);
routes.post('/users/auth', authUserController.handle);

routes.put('/users', authUserMiddleware.handle, updateUserController.handle);

routes.post('/servers', authUserMiddleware.handle, userAdminMiddleware.handle, createServerController.handle);
routes.post('/servers/:id', authUserMiddleware.handle, userServerOwnerMiddleware.handle, createServerController.handle);

export default routes;
