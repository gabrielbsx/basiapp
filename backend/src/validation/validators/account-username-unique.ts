import { ValidationError } from 'joi';
import account from '../../infra/models/account';

export async function AccountUsernameUnique(username: string) {
  const user = await account.findOne({ username });
  if (user) {
    throw new ValidationError('User already exists', [{
      message: 'Usuário já cadastrado',
      path: ['username'],
      type: 'username.unique',
      context: {
        key: 'username',
        label: 'username',
        value: username,
      },
    }], username);
  }
}
