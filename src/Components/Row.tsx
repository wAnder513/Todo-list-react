import { TodoProps } from '../types'
import styles from '../assets/styles/Row.module.scss'

export const Row = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
  handleDeleteTodo,
}: TodoProps) => (
  <div
    className={styles['task-container']}
    style={{
      backgroundColor: isCompleted ? 'gray' : 'rgb(0, 169, 82)',
    }}
  >
    <p
      className={styles['task-text']}
      style={{
        color: isCompleted ? 'white' : 'black',
        textDecoration: isCompleted ? 'line-through' : 'none',
      }}
    >
      {task}
    </p>

    <div className={styles['task-buttons']}>
      <button
        aria-label="Delete a todo"
        className={styles['task-close']}
        onClick={() => handleDeleteTodo(id)}
      >
        X
      </button>

      <input
        style={{ width: '30px', height: '30px' }}
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
      />
    </div>
  </div>
)
