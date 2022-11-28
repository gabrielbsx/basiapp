import database from '../config/database';

const packageSchema = new database.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  donate: { type: Number, required: true },
  price: { type: Number, required: true },
  items: [{
    item: { type: Number, required: true },
    effects: [{
      effect: { type: Number, required: true },
      value: { type: Number, required: true },
    }],
  }],
  thumbnail: { type: String, required: true },
}, { timestamps: true });

const Package = database.model('Package', packageSchema);
