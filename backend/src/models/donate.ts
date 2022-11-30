import { Schema } from 'mongoose';
import database from '../config/database';
import { Account } from './account';
import { Package } from './package';

export interface Donate {
  id: Schema.Types.ObjectId;
  account: Account;
  package: Package;
  statusPayment: string;
  createdAt: Date;
  updatedAt: Date;
}

const donateSchema = new database.Schema<Donate>({
  account: { type: database.Schema.Types.ObjectId, ref: 'Account', required: true },
  package: { type: database.Schema.Types.ObjectId, ref: 'Package', required: true },
  statusPayment: { type: String, required: true },
}, { timestamps: true });

export default database.model('Donate', donateSchema);
