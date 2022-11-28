import * as express from 'express';
import * as cors from 'cors';
import { Express } from 'express';
import routes from './routes';
import env from './config/env';

class Server {
  public server: Express;

  constructor () {
    this.server = express();
  }

  middlewares () {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.static('public')); 
  }

  start () {
    this.middlewares();
    this.server.use(routes);
    this.server.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
    });
  }
}

new Server().start();
