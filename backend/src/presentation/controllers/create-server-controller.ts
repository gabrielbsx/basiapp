import { Request, Response } from 'express';
import Server from '../../infra/models/server';
import User from '../../infra/models/user';
import Controller from '../../domain/controllers/controller';
import { Validator } from '../../validation';

export default class CreateServerController implements Controller {
  createServerValidator: Validator;
  constructor(createServerValidator: Validator) {
    this.createServerValidator = createServerValidator;
  }
  async handle(request: Request, response: Response) {
    try {
      const { body } = request;
      const errors = await this.createServerValidator.validate(body, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const user = await User.findOne({ _id: request.user.id }).populate('servers');
      const server = await Server.create({
        ...body,
        owner: user._id,
      });
      user.servers.push(server);
      await user.save();
      return response.json({
        message: 'Servidor criado com sucesso',
        server: server.toJSON(),
      });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
