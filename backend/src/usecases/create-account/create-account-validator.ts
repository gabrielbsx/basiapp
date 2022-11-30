import * as Joi from 'joi';
import { AccountUsernameUnique, Validator } from '../../validators';
import { IsObjectId } from '../../validators/is-object-id';
import { accountMessages } from '../../validators/messages';
import { ServerIdExists } from '../../validators/server-id-exists';

export default class CreateAccountValidator extends Validator {
  static messages = accountMessages;
  static validationSchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().required().min(4).max(12)
      .external(AccountUsernameUnique)
      .messages(CreateAccountValidator.messages.username),
    password: Joi.string().required().min(4).max(12)
      .messages(CreateAccountValidator.messages.password),
    email: Joi.string().required().email()
      .messages(CreateAccountValidator.messages.email),
    name: Joi.string().required().min(3).max(100)
      .messages(CreateAccountValidator.messages.name),
    serverId: Joi.string().required()
      .external(IsObjectId)
      .external(ServerIdExists)
      .messages(CreateAccountValidator.messages.serverId),
    passwordConfirmation: Joi.string().required().min(4).max(12)
      .valid(Joi.ref('password'))
      .messages(CreateAccountValidator.messages.passwordConfirmation),
  });
}