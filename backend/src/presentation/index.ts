import AuthAccountController from './controllers/auth-account-controller';
import AuthUserController from './controllers/auth-user-controller';
import CreateAccountController from './controllers/create-account-controller';
import CreateServerController from './controllers/create-server-controller';
import CreateUserController from './controllers/create-user-controller';
import UpdateAccountController from './controllers/update-account-controller';
import UpdateServerController from './controllers/update-server-controller';
import UpdateUserController from './controllers/update-user-controller';
import { AuthAccountValidator } from './validators/auth-account-validator';
import { AuthUserValidator } from './validators/auth-user-validator';
import CreateAccountValidator from './validators/create-account-validator';
import CreateServerValidator from './validators/create-server-validator';
import { CreateUserValidator } from './validators/create-user-validator';
import UpdateAccountValidator from './validators/update-account-validator';
import { UpdateServerValidator } from './validators/update-server-validator';
import { UpdateUserValidator } from './validators/update-user-validator';

const authUserValidator = new AuthUserValidator();
const authAccountValidator = new AuthAccountValidator();
const createUserValidator = new CreateUserValidator();
const createServerValidator = new CreateServerValidator();
const createAccountValidator = new CreateAccountValidator();
const updateUserValidator = new UpdateUserValidator();
const updateAccountValidator = new UpdateAccountValidator();
const updateServerValidator = new UpdateServerValidator();

const authUserController = new AuthUserController(authUserValidator);
const authAccountController = new AuthAccountController(authAccountValidator);
const createUserController = new CreateUserController(createUserValidator);
const createAccountController = new CreateAccountController(createAccountValidator);
const createServerController = new CreateServerController(createServerValidator);
const updateUserController = new UpdateUserController(updateUserValidator);
const updateAccountController = new UpdateAccountController(updateAccountValidator);
const updateServerController = new UpdateServerController(updateServerValidator);

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
