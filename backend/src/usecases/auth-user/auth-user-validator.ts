import * as Joi from 'joi';
import { UserEmailExists } from '../../helpers';

export class AuthUserValidator {
  static messages = {
    email: {
      'string.empty': 'O campo email é obrigatório',
      'string.base': 'O campo email deve ser uma string',
      'string.email': 'O campo email deve ser um email válido',
      'any.required': 'O campo email é obrigatório',
    },
    password: {
      'string.empty': 'O campo senha é obrigatório',
      'string.base': 'O campo senha deve ser uma string',
      'string.min': 'O campo senha deve ter no mínimo {#limit} caracteres',
      'string.max': 'O campo senha deve ter no máximo {#limit} caracteres',
      'any.required': 'O campo senha é obrigatório',
    },
  }
  static validationSchema: Joi.ObjectSchema = Joi.object({
    email: Joi.string().email().required()
      .external(UserEmailExists)
      .messages(AuthUserValidator.messages.email),
    password: Joi.string().required().min(6).max(24)
      .messages(AuthUserValidator.messages.password),
  });
  static async validate(data: any) {
    try {
      await AuthUserValidator.validationSchema.validateAsync(data, { abortEarly: false, allowUnknown: false });
      return null;
    } catch (error: any) {
      return error.details.map((detail: any) => ({
        message: detail.message,
        field: detail.context.key,
      }));
    }
  }
}
