import * as Joi from 'joi';
import { UserEmailUnique } from '../../validators';
import { Validator } from '../../validators';
import { userMessages } from '../../validators/messages';

export class CreateUserValidator extends Validator {
  static messages = userMessages;
  static validationSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().optional().min(3).max(100)
      .messages(CreateUserValidator.messages.name),
    email: Joi.string().email().required()
      .external(UserEmailUnique)
      .messages(CreateUserValidator.messages.email),
    password: Joi.string().min(6).max(24).required()
      .messages(CreateUserValidator.messages.password),
    passwordConfirmation: Joi.string().min(6).max(24).required()
      .valid(Joi.ref('password'))
      .messages(CreateUserValidator.messages.passwordConfirmation),
  });
}
