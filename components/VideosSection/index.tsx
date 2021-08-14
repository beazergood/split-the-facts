import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '../Button'
import { OrnateFrame } from '../OrnateFrame'
import { VideosRow } from '../VideosRow'
export interface Video {
  title: string
  description: string
  image: {
    url: string
  }
}
export interface VideosSectionProps {
  title: string
  videos: Array<any>
  theme: any
  href: string
}

export const VideosSection = ({ title, href, theme, videos }) => {
  const transition = {
    duration: 1.3,
    ease: [0.6, 0.01, -0.05, 0.9],
    type: 'spring',
    stiffness: 300
  }

  const svgVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } }
  }
  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } }
  }
  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: 'easeInOut' }
    }
  }
  const { scrollY } = useViewportScroll()
  const y7 = useTransform(scrollY, [1700, 2400], [0, -200])
  const y6 = useTransform(scrollY, [1800, 2600], [0, -400])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div className="relative pt-14" style={{ backgroundColor: theme.primary }}>
      <section className="h-64 w-100 bg-hero-patternz relative ">
        <motion.div
          className="absolute left-32 z-10 bottom-32 invisible md:visible"
          style={{ y: y6, x: 5 }}
        >
          <Image
            src="/svg/frame-5.svg"
            width="109px"
            height="120px"
            alt="Ornate Frame"
          />
        </motion.div>
        <div className="absolute left-0 right-0 bottom-0 top-0 bg-popstar-hover bg-opacity-0 flex flex-col justify-center ">
          <OrnateFrame label="Videos" color={theme.primary} />
        </div>
        <motion.div
          className="absolute right-32 bottom-0 z-10 invisible md:visible"
          style={{ y: y7, x: 5 }}
        >
          <Image
            src="/svg/frame-11.svg"
            width="127px"
            height="155px"
            alt="Ornate Frame"
          />
        </motion.div>
      </section>
      <div className="container mx-auto">
        <VideosRow
          videos={videos.recentVideos}
          group={{ title: 'Latest Uploads', action: 'link' }}
        />
        <VideosRow
          videos={videos.royalInterview}
          group={{ title: 'Royal Interview', action: 'link' }}
        />
        <VideosRow
          videos={videos.atTheBar}
          group={{ title: 'At The Bar', action: 'link' }}
        />
        <VideosRow
          videos={videos.theGodfather}
          group={{ title: 'The Godfather', action: 'link' }}
        />
      </div>
      <div className="absoute bottom-0 z-0 w-full">
        {/* wave */}
        <svg
          width="1440"
          height="80"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 80L1440 0V80H0Z" fill="#FAF4E6" />
        </svg>
      </div>
    </div>
  )
}
