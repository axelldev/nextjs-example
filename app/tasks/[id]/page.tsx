import { getTask, updateTaskAction } from '@/lib/actions/task'
import Link from 'next/link'

export default async function TaskDetail({
  params,
}: {
  params: { id: string }
}) {
  const task = await getTask(params.id)

  if (!task) {
    return (
      <div>
        <h1>Task not found</h1>
      </div>
    )
  }

  return (
    <div className="max-w-lg p-8 border border-base-300 rounded-lg">
      <Link href="/tasks" className="link link-primary">
        BACK TO TASKS
      </Link>
      <form action={updateTaskAction} className="mt-4">
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
        <div className="flex gap-4 mt-6">
          <button type="submit" className="btn btn-primary flex-grow btn-sm">
            SAVE
          </button>
        </div>
      </form>
    </div>
  )
}
