import AuthAccountController from './auth-account/auth-account-controller';
import AuthUserController from './auth-user/auth-user-controller';
import CreateAccountController from './create-account/create-account-controller';
import CreateServerController from './create-server/create-server-controller';
import CreateUserController from './create-user/create-user-controller';
import UpdateAccountController from './update-account/update-account-controller';
import UpdateServerController from './update-server/update-server-controller';
import UpdateUserController from './update-user/update-user-controller';

const authUserController = new AuthUserController();
const authAccountController = new AuthAccountController();

const createUserController = new CreateUserController();
const createAccountController = new CreateAccountController();
const createServerController = new CreateServerController();

const updateUserController = new UpdateUserController();
const updateAccountController = new UpdateAccountController();
const updateServerController = new UpdateServerController();

export {
  authUserController,
  authAccountController,
  createUserController,
  createAccountController,
  createServerController,
  updateUserController,
  updateAccountController,
  updateServerController,
};
