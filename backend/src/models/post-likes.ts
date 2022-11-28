import database from '../config/database';

const postSchema = new database.Schema({
  user: { type: database.Schema.Types.ObjectId, ref: 'User', required: true },  
  post: { type: database.Schema.Types.ObjectId, ref: 'Post', required: true },
}, { timestamps: true });

export default database.model('PostLike', postSchema);
