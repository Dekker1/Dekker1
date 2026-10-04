'use client'

import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { menu_items } from '@/components/Header'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-accent-800 dark:hover:text-accent-700"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-text-100 pb-16 pt-10 dark:border-text-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-text-800 dark:text-text-200">
                {menu_items.map((item) => (
                  <NavLink key={item.url} href={item.url}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-text-400 dark:text-text-500">
                &copy; {new Date().getFullYear()} Jip J. Dekker. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
