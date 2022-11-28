import database from '../config/database';

const postCategorySchema = new database.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

export default database.model('PostCategory', postCategorySchema);
