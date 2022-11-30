import * as Joi from 'joi';
import { Validator } from '../../validators';
import { accountMessages } from '../../validators/messages';
import { ServerIdExists } from '../../validators/server-id-exists';

export class AuthAccountValidator extends Validator {
  static messages = accountMessages;
  static validationSchema: Joi.ObjectSchema = Joi.object({
    serverId: Joi.string().required()
      .external(ServerIdExists)
      .messages(AuthAccountValidator.messages.serverId),
    username: Joi.string().min(4).max(12).required()
      .messages(AuthAccountValidator.messages.username),
    password: Joi.string().min(4).max(12).required()
      .messages(AuthAccountValidator.messages.password),
  });
}
