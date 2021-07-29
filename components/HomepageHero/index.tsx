import { motion } from 'framer-motion'
import Image from 'next/image'
import { YearbookImageThumb } from '../YearbookImage'
import { VideoPlayer } from '../VideoPlayer'

export interface HomepageHeroProps {
  props?: string
  characters: Array<any>
  heroVideo?: any
}

const transition = { duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] }
const imgVariants = {
  initial: { opacity: 0, y: 10, skew: 1 },
  animate: {
    opacity: 1,
    y: 0,
    skew: 0,
    transition: { duration: 1.5, ease: 'easeInOut', staggerChildren: 0.3 }
  }
}
const videoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition }
}
const pathVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' }
  }
}

export const HomepageHero = ({ characters, heroVideo }) => {
  return (
    <motion.div
      className="grid grid-cols-6 gap-y-14 gap-x-20 grid-flow-col grid-rows-3"
      initial="initial"
      animate="animate"
      variants={imgVariants}
    >
      <motion.div
        className="rect p-3 rounded row-start-1 col-start-2 row-span-2 z-10"
        variants={imgVariants}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        {/* MEGHAN */}
        <YearbookImageThumb character={characters[0]} key={characters[0].id} />
      </motion.div>
      <motion.div
        variants={imgVariants}
        className="rect p-3 rounded row-span-2 row-start-2 col-start-5 z-10"
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        {/* HARRY */}
        <YearbookImageThumb character={characters[1]} key={characters[1].id} />
      </motion.div>

      <motion.div
        className="rect p-3 rounded row-start-1 row-span-3 col-start-3 mt-14"
        variants={videoVariants}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <VideoPlayer
          cursiveTitle="Questions from "
          title="The Hallporters Chair"
          embedId="xJBlLgBNYhc"
        />
      </motion.div>
      <motion.div
        className=" rect p-3 rounded row-start-1 col-start-6 row-span-2"
        variants={imgVariants}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        {/* DR JACKSON */}
        <YearbookImageThumb character={characters[2]} key={characters[2].id} />
      </motion.div>
      <motion.div
        className=" rect p-3 rounded row-start-2 row-span-2 col-start-1"
        variants={imgVariants}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        {/* BARMAN */}
        <YearbookImageThumb character={characters[4]} key={characters[4].id} />
      </motion.div>
    </motion.div>
  )
}
