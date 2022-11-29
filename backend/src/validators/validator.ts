import { Request } from 'express';
import * as Joi from 'joi';

export abstract class Validator {
  static messages: any;
  static validationSchema: Joi.ObjectSchema;
  static async validate(data: any, request: Request) {  
    try {
      await this.validationSchema.validateAsync(data, {
        abortEarly: false,
        allowUnknown: false,
        context: { request },
      });
      return null;
    } catch (error) {
      if (error instanceof Joi.ValidationError) {
        return error.details.map((detail) => ({
          message: detail.message,
          field: detail.context.key,
        }));
      }
      return [{ message: error.message, field: 'any' }];
    }
  }
}
