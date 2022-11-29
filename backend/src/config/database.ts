import mongoose from 'mongoose';
import env from './env';

mongoose.connect(env.mongoUri);

mongoose.plugin((schema: mongoose.Schema) => {
  schema.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  });
});

export default mongoose;
