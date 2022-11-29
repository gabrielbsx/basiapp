import database from '../config/database';
import { IAccount } from './account';
import { IPost } from './post';

export interface IPostLike {
  account: IAccount;
  post: IPost;
  createdAt: Date;
  updatedAt: Date;
}

const postLikeSchema = new database.Schema<IPostLike>({
  account: { type: database.Schema.Types.ObjectId, ref: 'Account', required: true },  
  post: { type: database.Schema.Types.ObjectId, ref: 'Post', required: true },
}, { timestamps: true });

export default database.model('PostLike', postLikeSchema);
