import { SerializeFrom } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useRef } from 'react'

/**
 * This hook preserves the loader data across route transitions. This is helpful when animating between routes and you want to keep the previous route's data around until the new route is ready.
 * @see https://github.com/remix-run/remix/issues/3625#issuecomment-1179178857
 */
export function usePreservedLoaderData<T = unknown>(): SerializeFrom<T> {
  const data = useLoaderData<T>()
  const preserved = useRef(data)

  // Update the preserved data if the loader data changes
  if (data !== undefined) {
    preserved.current = data
  }

  return preserved.current
}
