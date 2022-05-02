import { makeAutoObservable } from 'mobx'
import {AddTodoTask} from '../types'

class Todo  {
  todos: Array<AddTodoTask> = []
  visableTodos: Array<AddTodoTask> = []

  constructor() {
    makeAutoObservable(this)
  }
  
  addTodo(todo: AddTodoTask) {
    this.todos.push(todo)
    this.visableTodos = this.todos
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this.visableTodos = this.todos
  }

  completeTodo(id: string) {
    this.todos = [...this.todos].map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
    this.visableTodos = this.todos
  }

  sortTodo(e: string) {
    switch (e) {
      case 'All':
        this.visableTodos = this.todos
        break
      case 'Completed':
        this.visableTodos = this.todos.filter((todo) => todo.isCompleted)
        break
      case 'Uncompleted':
        this.visableTodos = this.todos.filter((todo) => !todo.isCompleted)
        break
      default:
        break
    }
  }
}

export default new Todo()