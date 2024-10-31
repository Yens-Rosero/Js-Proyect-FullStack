import { Module } from '@nestjs/common';
import { TaskService } from './services/tasks.service';
import { TaskController } from './controllers/tasks.controller';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
