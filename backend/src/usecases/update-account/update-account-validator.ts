import * as Joi from 'joi';
import { Validator } from '../../validators';
import { accountMessages } from '../../validators/messages';
import { ServerIdExists } from '../../validators/server-id-exists';

export default class UpdateAccountValidator extends Validator {
  static messages = accountMessages;
  static validationSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().optional()
      .messages(UpdateAccountValidator.messages.name),
    email: Joi.string().email().optional()
      .messages(UpdateAccountValidator.messages.email),
    serverId: Joi.string().required()
      .external(ServerIdExists)
      .messages(UpdateAccountValidator.messages.serverId),
    currentPassword: Joi.string().min(6).max(12).optional()
      .when('password', {
        is: Joi.exist(),
        then: Joi.required(),
      })
      .messages(UpdateAccountValidator.messages.currentPassword),
    password: Joi.string().min(6).max(12).optional()
      .messages(UpdateAccountValidator.messages.password),
    passwordConfirmation: Joi.string().min(6).max(12)
      .when('password', {
        is: Joi.exist(),
        then: Joi.required().valid(Joi.ref('password')),
      })
      .messages(UpdateAccountValidator.messages.passwordConfirmation),
  });
}
