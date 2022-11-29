import * as Joi from 'joi';
import { UserEmailExists } from '../../validators';
import { Validator } from '../../validators';
import { userMessages } from '../../validators/messages';

export class AuthUserValidator extends Validator {
  static messages = userMessages;
  static validationSchema: Joi.ObjectSchema = Joi.object({
    email: Joi.string().email().required()
      .external(UserEmailExists)
      .messages(AuthUserValidator.messages.email),
    password: Joi.string().required().min(6).max(24)
      .messages(AuthUserValidator.messages.password),
  });
}
