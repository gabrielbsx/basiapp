import AuthAccountMiddleware from './auth-account/auth-account-middleware';
import AuthUserMiddleware from './auth-user/auth-user-middleware';
import UserAdminMiddleware from './user-admin/user-admin-middleware';

const authUserMiddleware = new AuthUserMiddleware();
const userAdminMiddleware = new UserAdminMiddleware();
const authAccountMiddleware = new AuthAccountMiddleware();

export {
  authUserMiddleware,
  userAdminMiddleware,
  authAccountMiddleware,
};
