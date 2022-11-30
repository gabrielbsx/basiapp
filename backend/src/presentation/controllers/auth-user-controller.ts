import { Request, Response } from 'express';
import User from '../../infra/models/user';
import env from '../../config/env';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import Controller from '../../domain/controllers/controller';
import { Validator } from '../../validation';

export default class AuthUserController implements Controller {
  authUserValidator: Validator;
  constructor(authUserValidator: Validator) {
    this.authUserValidator = authUserValidator;
  }
  async handle(request: Request, response: Response) {
    try {
      const { body } = request;
      const errors = await this.authUserValidator.validate(body, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const { email, password } = body;
      const user = await User.findOne({ email }).select('+password');
      const passwordMatch = await bcrypt.compare(password, user.password!);
      if (!passwordMatch) {
        return response.status(400).json({
          errors: [{
            message: 'Não foi possível autenticar o usuário',
            field: 'any',
          }],
        });
      }
      const token = jwt.sign({ id: user._id! }, env.jwtSecret, {
        expiresIn: env.jwtExpiration,
      });
      return response.json({
        message: 'Usuário autenticado com sucesso',
        token,
        user: {
          ...user.toJSON(),
          password: undefined,
        },
      });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
