import * as Joi from 'joi';
import { ServerNameUnique, Validator } from '../../validation';
import { serverMessages } from '../../validation/messages';

export default class CreateServerValidator extends Validator {
  messages = serverMessages;
  validationSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().required().min(3)
      .external(ServerNameUnique)
      .messages(this.messages.name),
    description: Joi.string().required().min(3)
      .messages(this.messages.description),
  });
}
