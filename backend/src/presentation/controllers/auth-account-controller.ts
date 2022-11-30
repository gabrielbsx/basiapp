import { Request, Response } from 'express';
import Account from '../../infra/models/account';
import * as bcrypt from 'bcrypt';
import Controller from '../../domain/controllers/controller';
import * as jwt from 'jsonwebtoken';
import env from '../../config/env';
import { Validator } from '../../validation';

export default class AuthAccountController implements Controller {
  authAccountValidator: Validator;
  constructor(authAccountValidator: Validator) {
    this.authAccountValidator = authAccountValidator;
  }
  async handle(request: Request, response: Response) {
    try {
      const { body, params: { serverId } } = request;
      const errors = await this.authAccountValidator.validate({ ...body, serverId }, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const { username, password } = body;
      const account = await Account.findOne({ username, server: serverId }).populate('server').select('+password');
      if (!account) {
        return response.status(401).json({
          errors: [{
            message: 'Não foi possível autenticar a conta',
            field: 'username-or-server',
          }],
        });
      }
      if (!bcrypt.compareSync(password, account.password)) {
        return response.status(400).json({
          errors: [{
            message: 'Não foi possível autenticar a conta',
            field: 'any',
          }],
        });
      }
      const token = jwt.sign({ id: account._id! }, env.jwtSecret, {
        expiresIn: env.jwtExpiration,
      });
      return response.status(201).json({
        message: 'Conta autenticada com sucesso',
        token,
        account: {
          ...account.toJSON(),
          password: undefined,
          server: undefined,
        },
      });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
