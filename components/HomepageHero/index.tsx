import { motion } from 'framer-motion'
import Image from 'next/image'
import { YearbookImageThumb } from '../YearbookImage'
import { VideoPlayer } from '../VideoPlayer'

export interface HomepageHeroProps {
  props?: string
  characters: Array<any>
}

const imgVariants = {
  initial: { opacity: 1, y: 10, skew: 1 },
  animate: {
    opacity: 1,
    y: 0,
    skew: 0,
    transition: { duration: 1.5, ease: 'easeInOut' }
  }
}
const svgVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } }
}
const pathVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' }
  }
}
const transition = { duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] }

export const HomepageHero = ({ characters }) => {
  return (
    <div className="grid grid-cols-6 gap-y-14 gap-x-20 grid-flow-col grid-rows-3">
      <motion.div
        className="rect p-3 rounded row-start-1 col-start-2 row-span-2 z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 1, staggerChildren: 0.1 }
        }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        {/* MEGHAN */}
        <YearbookImageThumb character={characters[0]} key={characters[0].id} />
      </motion.div>
      <motion.div
        className="rect p-3 rounded row-span-2 row-start-2 col-start-5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1.1 } }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        {/* HARRY */}
        <YearbookImageThumb character={characters[1]} key={characters[1].id} />
      </motion.div>

      <motion.div
        className="rect p-3 rounded row-start-1 row-span-3 col-start-3 "
        style={{ left: '30%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1.2 } }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <VideoPlayer
          cursiveTitle="Questions from "
          title="The Hallporters Chair"
        />
      </motion.div>
      <motion.div
        className=" rect p-3 rounded row-start-1 col-start-6 row-span-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1.2 } }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        {/* DR JACKSON */}
        <YearbookImageThumb character={characters[2]} key={characters[2].id} />
      </motion.div>
      <motion.div
        className=" rect p-3 rounded row-start-2 row-span-2 col-start-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1.3 } }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        {/* BARMAN */}
        <YearbookImageThumb character={characters[4]} key={characters[4].id} />
      </motion.div>
    </div>
  )
}
