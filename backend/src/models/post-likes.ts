import { Schema } from 'mongoose';
import database from '../config/database';
import { Account } from './account';
import { Post } from './post';

export interface PostLike {
  id: Schema.Types.ObjectId;
  account: Account;
  post: Post;
  createdAt: Date;
  updatedAt: Date;
}

const postLikeSchema = new database.Schema<PostLike>({
  account: { type: database.Schema.Types.ObjectId, ref: 'Account', required: true },  
  post: { type: database.Schema.Types.ObjectId, ref: 'Post', required: true },
}, { timestamps: true });

export default database.model('PostLike', postLikeSchema);
