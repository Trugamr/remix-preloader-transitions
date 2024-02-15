import { motion } from 'framer-motion'

type PageTransitionProps = {
  isLoading: boolean
}

const PAGE_TRANSITION_DELAY = 0
export const PAGE_TRANSITION_TIMING = PAGE_TRANSITION_DELAY

export function PageTransition({ isLoading }: PageTransitionProps) {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10 flex h-full w-full"
      initial="cover"
      animate={isLoading ? 'cover' : 'reveal'}
      exit="cover"
      transition={{
        staggerChildren: 0.065,
        duration: 0.85,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {Array.from({
        length: 5,
      }).map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-auto grow bg-black"
          variants={{
            cover: { y: 0 },
            reveal: { y: '-100%' },
          }}
          transition={{
            duration: 0.85,
            ease: [0.25, 1, 0.5, 1],
          }}
        />
      ))}
    </motion.div>
  )
}
