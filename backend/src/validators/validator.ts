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
    } catch (error: any) {
      return error.details.map((detail: any) => ({
        message: detail.message,
        field: detail.context.key,
      }));
    }
  }
}
