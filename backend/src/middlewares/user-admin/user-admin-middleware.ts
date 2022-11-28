import { Request, Response, NextFunction } from 'express';
import env from '../../config/env';
import User from '../../models/user';

export default class UserAdminMiddleware {
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request;
      if (!user) {
        return response.status(401).json({
          errors: [{
            message: 'Não foi possível autenticar o usuário',
            field: 'user',
          }],
        });
      }
      const { role } = user;
      if (role !== 'admin') {
        return response.status(401).json({  
          errors: [{
            message: 'Não foi possível autenticar o usuário',
            field: 'user',
          }],
        });
      }
      return next();
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
