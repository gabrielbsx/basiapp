import mongoose from 'mongoose';
import env from './env';

mongoose.connect(env.mongoUri);

export default mongoose;
