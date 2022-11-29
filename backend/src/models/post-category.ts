import database from '../config/database';

export interface IPostCategory {
  name: string;
  description: string;
  posts: database.Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const postCategorySchema = new database.Schema<IPostCategory>({
  name: { type: String, required: true },
  description: { type: String, required: false },
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

export default database.model('PostCategory', postCategorySchema);
