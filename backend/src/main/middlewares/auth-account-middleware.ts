import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import env from '../../config/env';
import Account from '../../infra/models/account';

export default class AuthAccountMiddleware {
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { authorization } = request.headers;
      if (!authorization) {
        return response.status(401).json({
          errors: [{
            message: 'Não foi possível autenticar o usuário',
            field: 'authorization',
          }],
        });
      }
      const token = authorization?.split(' ')[1];
      if (!token) {
        return response.status(401).json({
          errors: [{
            message: 'Não foi possivel autenticar o usuario',
            field: 'token',
          }],
        });
      }
      const decoded = jwt.verify(token, env.jwtSecret);
      if (!decoded) {
        return response.status(401).json({
          errors: [{
            message: 'Não foi possivel autenticar o usuario',
            field: 'token',
          }],
        });
      }
      const { id } = decoded as { id: string };
      const account = await Account.findOne({ _id: id });
      if (!account) {
        return response.status(401).json({
          errors: [{
            message: 'Não foi possivel autenticar o usuario',
            field: 'user',
          }],
        });
      }
      request.account = account.toJSON();
      return next();
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
