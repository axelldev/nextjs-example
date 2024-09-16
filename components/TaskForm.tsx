'use client'
import { useEffect, useRef } from 'react'
import { createTask } from '@/lib/actions/task'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      <span>CREATE TASK</span>
      {pending && <span className="loading loading-spinner loading-sm"></span>}
    </button>
  )
}

const initialState = {
  message: '',
}

export default function TaskForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction] = useFormState(createTask, initialState)

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('Failed to create task')
      return
    }
    if (state.message === 'success') {
      toast.success('Task created successfuly')
    }
  }, [state.message])

  return (
    <div>
      <form
        ref={formRef}
        className="mt-8"
        action={async (formData) => {
          formAction(formData)
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
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}
