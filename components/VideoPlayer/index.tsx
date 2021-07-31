import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlayCircle, FaTimes } from 'react-icons/fa'

export interface VideoPlayerProps {
  embedId: any
  title?: string
  cursiveTitle?: string
  thumbnailImg?: any
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

export const VideoPlayer = ({
  title = '',
  cursiveTitle = '',
  embedId,
  thumbnailImg = 'https://res.cloudinary.com/split-the-facts/image/upload/v1627550229/outstanding_english_georgian_hall_porters_chair_1_eeffde1663.jpg'
}) => {
  // console.log('embed: ', embed)

  const [showThumb, setThumbShow] = useState(true)
  return (
    <>
      {/* <AnimatePresence initial={false} exitBeforeEnter> */}
      <motion.div
        className="mx-auto relative cursor-pointer w-full lg:w-2/3"
        whileHover={{ scale: 1.01 }}
        transition={transition}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        variants={imgVariants}
      >
        {!showThumb && (
          <>
            <div className="flex flex-row">
              <div className="flex-grow"></div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <FaTimes
                  className="text-4xl m-2 text-gray-300 hover:text-popstar-hover"
                  onClick={() => {
                    setThumbShow(true)
                  }}
                />
              </motion.div>
            </div>
            <div className="video-responsive">
              <iframe
                src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </>
        )}
        {showThumb && (
          <div
            className="border- border-green-300 relative z-10 "
            style={{ height: '60vh' }}
          >
            <motion.img
              src={thumbnailImg}
              className="absolute mx-auto rounded-lg shadow-lg pt-1 "
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              onClick={() => {
                setThumbShow(false)
              }}
            />
            <FaPlayCircle
              className="absolute z-10 text-8xl text-white hover:text-nyanza top-24"
              style={{
                transform: 'translate(-50%, -50%)',
                top: '40%',
                left: '50%'
              }}
              onClick={() => {
                setThumbShow(false)
              }}
            />
            {cursiveTitle && (
              <motion.h1
                className=" font-AlexBrush text-4xl font-semibold text-center mx-10 m-10 h-20 z-20 absolute bottom-20 md:bottom-4 text-white"
                onClick={() => {
                  setThumbShow(false)
                }}
              >
                {cursiveTitle}
              </motion.h1>
            )}
            <motion.h1
              className="font-PlayfairDisplay text-4xl font-semibold text-center h-20 mx-10 m-10 z-20 absolute -bottom-3 text-gray-500 sm:text-white"
              onClick={() => {
                setThumbShow(false)
              }}
            >
              {title}
            </motion.h1>
            ){' '}
          </div>
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
