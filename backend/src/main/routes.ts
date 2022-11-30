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
} from '../presentation';
import {
  authAccountMiddleware,
  authUserMiddleware,
  userAdminMiddleware,
  userServerOwnerMiddleware,
} from './middlewares';

const routes = Router();

routes.post('/users', (req, res) => createUserController.handle(req, res));
routes.post('/users/auth', (req, res) => authUserController.handle(req, res));

routes.put('/users', authUserMiddleware.handle, (req, res) => updateUserController.handle(req, res));

routes.post('/accounts/auth/:serverId', (req, res) => authAccountController.handle(req, res));
routes.post('/accounts/:serverId', (req, res) => createAccountController.handle(req, res));
routes.put('/accounts/:serverId', authAccountMiddleware.handle, (req, res) => updateAccountController.handle(req, res));

routes.post('/servers', authUserMiddleware.handle, userAdminMiddleware.handle, (req, res) => createServerController.handle(req, res));
routes.put('/servers/:serverId', authUserMiddleware.handle, (req, res) => updateServerController.handle(req, res));

export default routes;
