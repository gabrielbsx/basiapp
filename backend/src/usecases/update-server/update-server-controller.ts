import { Request, Response } from 'express';

export default class UpdateServerController {
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
