import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import env from '../../config/env';
import User from '../../models/user';

export default class AuthUserMiddleware {
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
      const user = await User.findOne({ _id: id });
      if (!user) {
        return response.status(401).json({
          errors: [{
            message: 'Não foi possivel autenticar o usuario',
            field: 'user',
          }],
        });
      }
      request.user = {
        id: user._id,
        ...user.toJSON(),
        _id: undefined,
        __v: undefined,
      };
      return next();
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
