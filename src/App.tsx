import { useState } from 'react'

import { FormIncludeTask } from './components/FormIncludeTask'
import { TaskList } from './components/TaskList'

import styles from './App.module.css'

import logo from './assets/Logo.png'

export interface ITask {
  id: string
  title: string
  status: 'IN_PROGRESS' | 'COMPLETED'
}

export interface IFormInput {
  newTask: string
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function handleAddTask(createdTask: ITask) {
    setTasks([...tasks, createdTask])
  }

  function handleDeleteTask(id: string) {
    const newArrayTasks = tasks.filter((task) => task.id !== id)
    setTasks(newArrayTasks)
  }

  function handleMakeCompleteTask(id: string) {
    const newArrayTasks: ITask[] = tasks.map((task) =>
      task.id === id ? { ...task, status: 'COMPLETED' } : task
    )
    setTasks(newArrayTasks)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src={logo} alt='Todo' />
        </div>
      </header>
      <FormIncludeTask onIncludeTask={handleAddTask} />

      <TaskList
        onDeleteTask={handleDeleteTask}
        onMakeCompleteTask={handleMakeCompleteTask}
        tasks={tasks}
      />
    </>
  )
}

export default App
