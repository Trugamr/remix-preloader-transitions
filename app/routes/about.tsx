import { Transition, Variants, motion } from 'framer-motion'

const variants = {
  initial: { y: 480, opacity: 0 },
  animate: { y: 0, opacity: 1 },
} satisfies Variants

const transition = {
  duration: 1.25,
  ease: [0.25, 1, 0.5, 1],
} satisfies Transition

export default function AboutPage() {
  return (
    <motion.main className="min-h-full p-6">
      <motion.img
        className="h-96 w-full rounded-3xl bg-black object-cover"
        src="/images/black-sea-by-jack-b.jpg"
        alt="A dolphin jumping out of the water."
        variants={variants}
        transition={transition}
      />
      <motion.h1
        className="mt-5 text-3xl font-bold"
        variants={variants}
        transition={transition}
      >
        About
      </motion.h1>
      <motion.p variants={variants} transition={transition}>
        Dolphins are intelligent marine mammals.
      </motion.p>
    </motion.main>
  )
}
