import { Request, Response } from 'express';
import Controller from '../../domain/controllers/controller';

export default class UpdateServerController implements Controller {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      return response.status(200).json({
        message: 'Server updated successfully',
      });
    } catch (error: any) {
      return response.status(500).json({ message: error.message });
    }
  }
}
