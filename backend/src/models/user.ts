import { Schema } from 'mongoose';
import database from '../config/database';
import { IServer } from './server';

export type IUser = {
  name?: string;
  email: string;
  password: string;
  role: string;
  servers?: IServer[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new database.Schema<IUser>({
  name: { type: String, required: false },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true, select: false },
  role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] },
  servers: [{ type: database.Schema.Types.ObjectId, ref: 'Server' }],
}, { timestamps: true });

export default database.model('User', userSchema);
