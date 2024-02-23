import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './navbar'
import { useLocation } from '@remix-run/react'
import { useRouteLoading } from '~/hooks/use-route-loading'
import { PRELOADER_TIMING, Preloader } from './preloader'
import { PAGE_TRANSITION_TIMING, PageTransition } from './page-transition'
import { Fragment, useEffect, useState } from 'react'

type AppShellProps = {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const location = useLocation()
  const { isLoadingAssets, isLoading } = useRouteLoading()

  /**
   * Setting up correct children delay duration is essential to make sure that children animation
   * run after the preloader or page transition animation is completed
   * Initial when the assets are not loaded we want the delay to be the same as the preloader
   * but once the assets are loaded we want the delay to be the same as the page transition
   */
  const [childrenDelayDuration, setChildrenDelayDuration] = useState<number>(PRELOADER_TIMING)
  useEffect(
    function updateChildrenDelayDuration() {
      if (!isLoadingAssets) {
        setChildrenDelayDuration(PAGE_TRANSITION_TIMING)
      }
    },
    [isLoadingAssets],
  )

  return (
    <Fragment>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={location.pathname} className="flex h-full flex-col">
          <Navbar />
          <motion.div
            className="grow"
            initial="initial"
            // to prevent animation on intial load
            // we want to animate the children in case of route change as well as initial load
            animate={isLoading ? 'initial' : 'animate'}
            transition={{
              delayChildren: childrenDelayDuration,
              staggerChildren: 0.065,
            }}
          >
            {children}
          </motion.div>
          <PageTransition />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>{isLoadingAssets ? <Preloader /> : null}</AnimatePresence>
    </Fragment>
  )
}
