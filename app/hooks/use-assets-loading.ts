import { useEffect, useState } from 'react'

/**
 * Simulate loading assets on route change
 */
export function useAssetsLoading() {
  const [isLoadingAssets, setIsLoadingAssets] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(
      () => {
        setIsLoadingAssets(false)
      },
      Math.random() * 1600 + 400,
    )

    return function cleanup() {
      clearTimeout(timeoutId)
    }
  }, [])

  return {
    isLoadingAssets,
  }
}
