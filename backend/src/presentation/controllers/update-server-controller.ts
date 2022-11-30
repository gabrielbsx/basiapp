import { Request, Response } from 'express';
import Controller from '../../domain/controllers/controller';
import Server from '../../infra/models/server';
import User from '../../infra/models/user';
import { Validator } from '../../validation';

export default class UpdateServerController implements Controller {
  updateServerValidator: Validator;
  constructor(updateServerValidator: Validator) {
    this.updateServerValidator = updateServerValidator;
  }
  async handle(request: Request, response: Response) {
    try {
      const { body, params: { serverId } } = request;
      const errors = await this.updateServerValidator.validate({ ...body, serverId }, request);
      if (errors) {
        return response.status(400).json({ errors });
      }
      const server = await Server.findOne({ _id: serverId }).select('+owner');
      const user = await User.findOne({ _id: request.user.id });
      if (server.owner !== user.id && user.role !== 'admin') {
        return response.status(401).json({
          errors: [{
            message: 'Você não tem permissão para atualizar este servidor',
            field: 'server',
          }],
        });
      }
      const updatedServer = await Server.findOneAndUpdate({ _id: serverId }, {
        $set: {
          ...body,
        },
      }, { new: true });
      return response.json({
        message: 'Servidor atualizado com sucesso',
        server: {
          ...updatedServer.toJSON(),
        },
      });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
