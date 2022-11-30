import { Request, Response, NextFunction } from 'express';

export default class UserServerOwnerMiddleware {
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { user } = request;
      console.log(user.servers);
      return next();
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
