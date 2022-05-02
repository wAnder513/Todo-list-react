import { ChangeEvent, FormEvent } from "react"

export type AddTodoTask = {
  id: string
  task: string
  isCompleted: boolean
}

export type TodoProps = {
  todo: AddTodoTask
  handleCheckTodo: (id: string) => void
  handleDeleteTodo: (id: string) => void
}

export type AddTodoProps = {
  task: string
  handleSubmitTodo: (e: FormEvent) => void
  handleChange: (e: ChangeEvent) => void
}
