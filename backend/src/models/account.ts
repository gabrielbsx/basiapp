import database from '../config/database';

export interface IAccount {
  name?: string;
  email: string;
  username: string;
  password: string;
  role: string;
  server?: database.Schema.Types.ObjectId;
  posts?: database.Schema.Types.ObjectId[];
  likes?: database.Schema.Types.ObjectId[];
  comments?: database.Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const accountSchema = new database.Schema<IAccount>({
  name: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: false },
  role: { type: String, required: true, default: 'user', enum: ['user', 'moderator', 'admin'] },
  server: { type: database.Schema.Types.ObjectId, ref: 'Server', required: true },
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
  likes: [{ type: database.Schema.Types.ObjectId, ref: 'PostLike' }],
  comments: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

export default database.model('Account', accountSchema);
