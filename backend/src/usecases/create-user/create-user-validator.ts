import * as Joi from 'joi';
import { UserEmailUnique } from '../../helpers';

export class CreateUserValidator {
  static messages = {
    name: {
      'string.empty': 'O campo nome não pode ser vazio',
      'string.base': 'O campo nome deve ser uma string',
      'string.min': 'O campo nome deve ter no mínimo {#limit} caracteres',
      'string.max': 'O campo nome deve ter no máximo {#limit} caracteres',
    },
    email: {
      'string.empty': 'O campo email não pode ser vazio',
      'string.base': 'O campo email deve ser uma string',
      'string.email': 'O campo email deve ser um email válido',
      'any.required': 'O campo email é obrigatório',
    },
    password: {
      'string.empty': 'O campo senha não pode ser vazio',
      'string.base': 'O campo senha deve ser uma string',
      'string.min': 'O campo senha deve ter no mínimo {#limit} caracteres',
      'string.max': 'O campo senha deve ter no máximo {#limit} caracteres',
      'any.required': 'O campo senha é obrigatório',
    },
    passwordConfirmation: {
      'string.empty': 'O campo confirmação de senha não pode ser vazio',
      'string.base': 'O campo confirmação de senha deve ser uma string',
      'string.min': 'O campo confirmação de senha deve ter no mínimo {#limit} caracteres',
      'string.max': 'O campo confirmação de senha deve ter no máximo {#limit} caracteres',
      'any.required': 'O campo confirmação de senha é obrigatório',
      'any.ref': 'O campo confirmação de senha deve ser igual ao campo senha',
      'any.only': 'O campo confirmação de senha deve ser igual ao campo senha',
    },
  };
  static validationSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().optional().min(3).max(50)
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
  static async validate(data: any) {
    try {
      await CreateUserValidator.validationSchema.validateAsync(data, { abortEarly: false, allowUnknown: false });
      return null;
    } catch (error: any) {
      return error.details.map((detail: any) => ({
        message: detail.message,
        field: detail.context.key,
      }));
    }
  }
}
