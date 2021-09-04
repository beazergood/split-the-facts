import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = ({ props }) => (
  <motion.ul variants={variants}>
    {props.map((i) => (
      <MenuItem i={i} key={i.id} selected={i.selected} />
    ))}
  </motion.ul>
)
