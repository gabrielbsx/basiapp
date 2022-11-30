import { Request, Response } from 'express';
import Controller from '../../domain/controllers/controller';
import { Validator } from '../../validation';

export default class CreatePostController implements Controller {
  createPostController: Validator;
  constructor(createPostController: Validator) {
    this.createPostController = createPostController;
  }
  async handle(request: Request, response: Response) {
    return response.json({ message: 'CreatePostController' });
  }
}
