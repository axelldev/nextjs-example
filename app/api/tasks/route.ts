import prisma from '@/lib/utils/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const tasks = await prisma.task.findMany()
  return NextResponse.json({
    tasks,
  })
}

export async function POST(request: Request) {
  const data = await request.json()
  if (!data.content) {
    return NextResponse.json({ error: 'Content is required' }, { status: 400 })
  }

  const task = await prisma.task.create({
    data: {
      content: data.content,
    },
  })

  return NextResponse.json(task)
}
