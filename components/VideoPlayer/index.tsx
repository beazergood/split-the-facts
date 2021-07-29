import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlayCircle } from 'react-icons/fa'

export interface VideoPlayerProps {
  title: string
  cursiveTitle: string
  embed: any
  // thumbnailImg: any
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
const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }

export const VideoPlayer = ({ title, cursiveTitle, embedId }) => {
  // console.log('embed: ', embed)

  const [showThumb, setThumbShow] = useState(true)
  return (
    <>
      {/* <AnimatePresence initial={false} exitBeforeEnter> */}
      <motion.div
        className="mx-auto border-0 border-yellow-200 relative hover:cursor-help w-100"
        whileHover={{ scale: 1.01 }}
        transition={transition}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        style={{ width: '500px', height: '350px' }}
        variants={imgVariants}
        onClick={() => {
          console.log('clickety click!')
          setThumbShow(false)
        }}
      >
        {!showThumb && (
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        )}
        {showThumb && (
          <>
            <img
              src={
                '/images/outstanding-english-georgian-hall-porters-chair-1.jpeg'
              }
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
            ){' '}
          </>
        )}
      </motion.div>
      {/* </AnimatePresence> */}
      <style jsx>{`
        .video-responsive {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          height: 0;
        }

        .video-responsive iframe {
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      `}</style>
    </>
  )
}
