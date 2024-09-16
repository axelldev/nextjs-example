import UpdateTaskForm from '@/components/UpdateTaskForm'
import { getTask } from '@/lib/actions/task'
import Link from 'next/link'

export default async function TaskDetail({
  params,
}: {
  params: { id: string }
}) {
  const task = await getTask(params.id)

  if (!task) {
    return <p>Not found task</p>
  }

  return (
    <div className="max-w-lg p-8 border border-base-300 rounded-lg">
      <Link href="/tasks" className="link link-primary">
        BACK TO TASKS
      </Link>
      <UpdateTaskForm task={task} />
    </div>
  )
}
