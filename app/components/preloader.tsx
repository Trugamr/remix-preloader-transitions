import { MotionProps, motion } from 'framer-motion'
import { invariant } from '~/lib/invariant'

const loader = {
  variants: {
    initial: { translateY: 0 },
    exit: { translateY: '-100%' },
  },
  transition: {
    delay: 0.65,
    duration: 0.65,
  },
} satisfies Pick<MotionProps, 'variants' | 'transition'>

const message = {
  variants: {
    initial: { translateY: 0 },
    exit: { translateY: '-100%' },
  },
  transition: {
    delay: loader.transition.delay + loader.transition.duration + 0.75,
    duration: 0.65,
  },
} satisfies Pick<MotionProps, 'variants' | 'transition'>

const SLICES_DELAY =
  message.transition.delay + message.transition.duration - message.transition.duration / 1

const slices = {
  variants: {
    initial: { translateY: 0 },
    exit: (i?: number) => {
      invariant(typeof i === 'number', 'Index is required for slice animation')

      return {
        translateY: '-100%',
        transition: {
          delay: SLICES_DELAY + i * 0.065,
          duration: 0.65,
        },
      }
    },
  },
} satisfies Pick<MotionProps, 'variants'>

export const PRELOADER_TIMING = SLICES_DELAY

export function Preloader() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10 h-full w-full overflow-hidden"
      initial="initial"
      exit="exit"
    >
      <div className="absolute flex h-full w-full flex-row-reverse">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <motion.div
              key={i}
              className="pointer-events-auto grow bg-black"
              custom={i}
              {...slices}
            />
          )
        })}
      </div>
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-black p-6 text-white"
        {...message}
      >
        <pre className="uppercase">Dolphins are coming!</pre>
      </motion.div>
      <motion.div
        className="absolute flex h-full w-full items-center justify-center border border-black bg-white p-6"
        {...loader}
      >
        <pre className="uppercase">Loading Assets</pre>
      </motion.div>
    </motion.div>
  )
}
