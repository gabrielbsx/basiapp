import * as Express from 'express';
import { FlattenMaps, Types } from 'mongoose';
import { Account } from '../../infra/models/account';
import { User } from '../../infra/models/user';

declare global {
  namespace Express {
    interface Request {
      user?: FlattenMaps<User>;
      account?: FlattenMaps<Account>;
    }
  }
}
