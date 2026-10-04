import { getAllArticles } from '@/lib/articles'
import assert from 'assert'
import { Feed } from 'feed'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Jip J. Dekker',
    email: 'jip.dekker@monash.edu',
  }

  let feed = new Feed({
    title: author.name,
    description:
      'The collection of writing by Jip about optimization, programming language, and general computer science',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articles = await getAllArticles()

  for (let article of articles) {
    let publicUrl = `${siteUrl}/articles/${article.slug}`
    let title = article.title
    let date = article.date
    let description = article.description

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof description === 'string')

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      description,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
