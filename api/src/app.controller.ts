import { Controller, Get, Header } from '@nestjs/common';

@Controller()
export class AppController {
  @Header('Content-Type', 'application/json')
  @Get('/health')
  health() {
    return { ok: true };
  }
}
