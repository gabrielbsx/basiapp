import * as Joi from 'joi';
import { Validator } from '../../validation';
import { accountMessages } from '../../validation/messages';
import { ServerIdExists } from '../../validation/validators/server-id-exists';

export default class UpdateAccountValidator extends Validator {
  messages = accountMessages;
  validationSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().optional()
      .messages(this.messages.name),
    email: Joi.string().email().optional()
      .messages(this.messages.email),
    serverId: Joi.string().required()
      .external(ServerIdExists)
      .messages(this.messages.serverId),
    currentPassword: Joi.string().min(6).max(12).optional()
      .when('password', {
        is: Joi.exist(),
        then: Joi.required(),
      })
      .messages(this.messages.currentPassword),
    password: Joi.string().min(6).max(12).optional()
      .messages(this.messages.password),
    passwordConfirmation: Joi.string().min(6).max(12)
      .when('password', {
        is: Joi.exist(),
        then: Joi.required().valid(Joi.ref('password')),
      })
      .messages(this.messages.passwordConfirmation),
  });
}
