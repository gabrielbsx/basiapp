import * as Joi from 'joi';
import { ServerNameUnique, Validator } from '../../validators';
import { serverMessages } from '../../validators/messages';

export default class CreateServerValidator extends Validator {
  static messages = serverMessages;
  static validationSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().required().min(3)
      .external(ServerNameUnique)
      .messages(CreateServerValidator.messages.name),
    description: Joi.string().required().min(3)
      .messages(CreateServerValidator.messages.description),
  });
}
