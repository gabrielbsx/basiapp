import database from '../config/database';

export interface IPost {
  title: string;
  content: string;
  thumbnail: string;
  category: database.Schema.Types.ObjectId;
  server: database.Schema.Types.ObjectId;
  account: database.Schema.Types.ObjectId;
  likes: database.Schema.Types.ObjectId[];
  comments: database.Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new database.Schema<IPost>({
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
