import { ValidationError } from 'joi';
import Server from '../models/server';

export async function ServerIdExists(id: string) {
  const server = await Server.findById(id);
  if (!server) {
    throw new ValidationError('Server not found', [{
      message: 'Servidor não encontrado',
      path: ['id'],
      type: 'id.exists',
      context: {
        value: id,
        key: 'id',
        label: 'id',
      },
    }], id);
  }
}
