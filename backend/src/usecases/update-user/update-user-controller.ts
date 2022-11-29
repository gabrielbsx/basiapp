import { Request, Response } from 'express';
import { UpdateUserValidator } from './update-user-validator';
import User from '../../models/user';
import * as bcrypt from 'bcrypt';
import { dataMongo } from '../../helpers';

export default class UpdateUserController {
  async handle (request: Request, response: Response) {
    try {
      const { body } = request;
      const errors = await UpdateUserValidator.validate(body, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const { password } = body;
      let passwordHashed: string | undefined = undefined;
      if (password) {
        const salt = await bcrypt.genSalt(10);
        passwordHashed = await bcrypt.hash(password, salt);
      }
      const user = await User.findOneAndUpdate({ _id: request.user?.id }, {
        ...body,
        password: passwordHashed,
      }, { new: true });
      return response.json({
        message: 'Usuário atualizado com sucesso',
        user: {
          ...dataMongo(user),
          password: undefined,
        },
      });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
