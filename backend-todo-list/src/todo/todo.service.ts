import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  create(title: string, description: string): Promise<Todo> {
    const todo = new Todo();
    todo.title = title;
    todo.description = description;
    return this.todoRepository.save(todo);
  }

  async update(id: number, done: boolean): Promise<Todo> {
    const todoToUpdate = await this.todoRepository.findOne({
      where: { id: id },
    });
    if (todoToUpdate) {
      todoToUpdate.done = done;
      return this.todoRepository.save(todoToUpdate);
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
