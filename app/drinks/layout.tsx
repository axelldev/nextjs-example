export default function DrinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-5xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutorial</code>
        </pre>
      </div>
      {children}
    </div>
  )
}
