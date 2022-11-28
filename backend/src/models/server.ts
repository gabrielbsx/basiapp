import database from '../config/database';

const serverSchema = new database.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  users: [{ type: database.Schema.Types.ObjectId, ref: 'User' }],
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });
