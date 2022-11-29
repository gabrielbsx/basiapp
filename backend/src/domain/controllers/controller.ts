import { Request, Response, NextFunction } from 'express';

export default interface Controller {
  handle(request: Request, response: Response, next?: NextFunction): Promise<Response>;
}
