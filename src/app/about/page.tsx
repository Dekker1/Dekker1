import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  MastodonIcon,
  ORCIDIcon,
  ResearchGateIcon,
} from '@/components/SVGIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-text-800 transition hover:text-accent-800 dark:text-text-200 dark:hover:text-accent-400"
      >
        <Icon className="h-6 w-6 flex-none fill-text-500 transition group-hover:fill-accent-800 dark:group-hover:" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m dr. Jip J. Dekker, a problem solver using optimization technologies.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-text-100 object-cover dark:bg-text-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-text-800 dark:text-text-100 sm:text-5xl">
            I’m dr. Jip J. Dekker, a problem solver using optimization
            technologies.
          </h1>
          <div className="mt-6 space-y-7 text-base text-text-600 dark:text-text-400">
            <p>
              I’m a computer scientist at Monash University specializing in
              optimization and devoted to developing cutting-edge tools and
              modelling languages that simplify the process of solving complex
              problems. With a passion for advancing the field, I contribute to
              the optimization field, enhancing its efficiency, and facilitating
              its practical application.
            </p>
            <p>
              Building from a foundation in constraint programming, I have
              gained experience in Boolean satisfiability, mathematical
              modelling, local search, various hybrid method. With the wide
              range of optimization technologies at my fingertips, it enables me
              to approach optimization challenges from many angles. This allows
              me to facilitate the creation of innovative software solutions
              that streamline the formulation, solution, and analysis of
              optimization problems.
            </p>
            <p>
              At the heart of my work is a commitment to making optimization
              more accessible and user-friendly. By developing intuitive tools
              and modelling languages, I want to empower researchers,
              practitioners, and anyone willing to learn to effectively address
              complex optimization challenges across a wide range of domains. I
              hope that my work not only enhances the effectiveness of
              optimization technologies, but also fosters innovation and
              improvements in other industries.
            </p>
            <p>
              When I’m not solving optimization problems, I love bird watching,
              music, and cycling. The beauty of the avian world has captivated
              me ever since I moved to Australia. Music brings me solace. I’m
              always looking for new songs with interesting melodies or striking
              lyrics. Cycling always gives me a sense of freedom. You find the
              most wonderful places, if you stray from the beaten track even
              slightly. These pursuits bring me joy and inspiration.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/Dekker1" icon={GitHubIcon}>
              Follow me on GitHub
            </SocialLink>
            <SocialLink
              href="https://hachyderm.io/@Dekker1"
              icon={MastodonIcon}
              className="mt-4"
            >
              Follow me on Mastodon
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/dekker1/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect with me on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://orcid.org/0000-0002-0053-6724"
              icon={ORCIDIcon}
              className="mt-4"
            >
              Find me on ORCID
            </SocialLink>
            <SocialLink
              href="https://www.researchgate.net/profile/Jip-Dekker-2"
              icon={ResearchGateIcon}
              className="mt-4"
            >
              Follow me on ResearchGate
            </SocialLink>
            <SocialLink
              href="mailto:jip.dekker@monash.edu"
              icon={MailIcon}
              className="mt-8 border-t border-text-100 pt-8 dark:border-text-700/40"
            >
              jip.dekker@monash.edu
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
