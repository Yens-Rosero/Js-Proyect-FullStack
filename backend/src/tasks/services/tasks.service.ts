import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from '../dtos/task.dto';

@Injectable()
export class TaskService {
  private tasks = []; // Tareas en array para persistencia de datos en local

  create(taskDto: TaskDto): TaskDto {
    const newTask = { id: Date.now(), ...taskDto }; // Asignamos el userId desde taskDto
    this.tasks.push(newTask);
    return newTask;
  }

  findAll(userId: number): TaskDto[] {
    const hola = this.tasks.filter((task) => task.userId === userId);
    console.log(hola);
    return hola;
  }

  findOne(id: number): TaskDto {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  update(id: number, taskDto: TaskDto): TaskDto {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...taskDto };
    return this.tasks[taskIndex];
  }

  delete(id: number): TaskDto {
    const taskIndex = this.tasks.findIndex((t) => t.id === id); // Busca la tarea por ID
    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    const deletedTask = this.tasks.splice(taskIndex, 1);
    return deletedTask[0];
  }
}
