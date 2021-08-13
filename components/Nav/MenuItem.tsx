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

const colors = ['#B3525E', '#0047AB', '#94A661', '#3F678D', '#3F678D']

export const MenuItem = ({ i, selected }) => {
  const style = { border: `2px solid ${colors[i.id]}` }
  return (
    <motion.li
      className="cursor-pointer hover:shadow-md"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={i.href} passHref>
        <div>
          <div className="text-placeholder" style={style}>
            {i.label}
          </div>
        </div>
      </Link>
    </motion.li>
  )
}
