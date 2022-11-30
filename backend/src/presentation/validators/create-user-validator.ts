import * as Joi from 'joi';
import { UserEmailUnique } from '../../validation';
import { Validator } from '../../validation';
import { userMessages } from '../../validation/messages';

export class CreateUserValidator extends Validator {
  messages = userMessages;
  validationSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().optional().min(3).max(100)
      .messages(this.messages.name),
    email: Joi.string().email().required()
      .external(UserEmailUnique)
      .messages(this.messages.email),
    password: Joi.string().min(6).max(24).required()
      .messages(this.messages.password),
    passwordConfirmation: Joi.string().min(6).max(24).required()
      .valid(Joi.ref('password'))
      .messages(this.messages.passwordConfirmation),
  });
}
