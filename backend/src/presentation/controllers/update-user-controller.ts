import { Request, Response } from 'express';
import User from '../../infra/models/user';
import * as bcrypt from 'bcrypt';
import Controller from '../../domain/controllers/controller';
import { Validator } from '../../validation';

export default class UpdateUserController implements Controller {
  updateUserValidator: Validator;
  constructor(updateUserValidator: Validator) {
    this.updateUserValidator = updateUserValidator;
  }
  async handle (request: Request, response: Response) {
    try {
      const { body } = request;
      const errors = await this.updateUserValidator.validate(body, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const {
        password,
        currentPassword,
        passwordConfirmation,
        ...userWithoutPasswords
      } = body;
      const currentUser = await User.findOne({ _id: request.user.id }).select('+password');
      if (currentPassword && password && passwordConfirmation) {
        let passwordHashed: string;
        const compareCurrentPasswordWithHashedPassword = await bcrypt.compare(currentPassword, currentUser.password);
        if (!compareCurrentPasswordWithHashedPassword) {
          return response.status(400).json({
            errors: [{
              message: 'Senha atual incorreta',
              field: 'currentPassword',
            }],
          });
        }
        const salt = await bcrypt.genSalt(10);
        passwordHashed = await bcrypt.hash(password, salt);
        await User.updateOne({ _id: request.user.id }, {
          $set: {
            password: passwordHashed,
          },
        });
      }
      const user = await User.findOneAndUpdate({ _id: request.user.id }, userWithoutPasswords, { new: true });
      return response.json({
        message: 'Usuário atualizado com sucesso',
        user: {
          ...user.toJSON(),
          password: undefined,
        },
      });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
