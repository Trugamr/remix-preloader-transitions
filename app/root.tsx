import { LinksFunction, MetaFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import globalsCssHref from '~/globals.css?url'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix' },
    {
      name: 'description',
      content: 'Preloader and Page Transitions using Framer Motion and Remix',
    },
  ]
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalsCssHref }]
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
