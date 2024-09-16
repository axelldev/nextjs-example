'use client'
import { useRef } from 'react'
import { createTaskAction } from '@/lib/actions/task'

export default function TaskForm() {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={formRef}
      className="mt-8"
      action={async (formData) => {
        await createTaskAction(formData)
        formRef.current?.reset()
      }}
    >
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here..."
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          CREATE TASK
        </button>
      </div>
    </form>
  )
}
