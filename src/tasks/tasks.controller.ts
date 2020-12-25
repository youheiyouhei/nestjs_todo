import { Controller, Get } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.taskService.findAll()
  }
}
