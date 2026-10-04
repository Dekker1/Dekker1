import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { MoonIcon, SunIcon, SystemIcon } from './SVGIcons'

const themes = [
  { name: 'Light', value: 'light', icon: SunIcon },
  { name: 'Dark', value: 'dark', icon: MoonIcon },
  { name: 'System', value: 'system', icon: SystemIcon },
]

export function ThemeSelector(
  props: React.ComponentPropsWithoutRef<typeof Listbox<'div'>>,
) {
  let { theme, setTheme } = useTheme()
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-8 w-8" />
  }

  return (
    <Listbox as="div" value={theme} onChange={setTheme} {...props}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button
        className="flex h-10 w-10 items-center justify-center rounded-xl shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-text-700 dark:ring-inset dark:ring-white/5"
        aria-label="Theme"
      >
        <SunIcon
          className={clsx(
            'h-6 w-6 dark:hidden',
            theme === 'system'
              ? 'fill-text-400 stroke-text-400'
              : 'fill-accent-700 stroke-accent-700 dark:fill-accent-400 dark:stroke-accent-400',
          )}
        />
        <MoonIcon
          className={clsx(
            'hidden h-6 w-6 dark:block',
            theme === 'system'
              ? 'fill-text-400 stroke-text-400'
              : 'fill-accent-700 stroke-accent-700 dark:fill-accent-400 dark:stroke-accent-400',
          )}
        />
      </Listbox.Button>
      <Listbox.Options className="absolute left-1/2 top-full mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-text-800 dark:ring-white/5">
        {themes.map((theme) => (
          <Listbox.Option
            key={theme.value}
            value={theme.value}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-accent-800 dark:text-accent-400': selected,
                  'text-text-900 dark:text-white': active && !selected,
                  'text-text-700 dark:text-text-400': !active && !selected,
                  'bg-text-100 dark:bg-text-900/40': active,
                },
              )
            }
          >
            {({ selected }) => (
              <>
                <div className="rounded-md bg-white p-1 shadow ring-1 ring-text-900/5 dark:bg-text-700 dark:ring-inset dark:ring-white/5">
                  <theme.icon
                    className={clsx(
                      'h-4 w-4',
                      selected
                        ? 'fill-accent-700 stroke-accent-700 dark:fill-accent-400 dark:stroke-accent-400'
                        : 'fill-text-400  stroke-text-400',
                    )}
                  />
                </div>
                <div className="ml-3">{theme.name}</div>
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
