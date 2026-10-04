import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkIcon } from '@/components/SVGIcons'
import logoChuffed from '@/images/logos/chuffed.png'
import logoMiniZinc from '@/images/logos/minizinc.svg'
import logoMZNPy from '@/images/logos/minizinc-python.svg'
import logoPindakaas from '@/images/logos/pindakaas.svg'
import logoShackle from '@/images/logos/shackle.svg'
import logoHuub from '@/images/logos/huub.svg'

const projects = [
	{
		name: 'MiniZinc',
		description:
			'A constraint modelling language for almost all types of optimization solvers.',
		link: { href: 'http://www.minizinc.org', label: 'minizinc.org' },
		logo: logoMiniZinc,
	},
	{
		name: 'Shackle',
		description: 'The next generation of constraint model rewriting tooling.',
		link: {
			href: 'https://github.com/shackle-rs/shackle',
			label: 'github.com',
		},
		logo: logoShackle,
	},
	{
		name: 'Huub',
		description: 'A fast Lazy Clause Generation (LCG) solver with modularity and maintainability in mind.',
		link: { href: '#', label: 'TBA' },
		logo: logoHuub,
	},
	{
		name: 'Pindakaas',
		description:
			'A library that helps you create state-of-the-art encodings for Boolean satisfiability solvers.',
		link: { href: 'https://github.com/pindakaashq/pindakaas', label: 'github.com' },
		logo: logoPindakaas,
	},
	{
		name: 'MiniZinc Python',
		description:
			'Easily run MiniZinc from Python, with incremental solving and direct data access.',
		link: {
			href: 'https://github.com/MiniZinc/minizinc-python',
			label: 'github.com',
		},
		logo: logoMZNPy,
	},
	{
		name: 'Chuffed',
		description: 'The solver that brought Lazy Clause Generation to the world.',
		link: { href: 'https://github.com/chuffed/chuffed', label: 'github.com' },
		logo: logoChuffed,
	},
]

export const metadata: Metadata = {
	title: 'Projects',
	description: 'From my brain to your computer',
}

export default function Projects() {
	return (
		<SimpleLayout
			title="From my brain to your computer"
			intro="Over the years, I have dedicated myself to many projects, big and small. The following projects are the ones where I feel I had the most impact. They are open-source, providing you with the opportunity to explore them. If you come across something that catches your interest, I encourage you to dive in. Feel free to contact me if you have any questions or would like to collaborate on their development."
		>
			<ul
				role="list"
				className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
			>
				{projects.map((project) => (
					<Card as="li" key={project.name}>
						<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md shadow-text-800/5 ring-1 ring-text-900/5 dark:border dark:border-text-700/50 dark:bg-text-800 dark:ring-0">
							<Image
								src={project.logo}
								alt=""
								className="h-8 w-8"
								unoptimized
							/>
						</div>
						<h2 className="mt-6 text-base font-semibold text-text-800 dark:text-text-100">
							<Card.Link href={project.link.href}>{project.name}</Card.Link>
						</h2>
						<Card.Description>{project.description}</Card.Description>
						<p className="relative z-10 mt-6 flex text-sm font-medium text-text-400 transition group-hover:text-accent-800 dark:text-text-200">
							<LinkIcon className="h-6 w-6 flex-none" />
							<span className="ml-2">{project.link.label}</span>
						</p>
					</Card>
				))}
			</ul>
		</SimpleLayout>
	)
}
