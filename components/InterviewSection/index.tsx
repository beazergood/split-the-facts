import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { YearbookImage } from '../YearbookImage'
import { Button } from '../Button'
import Image from 'next/image'

export interface InterviewSectionProps {
  characters: any
}
export const InterviewSection = ({ characters }) => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [4000, 4500], [0, -50])
  const y2 = useTransform(scrollY, [3900, 4400], [0, -150])
  const y3 = useTransform(scrollY, [3800, 4800], [0, -150])
  const y4 = useTransform(scrollY, [4500, 5800], [0, 100])
  const xChair = useTransform(scrollY, [3800, 4800], [10, 60])

  const [ref1, inView1, entry1] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true
  })
  const [ref2, inView2, entry2] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false
  })
  const [ref3, inView3, entry3] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true
  })

  const meghanVariants = {
    initial: {
      opactity: 0,
      y: 100
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 30,
      transition: {
        duration: 2.5,
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const cjVariants = {
    initial: {
      opactity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: -10,
      transition: {
        duration: 1.5,
        type: 'spring',
        stiffness: 100,
        delay: 1.4
      }
    }
  }

  const harryVariants = {
    initial: {
      opactity: 0,
      y: 100
    },
    animate: {
      opacity: 1,
      y: 40,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  }
  return (
    <div className="relative z-0 w-full">
      <motion.div
        className="absolute left-24 -bottom-80 invisible md:visible"
        style={{ y: y3, x: 5 }}
      >
        <Image
          src="/svg/frame-4.svg"
          width="146px"
          height="171px"
          alt="Ornate Frame"
        />
      </motion.div>
      <motion.div
        className="absolute left-20 top-24 z-0 invisible md:visible"
        style={{ y: y1, x: 15 }}
      >
        <Image
          src="/svg/horse-1.svg"
          width="312px"
          height="334px"
          alt="Horse Painting"
        />
      </motion.div>
      <motion.div className=" flex items-center justify-center px-4 ">
        <div className="flex flex-col">
          <div className="mx-auto flex flex-row">
            <motion.h1
              className="font-PlayfairDisplay text-6xl px-2 mx-auto w-1/2 leading-normal text-center font-bold z-10 text-gray-700 my-20"
              layoutId="title"
            >
              The Interview We Never Saw
            </motion.h1>
          </div>
          <div className="flex flex-col md:flex-row justify-around w-screen">
            <motion.div
              ref={ref1}
              className="rect p-3 rounded my-20 md:my-4"
              variants={meghanVariants}
              initial="initial"
              animate={inView1 ? 'animate' : 'initial'}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <YearbookImage character={characters[0]} key={characters[0].id} />
            </motion.div>

            <motion.div
              ref={ref2}
              className="rect p-3 rounded "
              variants={cjVariants}
              initial="initial"
              animate={inView2 ? 'animate' : 'initial'}
              exit={{ opacity: 0, transition: { duration: 1, delay: 0.1 } }}
            >
              <YearbookImage character={characters[2]} key={characters[2].id} />
            </motion.div>

            <motion.div
              ref={ref3}
              className="rect p-3 rounded my-20 md:my-10"
              variants={harryVariants}
              initial="initial"
              animate={inView3 ? 'animate' : 'initial'}
            >
              <YearbookImage character={characters[1]} key={characters[1].id} />
            </motion.div>
          </div>
          <div className="border- border-green-200 flex flex-row">
            <div className="flex mt-24 mx-auto">
              <Button href="/the-cast" label="Meet the cast &rArr;" />
            </div>
          </div>
        </div>
        <motion.div
          className="absolute right-12 top-10 z-0 invisible md:visible "
          style={{ y: y4, x: xChair }}
        >
          <Image
            className="right-0 absolute"
            src="/svg/chair.svg"
            width="412px"
            height="434px"
            alt="Chair"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
