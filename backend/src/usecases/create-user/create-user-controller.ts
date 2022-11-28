import { Request, Response } from 'express';
import User from '../../models/user';
import { CreateUserValidator } from './create-user-validator';
import * as bcrypt from 'bcrypt';

export default class CreateUserController {
  async handle (request: Request, response: Response) {
    try {
      const { body } = request;
      const errors = await CreateUserValidator.validate(body);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const { password, ...userWithoutPassword } = body;
      const salt = await bcrypt.genSalt(10);
      const passwordHashed = await bcrypt.hash(password, salt);
      const user = await User.create({
        password: passwordHashed,
        ...userWithoutPassword,
      });
      return response.status(201).json({
        user: {
          id: user._id,
          ...userWithoutPassword,
        },
      });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
