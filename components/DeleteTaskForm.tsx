'use client'
import { deleteTask } from '@/lib/actions/task'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  message: '',
}

function DeleteButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className="btn btn-xs btn-error" disabled={pending}>
      <span>DELETE</span>
      {pending && <span className="loading loading-spinner loading-xs"></span>}
    </button>
  )
}

export default function DeleteTaskForm({ taskId }: { taskId: string }) {
  const [, formAction] = useFormState(deleteTask, initialState)

  return (
    <form action={formAction}>
      <input name="id" type="hidden" value={taskId} />
      <DeleteButton />
    </form>
  )
}
