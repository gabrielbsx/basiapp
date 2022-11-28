import database from '../config/database';

const postSchema = new database.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  thumbnail: { type: String, required: false },
  category: { type: database.Schema.Types.ObjectId, ref: 'PostCategory', required: false },
  likes: [{ type: database.Schema.Types.ObjectId, ref: 'PostLike' }],
  comments: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

export default database.model('Post', postSchema);
