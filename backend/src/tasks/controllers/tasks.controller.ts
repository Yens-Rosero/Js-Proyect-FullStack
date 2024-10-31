import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { TaskService } from '../services/tasks.service';
import { TaskDto } from '../dtos/task.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard) // Protegemos todas las rutas
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDto: TaskDto) {
    return this.taskService.create(taskDto);
  }

  @Get('user/:id')
  async findAll(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findAll(id);
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() taskDto: TaskDto) {
    return this.taskService.update(id, taskDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.delete(id);
  }
}
