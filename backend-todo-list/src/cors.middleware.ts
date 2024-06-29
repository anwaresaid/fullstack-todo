import { Injectable, NestMiddleware } from '@nestjs/common';
import * as cors from 'cors';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: Function) {
    const options = {
      origin: ['http://localhost:3001'], // Replace with allowed origins
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    };
    cors(options)(req, res, next);
  }
}
