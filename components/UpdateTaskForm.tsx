'use client'
import { updateTask } from '@/lib/actions/task'
import { useFormState, useFormStatus } from 'react-dom'
import { Task } from 'prisma/prisma-client'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <div className="flex gap-4 mt-6">
      <button type="submit" className="btn btn-primary flex-grow btn-sm">
        <span>SAVE</span>
        {pending && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
      </button>
    </div>
  )
}

export default function UpdateTaskForm({ task }: { task: Task }) {
  const [state, formAction] = useFormState(updateTask, { message: '' })

  return (
    <div>
      <form action={formAction} className="mt-4">
        <input type="hidden" name="id" value={task.id} />
        <input
          type="text"
          name="content"
          className="input input-bordered w-full"
          defaultValue={task.content}
        />
        <div className="form-control mt-4">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">COMPLETED</span>
            <input
              id="completed"
              type="checkbox"
              name="completed"
              defaultChecked={task.completed}
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
        </div>
        <SubmitButton />
      </form>
      {state.message && <p className="mt-4">{state.message}</p>}
    </div>
  )
}
