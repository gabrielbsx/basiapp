import { ValidationError } from 'joi';
import { Types } from 'mongoose';

export async function IsObjectId(id: string) {
  if (!Types.ObjectId.isValid(id)) {
    throw new ValidationError('It\'s not a valid Object Id', [{
      message: 'Identificador inválido',
      path: ['id'],
      type: 'id.valid',
      context: {
        value: id,
        key: 'id',
        label: 'id',
      },
    }], id);
  }
}
