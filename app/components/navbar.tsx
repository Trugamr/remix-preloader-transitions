import { NavLink } from '@remix-run/react'
import { cn } from '~/lib/utils'

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
]

type NavbarProps = {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={cn('flex gap-x-1.5 border-b px-3 py-2', className)}>
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            cn('p-1', isActive ? 'underline underline-offset-2' : undefined)
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
