import { deleteTaskAction } from '@/lib/actions/task'

export default function DeleteTaskForm({ taskId }: { taskId: string }) {
  return (
    <form action={deleteTaskAction}>
      <input name="id" type="hidden" value={taskId} />
      <button className="btn btn-xs btn-error">DELETE</button>
    </form>
  )
}
