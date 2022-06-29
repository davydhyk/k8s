import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { TodoConstroller } from './todo.controller';

@Module({
  imports: [],
  providers: [PrismaService],
  controllers: [AppController, TodoConstroller]
})
export class AppModule {}
