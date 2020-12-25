import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksService],
  exports: [TypeOrmModule],
})
export class TasksModule {}
