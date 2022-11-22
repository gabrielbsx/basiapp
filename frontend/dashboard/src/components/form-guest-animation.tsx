import { motion } from 'framer-motion'
import IProps from '../interfaces/props.interface'

export default function FormGuestAnimation({ children }: IProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  )
}
