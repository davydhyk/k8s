import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('log')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data.text);
  }
}
