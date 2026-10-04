import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-text-800 font-semibold text-text-100 hover:bg-text-700 active:bg-text-800 active:text-text-100/70 dark:bg-text-700 dark:hover:bg-text-600 dark:active:bg-text-700 dark:active:text-text-100/70',
  secondary:
    'bg-text-50 font-medium text-text-900 hover:bg-text-100 active:bg-text-100 active:text-text-900/60 dark:bg-text-800/50 dark:text-text-300 dark:hover:bg-text-800 dark:hover:text-text-50 dark:active:bg-text-800/50 dark:active:text-text-50/70',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
    | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
    | React.ComponentPropsWithoutRef<typeof Link>
  )

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
