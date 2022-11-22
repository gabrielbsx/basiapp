import IProps from '../interfaces/props.interface'
import { motion } from 'framer-motion'

export default function LogoFormAnimation({ children }: IProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          x: -100,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
      className="gap-4"
    >
      {children}
    </motion.div>
  )
}
