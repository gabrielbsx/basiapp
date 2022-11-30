import * as Joi from 'joi';
import { ServerNameUnique } from '../../validation';
import { serverMessages } from '../../validation/messages';
import { Validator } from '../../validation';
import { ServerIdExists } from '../../validation/validators/server-id-exists';

export class UpdateServerValidator extends Validator {
  messages = serverMessages;
  validationSchema: Joi.ObjectSchema = Joi.object({
    serverId: Joi.string().required()
      .external(ServerIdExists)
      .messages(this.messages.serverId),
    name: Joi.string().optional().min(3)
      .external(ServerNameUnique)
      .messages(this.messages.name),
    description: Joi.string().optional().min(3)
      .messages(this.messages.description),
  });
} 
