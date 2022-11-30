import { Request, Response } from 'express';
import Controller from '../../domain/controllers/controller';
import Server from '../../infra/models/server';
import Account from '../../infra/models/account';
import * as bcrypt from 'bcrypt';
import { Validator } from '../../validation';

export default class CreateAccountController implements Controller {
  createAccountValidator: Validator;
  constructor(createAccountValidator: Validator) {
    this.createAccountValidator = createAccountValidator;
  }
  async handle(request: Request, response: Response) {
    try {
      const { body, params: { serverId } } = request;
      const errors = await this.createAccountValidator.validate({ ...body, serverId }, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const server = await Server.findOne({ _id: serverId }).populate('accounts');
      const salt = await bcrypt.genSalt(10);
      const passwordHashed = await bcrypt.hash(body.password, salt);
      const accountWithPasswordHashed = {
        ...body,
        password: passwordHashed,
        server: server._id,
      };
      const account = await Account.create(accountWithPasswordHashed);
      server.accounts.push(account);
      await server.save();
      return response.json({ 
        message: 'Conta criada com sucesso',
        account: {
          ...account.toJSON(),
          password: undefined,
        },
      });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
