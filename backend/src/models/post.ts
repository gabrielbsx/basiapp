import { Schema } from 'mongoose';
import database from '../config/database';
import { Account } from './account';
import { PostCategory } from './post-category';
import { PostLike } from './post-likes';
import { Server } from './server';

export interface Post {
  id: Schema.Types.ObjectId;
  title: string;
  content: string;
  thumbnail: string;
  category: PostCategory;
  server: Server;
  account: Account;
  likes: PostLike[];
  comments: Post[];
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new database.Schema<Post>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  thumbnail: { type: String, required: false },
  category: { type: database.Schema.Types.ObjectId, ref: 'PostCategory', required: false },
  likes: [{ type: database.Schema.Types.ObjectId, ref: 'PostLike' }],
  comments: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
  account: { type: database.Schema.Types.ObjectId, ref: 'Account', required: true },
  server: { type: database.Schema.Types.ObjectId, ref: 'Server', required: true },
}, { timestamps: true });

export default database.model('Post', postSchema);
