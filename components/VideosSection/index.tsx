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
  const y7 = useTransform(scrollY, [0, 300], [0, 200])
  const y6 = useTransform(scrollY, [1800, 2600], [0, -400])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div className="relative bg-gradient-to-r from-popstar to-popstar-hover py-14">
      <section className="h-64 w-100 bg-hero-patternz relative ">
        <motion.div
          className="absolute left-32 z-10 bottom-32"
          style={{ y: y6, x: 5 }}
        >
          <Image src="/svg/frame-5.svg" width="179px" height="200px" />
        </motion.div>
        <div className="absolute left-20 right-0 bottom-0 top-0 bg-popstar-hover bg-opacity-0 flex flex-col justify-center ">
          <OrnateFrame label="Videos" color={theme.primary} />
        </div>
        <motion.div
          className="absolute right-32 bottom-0"
          style={{ y: y7, x: 5 }}
        >
          <Image src="/svg/frame-4.svg" width="157px" height="175px" />
        </motion.div>
      </section>
      <div className="container mx-auto">
        <VideosRow
          key="1"
          videos={videos.recentVideos}
          group={{ title: 'Latest Uploads', action: 'link' }}
        />
        <VideosRow
          key="2"
          videos={videos.royalInterview}
          group={{ title: 'Royal Interview', action: 'link' }}
        />
        <VideosRow
          key="3"
          videos={videos.atTheBar}
          group={{ title: 'At The Bar', action: 'link' }}
        />
        <VideosRow
          key="4"
          videos={videos.theGodfather}
          group={{ title: 'The Godfather', action: 'link' }}
        />
      </div>
    </div>
  )
}
