import { ValidationError } from 'joi';
import User from '../../infra/models/user';

export async function UserEmailUnique(email: string) {
  const user = await User.findOne({ email });
  if (user) {
    throw new ValidationError('User already exists', [{
      message: 'E-mail já cadastrado',
      path: ['email'],
      type: 'email.unique',
      context: {
        key: 'email',
        label: 'email',
        value: email,
      },
    }], email);
  }
}
