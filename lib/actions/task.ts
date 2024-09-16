'use server'
import prisma from '@/lib/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const getAllTasksAction = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const createTaskAction = async (formData: FormData) => {
  const content = formData.get('content') as string
  await prisma.task.create({
    data: {
      content,
    },
  })
  revalidatePath('/tasks')
}

export const deleteTaskAction = async (formData: FormData) => {
  const id = formData.get('id') as string
  await prisma.task.delete({
    where: {
      id,
    },
  })
  revalidatePath('/tasks')
}

export const getTask = async (id: string) =>
  await prisma.task.findUnique({ where: { id } })

export const updateTaskAction = async (formData: FormData) => {
  const id = formData.get('id') as string
  const content = formData.get('content') as string
  const completed = formData.get('completed') === 'on'

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed,
    },
  })
  redirect('/tasks')
}
