import * as Joi from 'joi';
import { AccountUsernameUnique, Validator } from '../../validation';
import { IsObjectId } from '../../validation/validators/is-object-id';
import { accountMessages } from '../../validation/messages';
import { ServerIdExists } from '../../validation/validators/server-id-exists';

export default class CreateAccountValidator extends Validator {
  messages = accountMessages;
  validationSchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().required().min(4).max(12)
      .external(AccountUsernameUnique)
      .messages(this.messages.username),
    password: Joi.string().required().min(4).max(12)
      .messages(this.messages.password),
    email: Joi.string().required().email()
      .messages(this.messages.email),
    name: Joi.string().required().min(3).max(100)
      .messages(this.messages.name),
    serverId: Joi.string().required()
      .external(IsObjectId)
      .external(ServerIdExists)
      .messages(this.messages.serverId),
    passwordConfirmation: Joi.string().required().min(4).max(12)
      .valid(Joi.ref('password'))
      .messages(this.messages.passwordConfirmation),
  });
}