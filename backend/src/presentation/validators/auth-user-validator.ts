import * as Joi from 'joi';
import { UserEmailExists } from '../../validation';
import { Validator } from '../../validation';
import { userMessages } from '../../validation/messages';

export class AuthUserValidator extends Validator {
  messages = userMessages;
  validationSchema: Joi.ObjectSchema = Joi.object({
    email: Joi.string().email().required()
      .external(UserEmailExists)
      .messages(this.messages.email),
    password: Joi.string().required().min(6).max(24)
      .messages(this.messages.password),
  });
}
