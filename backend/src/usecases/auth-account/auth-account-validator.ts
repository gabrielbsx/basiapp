import * as Joi from 'joi';
import { Validator } from '../../validators';
import { accountMessages } from '../../validators/messages';

export class AuthAccountValidator extends Validator {
  static messages = accountMessages;
  static validationSchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().min(4).max(10)
      .messages(AuthAccountValidator.messages.username),
    password: Joi.string().min(4).max(10).required()
      .messages(AuthAccountValidator.messages.password),
  });
}
