import database from '../config/database';

const donateSchema = new database.Schema({
  account: { type: database.Schema.Types.ObjectId, ref: 'Account', required: true },
  package: { type: database.Schema.Types.ObjectId, ref: 'Package', required: true },
  statusPayment: { type: String, required: true },
}, { timestamps: true });

export default database.model('Donate', donateSchema);
