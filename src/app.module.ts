import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
