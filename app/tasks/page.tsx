import TaskForm from '@/components/TaskForm'
import TasksList from '@/components/TasksList'
import prisma from '@/lib/utils/db'

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'First task 1',
    },
  })
}

export default async function TasksPage() {
  return (
    <div className="max-w-lg">
      <h1 className="text-2xl">Tasks</h1>
      <TaskForm />
      <TasksList />
    </div>
  )
}
