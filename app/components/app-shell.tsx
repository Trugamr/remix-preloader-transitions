import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './navbar'
import { useLocation } from '@remix-run/react'
import { useRouteLoading } from '~/hooks/use-route-loading'
import { PRELOADER_TIMING, Preloader } from './preloader'
import { PAGE_TRANSITION_TIMING, PageTransition } from './page-transition'
import { Fragment } from 'react'

type AppShellProps = {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const location = useLocation()
  const { isInitialLoading, isLoading } = useRouteLoading()

  return (
    <Fragment>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={location.pathname} className="flex h-full flex-col">
          <Navbar />
          <AnimatePresence initial>
            <motion.div
              className="grow"
              initial="initial"
              animate={isLoading ? 'initial' : 'animate'}
              transition={{
                delayChildren: isInitialLoading ? PRELOADER_TIMING : PAGE_TRANSITION_TIMING,
                staggerChildren: 0.065,
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <PageTransition isLoading={!isInitialLoading && isLoading} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>{isInitialLoading ? <Preloader /> : null}</AnimatePresence>
    </Fragment>
  )
}
