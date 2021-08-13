import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { VideoPlayer } from '../VideoPlayer'
import { WaveBackground } from '../WaveBackground'
import Image from 'next/image'

export interface HomepageHeroProps {
  heroVideo?: any
}

const transition = { duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] }

const videoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition }
}

export const HomepageHero = ({ heroVideo = { url: '' } }) => {
  const { scrollY } = useViewportScroll()

  const y1 = useTransform(scrollY, [0, 200], [0, -250])
  const x1 = useTransform(scrollY, [0, 500], [10, 50])
  const y2 = useTransform(scrollY, [0, 200], [0, -100])

  return (
    <>
      <motion.div
        className="relative mx-auto"
        variants={videoVariants}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <motion.div
          className="absolute left-32 -bottom-2 z-0"
          style={{ y: y1, x: x1 }}
        >
          <Image
            src="/svg/frame-3.svg"
            width="146px"
            height="171px"
            alt="Ornate Frame"
          />
        </motion.div>

        <motion.div
          className="absolute right-32 top-4 z-10"
          style={{ y: y2, x: x1 }}
        >
          <Image
            src="/svg/frame-4.svg"
            width="152px"
            height="185px"
            alt="Ornate Frame"
          />
        </motion.div>
        <VideoPlayer
          cursiveTitle="Questions from "
          title="The Hallporters Chair"
          embedId="YBU7mAh9qVQ"
          thumbnailImg={heroVideo.url}
        />
        <WaveBackground />
      </motion.div>
    </>
  )
}
