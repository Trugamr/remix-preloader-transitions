import { useNavigation } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { useAssetsLoading } from './use-assets-loading'

export function useRouteLoading() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const { isLoadingAssets } = useAssetsLoading()

  const navigation = useNavigation()
  const isLoadingRoute = navigation.state === 'loading'

  const isLoading = isLoadingRoute || isLoadingAssets

  useEffect(() => {
    if (!isLoading) {
      setIsInitialLoading(false)
    }
  }, [isLoading])

  return {
    isInitialLoading,
    isLoading,
  }
}
