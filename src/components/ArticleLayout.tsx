'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { ArrowLeftIcon } from './SVGIcons'

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md shadow-text-800/5 ring-1 ring-text-900/5 transition dark:border dark:border-text-700/50 dark:bg-text-800 dark:ring-0 dark:ring-white/10 dark:hover:border-text-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-text-500 transition group-hover:stroke-text-700 dark:stroke-text-500 dark:group-hover:stroke-text-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-800 dark:text-text-100 sm:text-5xl">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-text-400 dark:text-text-500"
              >
                <span className="h-4 w-0.5 rounded-xl bg-text-200 dark:bg-text-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
