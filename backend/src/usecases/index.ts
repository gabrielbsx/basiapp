import AuthUserController from './auth-user/auth-user-controller';
import CreateServerController from './create-server/create-server-controller';
import CreateUserController from './create-user/create-user-controller';
import UpdateUserController from './update-user/update-user-controller';

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const authUserController = new AuthUserController();
const createServerController = new CreateServerController();

export {
  createUserController,
  updateUserController,
  authUserController,
  createServerController,
};
