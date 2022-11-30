import * as Joi from 'joi';
import { Validator } from '../../validation';
import { accountMessages } from '../../validation/messages';
import { ServerIdExists } from '../../validation/validators/server-id-exists';

export class AuthAccountValidator extends Validator {
  messages = accountMessages;
  validationSchema: Joi.ObjectSchema = Joi.object({
    serverId: Joi.string().required()
      .external(ServerIdExists)
      .messages(this.messages.serverId),
    username: Joi.string().min(4).max(12).required()
      .messages(this.messages.username),
    password: Joi.string().min(4).max(12).required()
      .messages(this.messages.password),
  });
}
