import database from '../config/database';

export interface IServer {
  name: string;
  description: string;
  owner: database.Types.ObjectId;
  accounts: database.Schema.Types.ObjectId[];
  posts: database.Schema.Types.ObjectId[];
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

