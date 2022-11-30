import { Schema } from 'mongoose';
import database from '../config/database';

export interface Package {
  id: Schema.Types.ObjectId;
  name: string;
  description: string;
  donate: number;
  price: number;
  items: {
    item: number;
    effects: {
      effect: number;
      value: number;
    }[];
  }[];
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
}

const packageSchema = new database.Schema<Package>({
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
