import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaPlayCircle } from 'react-icons/fa'

export interface VideoPlayerProps {
  title: string
  cursiveTitle?: string
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

export const VideoPlayer = ({ title, cursiveTitle }) => {
  return (
    <>
      {/* <AnimatePresence initial={false} exitBeforeEnter> */}
      <motion.div
        className="mx-auto border-0 border-yellow-200 relative cursor-pointer w-100"
        whileHover={{ scale: 1.01 }}
        transition={transition}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        style={{ width: '500px', height: '350px' }}
        variants={imgVariants}
      >
        <img
          src={'/images/outstanding-english-georgian-hall-porters-chair-1.jpeg'}
          width="500px"
          height="350px"
          className="absolute top-0 mx-auto rounded-lg shadow-lg pt-1"
        />
        <FaPlayCircle
          className="absolute z-10 text-8xl text-white"
          style={{ top: '30%', left: '40%' }}
        />
        {cursiveTitle && (
          <motion.h1
            className="font-AlexBrush text-4xl font-semibold text-center mx-10 m-10 z-20 absolute bottom-10 text-white"
            layoutId="title"
          >
            {cursiveTitle}
          </motion.h1>
        )}
        <motion.h1
          className="font-PlayfairDisplay text-4xl font-semibold text-center mx-10 m-10 z-20 absolute bottom-0 text-white"
          layoutId="title"
        >
          {title}
        </motion.h1>
        {/* {character.showName && (
            <p className="text-sm text-center my-5">{character.name}</p>
          )} */}
      </motion.div>
      {/* </AnimatePresence> */}
    </>
  )
}
