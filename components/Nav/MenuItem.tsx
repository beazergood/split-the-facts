import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const colors = ['#B3525E', '#B3525E', '#B3525E', '#B3525E']

export const MenuItem = ({ i, selected }) => {
  const style = { border: `2px solid ${colors[i.id]}` }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={i.href}>
        <div>
          <div className="text-placeholder" style={style}>
            {i.label}
          </div>
        </div>
      </Link>
    </motion.li>
  )
}
