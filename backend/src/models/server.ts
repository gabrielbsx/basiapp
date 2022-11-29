import { Schema } from 'mongoose';
import database from '../config/database';
import { Account } from './account';
import { Post } from './post';
import { User } from './user';

export interface Server {
  id: Schema.Types.ObjectId;
  name: string;
  description: string;
  owner: User;
  accounts: Account[];
  posts: Post[];
  createdAt: Date;
  updatedAt: Date;
}

const serverSchema = new database.Schema<Server>({
  name: { type: String, required: true },
  description: { type: String, required: false },
  owner: { type: database.Schema.Types.ObjectId, ref: 'User', required: true },
  accounts: [{ type: database.Schema.Types.ObjectId, ref: 'Account' }],
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

export default database.model('Server', serverSchema);

