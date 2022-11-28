import { ValidationError } from 'joi';
import User from '../models/user';

export async function UserEmailExists(email: string) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new ValidationError('User not found', [{
      message: 'Usuário não encontrado',
      path: ['email'],
      type: 'email.exists',
      context: {
        key: 'email',
        label: 'email',
      },
    }], email);
  }
}
