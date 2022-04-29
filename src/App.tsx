import { Todos } from './Components/Todos'
import styles from './assets/styles/App.module.scss'

function App() {
  return (
    <div className={styles['app']}>
      <Todos />
    </div>
  )
}

export default App
