import { Schema } from 'mongoose';
import database from '../config/database';
import { Server } from './server';

export type User = {
  id: Schema.Types.ObjectId;
  name?: string;
  email: string;
  password: string;
  role: string;
  servers: Server[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new database.Schema<User>({
  name: { type: String, required: false },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true, select: false },
  role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] },
  servers: [{ type: database.Schema.Types.ObjectId, ref: 'Server', select: false }],
}, { timestamps: true });

export default database.model('User', userSchema);
