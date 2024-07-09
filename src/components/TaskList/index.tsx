import { Trash } from '@phosphor-icons/react'
import { ITask } from '../../App'

interface ITaskList {
  tasks: ITask[]
  onMakeCompleteTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function TaskList({
  tasks,
  onMakeCompleteTask,
  onDeleteTask,
}: ITaskList) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <div style={{ border: '2px solid gray' }} key={task.id}>
            <p
              style={{
                textDecoration:
                  task.status === 'COMPLETED' ? 'line-through' : '',
              }}
            >
              {task.title}
            </p>
            <button onClick={() => onMakeCompleteTask(task.id)}>
              Concluir task
            </button>
            <button onClick={() => onDeleteTask(task.id)}>
              <Trash />
            </button>
          </div>
        )
      })}
    </>
  )
}
