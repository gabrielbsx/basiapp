import database from '../config/database';
import { IAccount } from './account';
import { IPost } from './post';
import { IUser } from './user';

export interface IServer {
  name: string;
  description: string;
  owner: IUser;
  accounts: IAccount[];
  posts: IPost[];
  createdAt: Date;
  updatedAt: Date;
}

const serverSchema = new database.Schema<IServer>({
  name: { type: String, required: true },
  description: { type: String, required: false },
  owner: { type: database.Schema.Types.ObjectId, ref: 'User', required: true },
  accounts: [{ type: database.Schema.Types.ObjectId, ref: 'Account' }],
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

export default database.model('Server', serverSchema);

