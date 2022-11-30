import AuthAccountMiddleware from './auth-account-middleware';
import AuthUserMiddleware from './auth-user-middleware';
import UserAdminMiddleware from './user-admin-middleware';
import UserServerOwnerMiddleware from './user-server-owner-middleware';

const authUserMiddleware = new AuthUserMiddleware();
const userAdminMiddleware = new UserAdminMiddleware();
const authAccountMiddleware = new AuthAccountMiddleware();
const userServerOwnerMiddleware = new UserServerOwnerMiddleware();

export {
  authUserMiddleware,
  userAdminMiddleware,
  authAccountMiddleware,
  userServerOwnerMiddleware,
};
