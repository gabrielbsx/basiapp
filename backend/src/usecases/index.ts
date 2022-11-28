import AuthUserController from './auth-user/auth-user-controller';
import CreateUserController from './create-user/create-user-controller';
import UpdateUserController from './update-user/update-user-controller';

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const authUserController = new AuthUserController();

export {
  createUserController,
  updateUserController,
  authUserController,
};
