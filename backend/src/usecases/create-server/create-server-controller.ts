import { Request, Response } from 'express';
import CreateServerValidator from './create-server-validator';
import Server from '../../models/server';
import { dataMongo } from '../../helpers';
import User from '../../models/user';

export default class CreateServerController {
  async handle(request: Request, response: Response) {
    try {
      const { body } = request;
      const errors = await CreateServerValidator.validate(body, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const user = await User.findOne({ _id: request.user.id });
      const server = await Server.create({
        ...body,
        owner: user,
      });
      return response.json({
        server: dataMongo(server),
      });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
