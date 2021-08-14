import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { VideoPlayer } from '../VideoPlayer'
import { WaveBackground } from '../WaveBackground'
import Image from 'next/image'

export interface HomepageHeroProps {
  heroImageUrl: any
  embedId: string
  aboveImageText: string
  cursiveTitle: string
  mainTitle: string
}

const transition = { duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] }

const videoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition }
}

export const HomepageHero = ({
  heroImageUrl,
  embedId,
  aboveImageText,
  cursiveTitle,
  mainTitle
}) => {
  const { scrollY } = useViewportScroll()

  const y1 = useTransform(scrollY, [0, 200], [0, -250])
  const x1 = useTransform(scrollY, [0, 500], [0, -250])
  const y2 = useTransform(scrollY, [0, 200], [0, -100])

  return (
    <>
      <motion.div
        className="relative mx-auto"
        variants={videoVariants}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <motion.div
          className="absolute md:-left-10 lg:left-20 xl:left-44 -bottom-2 z-0 invisible md:visible"
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
          className="absolute right-12 top-4 z-10 md:-right-20 lg:right-32 xl:right-14 xl:top-44 invisible md:visible"
          style={{ y: y2, x: 10 }}
        >
          <Image
            src="/svg/frame-4.svg"
            width="152px"
            height="185px"
            alt="Ornate Frame"
          />
        </motion.div>
        <VideoPlayer
          videoId="HomepageHero"
          cursiveTitle={cursiveTitle}
          mainTitle={mainTitle}
          aboveImageText={aboveImageText}
          embedId={embedId}
          thumbnailImg={heroImageUrl}
        />
        <WaveBackground />
      </motion.div>
    </>
  )
}
