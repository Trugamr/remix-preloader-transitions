import { useLocation } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'

/**
 * Simulate loading assets on route change
 */
export function useAssetsLoading() {
  const location = useLocation()
  const previousLocationPathname = useRef(location.pathname)
  const [isLoadingAssets, setIsLoadingAssets] = useState(true)

  useEffect(() => {
    if (previousLocationPathname.current !== location.pathname) {
      setIsLoadingAssets(true)
    }
    previousLocationPathname.current = location.pathname

    const timeoutId = setTimeout(
      () => {
        setIsLoadingAssets(false)
      },
      Math.random() * 1600 + 400,
    )

    return function cleanup() {
      clearTimeout(timeoutId)
    }
  }, [location.pathname])

  return {
    isLoadingAssets,
  }
}
