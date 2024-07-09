import { Trash } from '@phosphor-icons/react'
import styles from './index.module.css'
import clipboardImg from '../../assets/Clipboard.png'
import { ITask } from '../../App'
import checkImg from '../../assets/check.png'
import checkedImg from '../../assets/checked.png'

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
  const qtyTasks = tasks.length

  const qtyTasksCompleted = tasks.filter(
    (task) => task.status === 'COMPLETED'
  ).length

  return (
    <div className={styles.wrapper}>
      <div className={styles.tasksSumBox}>
        <p>
          Tarefas criadas
          <span className={styles.tasksSumNumber}>{qtyTasks}</span>
        </p>

        <p>
          Concluídas
          <span className={styles.tasksSumNumber}>
            {qtyTasksCompleted} de {qtyTasks}
          </span>
        </p>
      </div>
      {tasks.map((task) => {
        return (
          <div className={styles.boxTask} key={task.id}>
            <button
              className={styles.boxCompleteTask}
              onClick={() => onMakeCompleteTask(task.id)}
            >
              {task.status === 'COMPLETED' ? (
                <img src={checkedImg} alt='Complete task' />
              ) : (
                <img src={checkImg} alt='Task completed' />
              )}
            </button>
            <p
              className={
                task.status === 'COMPLETED'
                  ? styles.taskCompleted
                  : styles.notCompleted
              }
            >
              {task.title}
            </p>

            <button
              className={styles.buttonTrash}
              onClick={() => onDeleteTask(task.id)}
            >
              <Trash />
            </button>
          </div>
        )
      })}
      {tasks.length === 0 && (
        <div className={styles.emptyTasksBox}>
          <img
            className={styles.clipboardImg}
            src={clipboardImg}
            alt='Clipboard'
          />
          <p className={styles.paragraph}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </p>
          <p className={styles.paragraph}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </div>
  )
}
