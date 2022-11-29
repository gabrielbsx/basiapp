import AuthAccountMiddleware from './auth-account/auth-account-middleware';
import AuthUserMiddleware from './auth-user/auth-user-middleware';
import UserAdminMiddleware from './user-admin/user-admin-middleware';
import UserServerOwnerMiddleware from './user-server-owner/user-server-owner-middleware';

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
