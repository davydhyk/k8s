import { PrismaService } from './prisma.service'
import { Todo, Prisma } from '@prisma/client'
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

@Controller('todos')
export class TodoConstroller {
  constructor(private readonly prismaService: PrismaService) { }

  @Get(':userid')
  async getByUserId(
    @Param('userid') userid: string
  ): Promise<Todo[]> {
    return this.prismaService.todo.findMany({
      where: { userid }
    });
  }

  @Post(':userid')
  async create(
    @Param('userid') userid: string,
    @Body('text') text: string
  ): Promise<Todo> {
    return this.prismaService.todo.create({
      data: { userid, text }
    });
  }

  @Patch(':userid/:uid')
  async patch(
    @Param('userid') userid: string,
    @Param('uid') uid: string,
    @Body('text') text: string,
    @Body('done') done: boolean
  ): Promise<Todo> {
    const data: {text?: string, done?: boolean} = {};
    if (text !== undefined) data.text = text;
    if (done !== undefined) data.done = done;
    return this.prismaService.todo.update({
      data,
      where: { uid }
    });
  }

  @Delete(':userid/:uid')
  async declare(
    @Param('userid') userid: string,
    @Param('uid') uid: string
  ): Promise<Todo> {
    return this.prismaService.todo.delete({
      where: { uid }
    });
  }
}