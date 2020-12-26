import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { Task } from 'src/entities/task.entity';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find()
  }

  async create(task: CreateTaskDto): Promise<InsertResult> {
    return await this.taskRepository.insert(task)
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepository.update(id, updateTaskDto)
  }
}
