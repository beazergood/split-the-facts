import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlayCircle, FaTimes } from 'react-icons/fa'
import HyvorTalk from 'hyvor-talk-react'
const WEBSITE_ID = parseInt(process.env.NEXT_PUBLIC_HYVOR_WEBSITE_ID)

export interface VideoPlayerProps {
  embedId: any
  title?: string
  cursiveTitle?: string
  thumbnailImg?: any
  host?: string
  videoId: string
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
  thumbnailImg = '',
  host = '',
  videoId = ''
}) => {
  // console.log('embed: ', embed)

  const [showThumb, setThumbShow] = useState(true)
  return (
    <>
      {/* <AnimatePresence initial={false} exitBeforeEnter> */}
      <motion.div
        className="mx-auto relative cursor-pointer w-full lg:w-2/3"
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
            <div className="video-responsive shadow-xl">
              {
                <iframe
                  src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              }
            </div>
            <div className="w-2/3 mx-auto">
              <HyvorTalk.Embed
                websiteId={WEBSITE_ID}
                id={videoId}
                loadMode="scroll"
              />
            </div>
          </>
        )}
        {showThumb && (
          <div
            className="border- border-green-300 relative z-20 "
            style={{ height: '40vh' }}
          >
            <h3 className="text-center text-white font-AveriaSerifLibre uppercase">
              Website Exclusive Video
            </h3>
            <div className="border- border-green-300 flex items-center">
              <motion.img
                src={thumbnailImg}
                className="mx-auto rounded-lg  pt-1 "
                width="732px"
                height="431px"
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                onClick={() => {
                  setThumbShow(false)
                }}
              />
              <FaPlayCircle
                className="z-20 absolute text-8xl text-white hover:text-nyanza cursor-pointer"
                style={{
                  transform: 'translate(-50%, -50%)',
                  left: '50%'
                }}
                onClick={() => {
                  setThumbShow(false)
                }}
              />
              {cursiveTitle && (
                <motion.h1
                  className=" font-AlexBrush text-4xl font-semibold text-center mx-10 z-20 absolute left-40 bottom-0 md:top-64 text-white"
                  onClick={() => {
                    setThumbShow(false)
                  }}
                >
                  {cursiveTitle}
                </motion.h1>
              )}
              <div className="bg-popstar-hover bg-opacity-50 mx-10 m-10 z-10 rounded-lg absolute left-40 md:top-64 p-2 ">
                <motion.h1
                  className="font-PlayfairDisplay text-4xl font-semibold text-center text-gray-500 sm:text-white"
                  onClick={() => {
                    setThumbShow(false)
                  }}
                >
                  {title}
                </motion.h1>
              </div>
            </div>
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
