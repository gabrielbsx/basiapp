import * as Joi from 'joi';

export class AuthAccountValidator {
  static messages = {
    username: {
      'string.empty': 'O campo nome de usuário não pode ser vazio',
      'string.base': 'O campo nome de usuário deve ser uma string',
      'string.min': 'O campo nome de usuário deve ter no mínimo {#limit} caracteres',
      'string.max': 'O campo nome de usuário deve ter no máximo {#limit} caracteres',
    },
    password: {
      'string.empty': 'O campo senha não pode ser vazio',
      'string.base': 'O campo senha deve ser uma string',
      'string.min': 'O campo senha deve ter no mínimo {#limit} caracteres',
      'string.max': 'O campo senha deve ter no máximo {#limit} caracteres',
      'any.required': 'O campo senha é obrigatório',
    },
  };
  static validationSchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().min(4).max(10)
      .messages(AuthAccountValidator.messages.username),
    password: Joi.string().min(4).max(10).required()
      .messages(AuthAccountValidator.messages.password),
  });
  static async validate(data: any) {
    try {
      await AuthAccountValidator.validationSchema.validateAsync(data, { abortEarly: false, allowUnknown: false });
      return null;
    } catch (error: any) {
      return error.details.map((detail: any) => ({
        message: detail.message,
        field: detail.context.key,
      }));
    }
  }
}
