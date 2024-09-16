import Link from 'next/link'
import DeleteTaskForm from './DeleteTaskForm'
import { getAllTasksAction } from '@/lib/actions/task'

export default async function TasksList() {
  const tasks = await getAllTasksAction()

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show</h2>
  }

  return (
    <section className="mt-8">
      {tasks.map((task) => (
        <article
          key={task.id}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
        >
          <h2
            className={`text-lg capitalize ${
              task.completed ? 'line-through' : ''
            }`}
          >
            {task.content}
          </h2>
          <div className="flex gap-6 items-center">
            <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs">
              EDIT
            </Link>
            <DeleteTaskForm taskId={task.id} />
          </div>
        </article>
      ))}
    </section>
  )
}
