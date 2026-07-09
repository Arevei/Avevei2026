import { motion } from "framer-motion"
import { ReactNode } from "react"

type RevealOnScrollProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const RevealOnScroll = ({ children, className = "", delay = 0 }: RevealOnScrollProps) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(10px)",
        clipPath: "inset(0 0 16% 0 round 24px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        clipPath: "inset(0 0 0% 0 round 24px)",
      }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default RevealOnScroll
