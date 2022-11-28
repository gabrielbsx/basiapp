import database from '../config/database';

const accountSchema = new database.Schema({
  name: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: false },
  server: { type: database.Schema.Types.ObjectId, ref: 'Server', required: true },
  posts: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
  likes: [{ type: database.Schema.Types.ObjectId, ref: 'PostLike' }],
  comments: [{ type: database.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

export default database.model('Account', accountSchema);
