import { SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { IFormInput, ITask } from '../../App'

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

  const onSubmit: SubmitHandler<IFormInput> = ({ newTask }: IFormInput) => {
    const createdTask: ITask = {
      id: uuid(),
      title: newTask,
      status: 'IN_PROGRESS',
    }

    onIncludeTask(createdTask)

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.newTask && <span>This field is required</span>}
      <input {...register('newTask', { required: true })} />
      <button type='submit'>Incluir tarefa</button>
    </form>
  )
}
