import { MotionProps, motion } from 'framer-motion'

const animation = {
  variants: {
    initial: { y: 480, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  transition: {
    duration: 1.25,
    ease: [0.25, 1, 0.5, 1],
  },
} satisfies MotionProps

export default function Index() {
  return (
    <motion.main className="min-h-full p-6">
      <motion.img
        className="h-96 w-full rounded-3xl bg-black object-cover"
        src="/images/dolphin-by-jeremy-ricketts.jpg"
        alt="A dolphin jumping out of the water."
        {...animation}
      />
      <motion.h1 className="mt-5 text-3xl font-bold" {...animation}>
        Home
      </motion.h1>
      <motion.p {...animation}>Dolphins are jumping out of the water.</motion.p>
    </motion.main>
  )
}
