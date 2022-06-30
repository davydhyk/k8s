import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { TodoConstroller } from './todo.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'MICROSERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL],
          queue: 'notifications',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  providers: [PrismaService],
  controllers: [AppController, TodoConstroller]
})
export class AppModule {}
