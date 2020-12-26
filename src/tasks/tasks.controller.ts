import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
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
  async create(@Body() createTaskDto: CreateTaskDTO) {
    return await this.taskService.create(createTaskDto)
  }
}
