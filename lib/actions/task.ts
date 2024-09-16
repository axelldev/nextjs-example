'use server'
import prisma from '@/lib/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { waitFor } from '../utils/utils'

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const createTask = async (
  _: {
    message: string | null
  },
  formData: FormData
) => {
  const schema = z.object({
    content: z.string().min(4),
  })

  const newTask = schema.parse({
    content: formData.get('content'),
  })

  await waitFor(200)

  try {
    await prisma.task.create({
      data: newTask,
    })
    revalidatePath('/tasks')
    return { message: 'success' }
  } catch (error) {
    return { message: 'error' }
  }
}

export const deleteTask = async (
  _: { message: string | null },
  formData: FormData
) => {
  try {
    const id = formData.get('id') as string
    await waitFor(500)
    await prisma.task.delete({
      where: {
        id,
      },
    })
    revalidatePath('/tasks')
    return { message: 'Task deleted!' }
  } catch (error) {
    return { message: 'Failed to delete task' }
  }
}

export const getTask = async (id: string) =>
  await prisma.task.findUnique({ where: { id } })

export const updateTask = async (
  _: { message: string },
  formData: FormData
) => {
  const id = formData.get('id')
  const content = formData.get('content')
  const completed = formData.get('completed') === 'on'

  try {
    const schema = z.object({
      id: z.string(),
      content: z.string().min(4),
      completed: z.boolean(),
    })

    const data = schema.parse({
      id,
      content,
      completed,
    })

    await waitFor(200)
    await prisma.task.update({
      where: {
        id: data.id,
      },
      data,
    })
  } catch (error) {
    console.log(error)
    return { message: 'Failed to update task' }
  }

  revalidatePath('/tasks')
  redirect('/tasks')
}
