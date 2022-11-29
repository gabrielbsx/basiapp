import * as Express from 'express';
import { Types } from 'mongoose';
import { IAccount } from '../../models/account';
import { IUser } from '../../models/user';

type MongoData = {
  id: Types.ObjectId;
  _id: undefined;
  __v: undefined;
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser & MongoData;
      account?: IAccount & MongoData;
    }
  }
}
