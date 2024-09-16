import TaskForm from '@/components/TaskForm'
import TasksList from '@/components/TasksList'

export default async function TasksPage() {
  return (
    <div className="max-w-lg">
      <h1 className="text-2xl">Tasks</h1>
      <TaskForm />
      <TasksList />
    </div>
  )
}
