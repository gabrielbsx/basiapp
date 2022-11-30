import { Schema } from 'mongoose';
import database from '../config/database';
import { Post } from './post';
import { Server } from './server';

export interface Account {
  id: Schema.Types.ObjectId;
  name?: string;
  email?: string;
  username: string;
  password: string;
  role: string;
  server: Server;
  posts: Post[];
  likes: Post[];
  comments: Post[];
  createdAt: Date;
  updatedAt: Date;
}

const accountSchema = new database.Schema<Account>({
  name: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  email: { type: String, required: false },
  role: { type: String, required: true, default: 'user', enum: ['user', 'moderator', 'admin'] },
  server: { type: database.Schema.Types.ObjectId, ref: 'Server', required: true, select: false },
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post', select: false }],
  likes: [{ type: database.Schema.Types.ObjectId, ref: 'Post', select: false }],
  comments: [{ type: database.Schema.Types.ObjectId, ref: 'Post', select: false }],
}, { timestamps: true });

export default database.model('Account', accountSchema);
