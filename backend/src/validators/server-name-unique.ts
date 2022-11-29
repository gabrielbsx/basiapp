import { ValidationError } from 'joi';
import Server from '../models/server';

export async function ServerNameUnique(name: string) {
  const user = await Server.findOne({ name });
  if (user) {
    throw new ValidationError('Server already exists', [{
      message: 'Nome de servidor já existe',
      path: ['name'],
      type: 'name.unique',
      context: {
        value: name,
        key: 'name',
        label: 'name',
      },
    }], name);
  }
}
