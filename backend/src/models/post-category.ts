import database from '../config/database';
import { IPost } from './post';

export interface IPostCategory {
  name: string;
  description: string;
  posts: IPost[];
  createdAt: Date;
  updatedAt: Date;
}

const postCategorySchema = new database.Schema<IPostCategory>({
  name: { type: String, required: true },
  description: { type: String, required: false },
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

export default database.model('PostCategory', postCategorySchema);
