import { Router } from 'express';
import {
  createUserController,
  updateUserController,
  authUserController,
  createServerController,
  createAccountController,
  authAccountController,
  updateAccountController,
  updateServerController,
} from './usecases';
import {
  authAccountMiddleware,
  authUserMiddleware,
  userAdminMiddleware,
  userServerOwnerMiddleware,
} from './middlewares';

const routes = Router();

routes.post('/users', createUserController.handle);
routes.post('/users/auth', authUserController.handle);

routes.put('/users', authUserMiddleware.handle, updateUserController.handle);

routes.post('/accounts/auth/:serverId', authAccountController.handle);
routes.post('/accounts/:serverId', createAccountController.handle);
routes.put('/accounts/:serverId', authAccountMiddleware.handle, updateAccountController.handle);

routes.post('/servers', authUserMiddleware.handle, userAdminMiddleware.handle, createServerController.handle);
routes.put('/servers/:serverId', authUserMiddleware.handle, updateServerController.handle);

export default routes;
