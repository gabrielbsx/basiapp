import database from '../config/database';

export interface IPostLike {
  account: database.Schema.Types.ObjectId;
  post: database.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const postLikeSchema = new database.Schema<IPostLike>({
  account: { type: database.Schema.Types.ObjectId, ref: 'Account', required: true },  
  post: { type: database.Schema.Types.ObjectId, ref: 'Post', required: true },
}, { timestamps: true });

export default database.model('PostLike', postLikeSchema);
