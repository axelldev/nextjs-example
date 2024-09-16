'use client'
import { useRef } from 'react'
import { createTask } from '@/lib/actions/task'
import { useFormStatus, useFormState } from 'react-dom'

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
      <p className="mt-4">{state.message}</p>
    </div>
  )
}
