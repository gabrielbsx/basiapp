import * as Joi from 'joi';
import { UserEmailUnique } from '../../validation';
import { Validator } from '../../validation';
import { userMessages } from '../../validation/messages';

export class UpdateUserValidator extends Validator {
  messages = userMessages;
  validationSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().optional()
      .messages(this.messages.name),
    email: Joi.string().email().required()
      .external(UserEmailUnique)
      .messages(this.messages.email),
    currentPassword: Joi.string().optional()
      .when('password', {
        is: Joi.exist(),
        then: Joi.required(),
      })
      .messages(this.messages.currentPassword),
    password: Joi.string().optional()
      .min(6).max(24)
      .messages(this.messages.password),
    passwordConfirmation: Joi.string()
      .when('password', {
        is: Joi.exist(),
        then: Joi.required().valid(Joi.ref('password')),
      })
      .messages(this.messages.passwordConfirmation),
  });
} 
