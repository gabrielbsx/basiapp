import * as Express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name?: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        _id: undefined;
        __v: undefined;
      };
      account?: {
        id: string;
        name?: string;
        username: string;
        password: string;
        email?: string;
        createdAt: Date;
        updatedAt: Date;
        _id: undefined;
        __v: undefined;
      };
    }
  }
}
