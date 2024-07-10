import { SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { IFormInput, ITask } from '../../App'
import styles from './index.module.css'
import { PlusCircle } from '@phosphor-icons/react'

interface IFormIncludeTask {
  onIncludeTask: (task: ITask) => void
}

export function FormIncludeTask({ onIncludeTask }: IFormIncludeTask) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>()

  const handleIncludeTask: SubmitHandler<IFormInput> = ({
    newTask,
  }: IFormInput) => {
    const createdTask: ITask = {
      id: uuid(),
      title: newTask,
      status: 'IN_PROGRESS',
    }

    onIncludeTask(createdTask)

    reset()
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(handleIncludeTask)}>
        <input
          className={styles.input}
          {...register('newTask', { required: true })}
          placeholder='Adicione uma nova tarefa'
        />
        <button className={styles.button} type='submit'>
          Criar <PlusCircle className={styles.icoPlus} size={25} />
        </button>
      </form>
      {errors.newTask && (
        <span className={styles.errorText}>This field is required</span>
      )}
    </div>
  )
}
