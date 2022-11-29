import { Request, Response } from 'express';
import Account from '../../models/account';
import * as bcrypt from 'bcrypt';
import { AuthAccountValidator } from './auth-account-validator';

export default class AuthAccountController {
  async handle (request: Request, response: Response) {
    try {
      const { body } = request;
      const errors = await AuthAccountValidator.validate(body, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const { password, ...accountWithoutPassword } = body;
      const salt = await bcrypt.genSalt(10);
      const passwordHashed = await bcrypt.hash(password, salt);
      const user = await Account.create({
        password: passwordHashed,
        ...accountWithoutPassword,
      });
      return response.status(201).json({
        user: user.toJSON(),
      });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
