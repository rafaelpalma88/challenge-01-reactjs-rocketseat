import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import './App.css'

import { Trash } from '@phosphor-icons/react'
import { FormIncludeTask } from './components/FormIncludeTask'
import { TaskList } from './components/TaskList'

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
      <h2>To do List</h2>

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
