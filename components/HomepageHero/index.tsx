import { motion } from 'framer-motion'
import Image from 'next/image'
import { YearbookImageThumb } from '../YearbookImage'
import { VideoPlayer } from '../VideoPlayer'
import useResponsive from '../../hooks/responsive'

export interface HomepageHeroProps {
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
    transition: {
      duration: 1.5,
      type: 'spring',
      ease: 'easeInOut',
      staggerChildren: 0.3
    }
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

export const HomepageHero = ({ characters, heroVideo = '' }) => {
  const {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina
  } = useResponsive()

  return (
    <>
      <motion.div
        className="border- mx-auto border-purple-500 "
        variants={videoVariants}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <VideoPlayer
          cursiveTitle="Questions from "
          title="The Hallporters Chair"
          embedId="xJBlLgBNYhc"
          thumbnailImg="https://res.cloudinary.com/split-the-facts/image/upload/v1627550229/outstanding_english_georgian_hall_porters_chair_1_eeffde1663.jpg"
        />
      </motion.div>
      {isDesktopOrLaptop && (
        <div className="">
          <motion.div
            className="grid grid-cols-4 lg:grid-cols-6 gap-y-14 gap-x-20 grid-flow-col grid-rows-3"
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
              <YearbookImageThumb
                character={characters[0]}
                key={characters[0].id}
              />
            </motion.div>
            <motion.div
              variants={imgVariants}
              className="rect p-3 rounded row-span-2 row-start-2 col-start-6 z-10 invisible md:visible"
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              {/* HARRY */}
              <YearbookImageThumb
                character={characters[1]}
                key={characters[1].id}
              />
            </motion.div>

            <motion.div
              className=" rect p-3 rounded row-start-1 col-start-3 lg:col-start-5 row-span-2 z-10 invisible md:visible"
              variants={imgVariants}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              {/* DR JACKSON */}
              <YearbookImageThumb
                character={characters[2]}
                key={characters[2].id}
              />
            </motion.div>
            <motion.div
              className=" rect p-3 rounded row-start-2 row-span-2 col-start-1 z-10 invisible md:visible"
              variants={imgVariants}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              {/* BARMAN */}
              <YearbookImageThumb
                character={characters[4]}
                key={characters[4].id}
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  )
}
