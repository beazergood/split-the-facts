import { motion } from 'framer-motion'
import { YearbookImageThumb } from '../YearbookImage'
import { VideoPlayer } from '../VideoPlayer'
import useResponsive from '../../hooks/responsive'

export interface HomepageHeroProps {
  heroVideo?: any
}

const transition = { duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] }

const videoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition }
}

export const HomepageHero = ({ heroVideo = { url: '' } }) => {
  return (
    <>
      <motion.div
        className="border- mx-auto border-purple-500  "
        variants={videoVariants}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <VideoPlayer
          cursiveTitle="Questions from "
          title="The Hallporters Chair"
          embedId="xJBlLgBNYhc"
          thumbnailImg={heroVideo.url}
          host="vimeo"
        />
      </motion.div>
    </>
  )
}
