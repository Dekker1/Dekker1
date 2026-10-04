import { type Metadata } from 'next'
import { Atkinson_Hyperlegible, JetBrains_Mono } from 'next/font/google'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Jip J. Dekker',
    default: 'Jip J. Dekker - Optimisation Expert & Computer Scientist',
  },
  description:
    'I’m Jip, a researcher at the OPTIMA ARC research centre and Monash University, where we aim to make complex decisions easier through decision support and data insights. We design state-of-the-art optimization techniques, such as the MiniZinc modelling language, ready to be used in industry.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

const atkinson = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
const jetbrains = JetBrains_Mono({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={clsx(
          'flex h-full bg-text-50 dark:bg-black',
          atkinson.className,
          jetbrains.variable,
        )}
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
