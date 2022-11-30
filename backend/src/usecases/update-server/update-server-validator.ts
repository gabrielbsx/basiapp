import * as Joi from 'joi';
import { ServerNameUnique } from '../../validators';
import { serverMessages } from '../../validators/messages';
import { Validator } from '../../validators';
import { ServerIdExists } from '../../validators/server-id-exists';

export class UpdateServerValidator extends Validator {
  static messages = serverMessages;
  static validationSchema: Joi.ObjectSchema = Joi.object({
    serverId: Joi.string().required()
      .external(ServerIdExists)
      .messages(UpdateServerValidator.messages.serverId),
    name: Joi.string().optional().min(3)
      .external(ServerNameUnique)
      .messages(UpdateServerValidator.messages.name),
    description: Joi.string().optional().min(3)
      .messages(UpdateServerValidator.messages.description),
  });
} 
