import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { Task } from 'src/entities/task.entity';
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.taskService.findAll()
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.create(createTaskDto)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.taskService.update(+id, updateTaskDto)
  }
}
