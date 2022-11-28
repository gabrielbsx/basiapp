// mongoose user model
import database from '../config/database';

const userSchema = new database.Schema({
  email: { type: String, unique: true, lowercase: true },
  name: { type: String, required: false },
  role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] },
  servers: [{ type: database.Schema.Types.ObjectId, ref: 'Server' }],
  password: { type: String, required: true },
}, { timestamps: true });

export default database.model('User', userSchema);
