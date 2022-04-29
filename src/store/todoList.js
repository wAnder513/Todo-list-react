import { makeAutoObservable } from 'mobx'

class Todo {
  todos = [
    {
      id: '0',
      title: 'Task 1',
      task: 'Do laundry 1',
      isCompleted: false,
    },
    {
      id: '1',
      title: 'Task 2',
      task: 'Do laundry 2',
      isCompleted: false,
    },
    {
      id: '2',
      title: 'Task 2',
      task: 'Do laundry 3',
      isCompleted: false,
    },
  ]
  visableTodos = [...this.todos]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo)
    this.visableTodos = [...this.todos]
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this.visableTodos = [...this.todos]
  }

  completeTodo(id) {
    this.todos = [...this.todos].map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
    this.visableTodos = [...this.todos]
  }

  sortTodo(e) {
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
