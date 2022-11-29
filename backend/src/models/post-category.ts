import { Schema } from 'mongoose';
import database from '../config/database';
import { Post } from './post';

export interface PostCategory {
  id: Schema.Types.ObjectId;
  name: string;
  description: string;
  posts: Post[];
  createdAt: Date;
  updatedAt: Date;
}

const postCategorySchema = new database.Schema<PostCategory>({
  name: { type: String, required: true },
  description: { type: String, required: false },
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

export default database.model('PostCategory', postCategorySchema);
