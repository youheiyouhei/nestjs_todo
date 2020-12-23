import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
