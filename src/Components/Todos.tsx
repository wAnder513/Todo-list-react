import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { observer } from 'mobx-react-lite'
import styles from '../assets/styles/Todos.module.scss'

import { Row } from './Row'
import { AddTodo } from './AddTodo'
import {AddTodoTask} from '../types'
import todo from '../store/todoList'

export const Todos = observer(() => {
  const [task, setTask] = useState('')
  const [sort, setSort] = useState('All')

  const hasTodos = todo.visableTodos.length > 0
  const options = ['All', 'Completed','Uncompleted']

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    setTask(value)
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()
    const newTodo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    }

    todo.addTodo(newTodo)
    todo.sortTodo(sort)
    setTask('')
  }

  const removeTodo = (id: string) => {
    todo.removeTodo(id)
    todo.sortTodo(sort)
  }

  const completeTodo = (id: string) => {
    todo.completeTodo(id)
    todo.sortTodo(sort)
  }

  const sortTodo = (e: string) => {
    todo.sortTodo(e)
    setSort(e)
  }

  return (
    <section className={styles['todo-wrapper']}>
      <AddTodo
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        task={task}
      />

      <select
        className={styles['todo-select']}
        value={sort}
        onChange={(event) => sortTodo(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      
      {todo.visableTodos.map((t: AddTodoTask) => (
        <Row
          key={t.id}
          todo={t}
          handleDeleteTodo={() => removeTodo(t.id)}
          handleCheckTodo={() => completeTodo(t.id)}
        />
      ))}
      {!hasTodos && (
        <p className={styles['todo-description']}>Please add a todo!</p>
      )}
    </section>
  )
})
