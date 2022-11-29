import database from '../config/database';

export interface IDonate {
  account: database.Schema.Types.ObjectId;
  package: database.Schema.Types.ObjectId;
  statusPayment: string;
  createdAt: Date;
  updatedAt: Date;
}

const donateSchema = new database.Schema<IDonate>({
  account: { type: database.Schema.Types.ObjectId, ref: 'Account', required: true },
  package: { type: database.Schema.Types.ObjectId, ref: 'Package', required: true },
  statusPayment: { type: String, required: true },
}, { timestamps: true });

export default database.model('Donate', donateSchema);
