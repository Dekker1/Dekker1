import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  BriefcaseIcon,
  GitHubIcon,
  LinkedInIcon,
  MastodonIcon,
  ORCIDIcon,
  ResearchGateIcon,
} from '@/components/SVGIcons'
import logoMonash from '@/images/logos/monash_shield.svg'
import logoOptima from '@/images/logos/optima_square.svg'
import logoRadboud from '@/images/logos/radboud_shield.svg'
import logoUppsala from '@/images/logos/uppsala.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-4.jpg'
import image3 from '@/images/photos/image-2.jpg'
import image4 from '@/images/photos/image-3.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-text-500 transition group-hover:fill-text-600 dark:fill-text-400 dark:group-hover:fill-text-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-xl shadow-md shadow-text-800/5 ring-1 ring-text-900/5 dark:border dark:border-text-700/50 dark:bg-text-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-text-900 dark:text-text-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-text-500 dark:text-text-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-text-400 dark:text-text-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'OPTIMA & Monash University',
      title: 'Research Fellow',
      logo: logoOptima,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Monash University',
      title: 'PhD in Optimization',
      logo: logoMonash,
      start: '2017',
      end: '2021',
    },
    {
      company: 'Uppsala University',
      title: 'MSc in Concurrency and Parallelism',
      logo: logoUppsala,
      start: '2014',
      end: '2016',
    },
    {
      company: 'Radboud University',
      title: 'BSc in Computing Science',
      logo: logoRadboud,
      start: '2011',
      end: '2014',
    },
  ]

  return (
    <div className="rounded-2xl border border-text-100 p-6 dark:border-text-700/40">
      <h2 className="flex text-sm font-semibold text-text-900 dark:text-text-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Career Overview</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      {/* 
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-text-400 transition group-active:stroke-text-600 dark:group-hover:stroke-text-50 dark:group-active:stroke-text-50" />
      </Button> 
      */}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-text-100 dark:bg-text-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-text-800 dark:text-text-100 sm:text-5xl">
            Optimisation Expert & Programming Language Designer
          </h1>
          <p className="mt-6 text-base text-text-600 dark:text-text-400">
            I’m Jip, a researcher at the OPTIMA ARC research centre and Monash
            University, where we aim to make complex decisions easier through
            decision support and data insights. We design state-of-the-art
            optimization techniques, such as the MiniZinc modelling language,
            ready to be used in industry.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/Dekker1"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://hachyderm.io/@Dekker1"
              aria-label="Follow on Mastodon"
              icon={MastodonIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/dekker1/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://orcid.org/0000-0002-0053-6724"
              aria-label="Find me on ORCID"
              icon={ORCIDIcon}
            />
            <SocialLink
              href="https://www.researchgate.net/profile/Jip-Dekker-2"
              aria-label="Follow on ResearchGate"
              icon={ResearchGateIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
