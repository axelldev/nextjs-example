import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      <h3>About page</h3>
      <Link href="/" className="text-blue-500 underline">
        Home
      </Link>
    </div>
  )
}
