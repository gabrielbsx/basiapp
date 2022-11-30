import { Request, Response } from 'express';
import Controller from '../../domain/controllers/controller';
import Server from '../../models/server';
import User from '../../models/user';
import { UpdateServerValidator } from './update-server-validator';

export default class UpdateServerController implements Controller {
  async handle(request: Request, response: Response) {
    try {
      const { body, params: { serverId } } = request;
      const errors = await UpdateServerValidator.validate({ ...body, serverId }, request);
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
