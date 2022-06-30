import { Controller, Get, Header, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('MICROSERVICE') private readonly client: ClientProxy) { }
  
  @Get('/health')
  health() {
    this.client.send('log', {text: 'Request GET /api/health'}).subscribe();
    return { ok: true };
  }
}
