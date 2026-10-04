import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-text-800 dark:text-text-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-text-600 dark:text-text-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
