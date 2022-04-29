import { AddTodoProps } from '../types'
import { ReactComponent as PlusIcon } from '../assets/svg/plus.svg'
import styles from '../assets/styles/AddTodo.module.scss'

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form className={styles['add-todo-form']} onSubmit={handleSubmitTodo}>
    <input
      type="text"
      name="task"
      value={task}
      className={styles['add-todo-input']}
      onChange={handleChange}
    />
    <button className={styles['add-todo-button']} type="submit" aria-label="Add todo">
      <PlusIcon />
    </button>
  </form>
)
