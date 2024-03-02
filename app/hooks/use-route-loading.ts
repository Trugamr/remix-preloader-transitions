import { useNavigation } from '@remix-run/react'
import { useAssetsLoading } from './use-assets-loading'

export function useRouteLoading() {
  // If this is true, it means that the assets are being loaded
  // it would become false when all the assets are loaded
  const { isLoadingAssets } = useAssetsLoading()

  const navigation = useNavigation()
  // if this is true, that means loaders for the next route are being called
  // or when the page JS is being loaded
  const isLoadingRoute = navigation.state === 'loading'

  // if this is true, that means either the route is
  // being loaded or the assets are being loaded
  // which means
  //  - when the page would be loaded for the first time it would be true as the assets would be loaded
  //  - when the page would transition to another route, it would be true as the route would be loading (if it has any loader)
  const isLoading = isLoadingRoute || isLoadingAssets

  return {
    isLoadingAssets,
    isLoadingRoute,
    isLoading,
  }
}
