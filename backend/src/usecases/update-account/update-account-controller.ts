import { NextFunction, Request, Response } from 'express';
import Controller from '../../domain/controllers/controller';
import Account from '../../models/account';
import UpdateAccountValidator from './update-account-validator';
import * as bcrypt from 'bcrypt';

export default class UpdateAccountController implements Controller {
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { body, params: { serverId } } = request;
      const errors = await UpdateAccountValidator.validate({ ...body, serverId }, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const currentAccount = await Account.findOne({ _id: request.account.id, server: serverId }).select('+password');
      if (!currentAccount) {
        return response.status(404).json({ 
          errors: [{
            message: 'Conta não encontrada',
            field: 'any',
          }],
        });
      }
      const {
        password,
        currentPassword,
        passwordConfirmation,
        ...accountWithoutPasswords
      } = body;
      if (currentPassword && password && passwordConfirmation) {
        let passwordHashed: string;
        const compareCurrentPasswordWithHashedPassword = await bcrypt.compare(currentPassword, currentAccount.password);
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
        await Account.updateOne({ _id: request.account.id }, {
          $set: {
            password: passwordHashed,
          },
        });
      }
      const account = await Account.findOneAndUpdate({ _id: request.account.id }, accountWithoutPasswords, { new: true });
      return response.json({
        message: 'Conta atualizada com sucesso',
        account: account.toJSON(),
      });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
