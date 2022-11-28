export default {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://mongoadmin:secret@localhost:27017/app?authSource=admin',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpiration: process.env.JWT_EXPIRATION || '1d',
};
