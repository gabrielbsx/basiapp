import * as Joi from 'joi';
import { UserEmailUnique } from '../../validators';
import { Validator } from '../../validators';
import { userMessages } from '../../validators/messages';

export class UpdateUserValidator extends Validator {
  static messages = userMessages;
  static validationSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().optional()
      .messages(UpdateUserValidator.messages.name),
    email: Joi.string().email().required()
      .external(UserEmailUnique)
      .messages(UpdateUserValidator.messages.email),
    currentPassword: Joi.string().optional()
      .when('password', {
        is: Joi.exist(),
        then: Joi.required(),
      })
      .messages(UpdateUserValidator.messages.currentPassword),
    password: Joi.string().optional()
      .min(6).max(24)
      .messages(UpdateUserValidator.messages.password),
    passwordConfirmation: Joi.string()
      .when('password', {
        is: Joi.exist(),
        then: Joi.required().valid(Joi.ref('password')),
      })
      .messages(UpdateUserValidator.messages.passwordConfirmation),
  });
} 
