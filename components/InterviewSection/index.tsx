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
  const y1 = useTransform(scrollY, [3000, 4000], [0, -50])
  const y2 = useTransform(scrollY, [3400, 4500], [0, -150])
  const y3 = useTransform(scrollY, [4000, 4800], [0, -150])
  const y4 = useTransform(scrollY, [4500, 5800], [0, 100])

  const [ref1, inView1, entry1] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true
  })
  const [ref2, inView2, entry2] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true
  })
  const [ref3, inView3, entry3] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true
  })

  const meghanVariants = {
    initial: {
      opactity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2.5,
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const harryVariants = {
    initial: {
      opactity: 0,
      y: -10
    },
    animate: {
      opacity: 1,
      y: 2,
      transition: {
        duration: 1.5,
        type: 'spring',
        stiffness: 100,
        delay: 0.4
      }
    }
  }

  const cjVariants = {
    initial: {
      opactity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  }
  return (
    <div className="relative">
      <motion.div className="min-h-screen flex items-center justify-center my-14 px-4">
        <motion.div className="absolute left-24 top-0" style={{ y: y1, x: 5 }}>
          <Image src="/svg/frame-9.svg" width="112px" height="134px" />
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-y-14 gap-x-20 grid-flow-col">
          <div className="col-span-2 sm:col-span-3 md:col-span-3 col-start-1 row-start-1 row-span-1 ">
            <motion.h1
              className="font-PlayfairDisplay text-6xl pl-10 leading-normal font-bold  z-10 text-gray-700 text-left mt-10"
              layoutId="title"
            >
              The Interview We Never Saw
            </motion.h1>
            <div className="border- border-green-200 flex flex-row">
              <div className="w-64"></div>
              <div className="flex mt-10">
                <Button
                  href="/the-interview-we-never-saw"
                  label="Meet the cast &rArr;"
                />
              </div>
            </div>
          </div>

          <motion.div
            ref={ref1}
            className="rect p-3 rounded row-start-4 col-start-1 sm:row-start-2 sm:col-start-5 row-span-2 md:col-start-3"
            variants={meghanVariants}
            initial="initial"
            animate={inView1 ? 'animate' : 'initial'}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <YearbookImage character={characters[0]} key={characters[0].id} />
          </motion.div>

          <motion.div
            ref={ref2}
            className="rect p-3 rounded row-span-2 row-start-6 col-start-1 sm:col-start-2 sm:row-start-3 md:col-start-1"
            variants={harryVariants}
            initial="initial"
            animate={inView2 ? 'animate' : 'initial'}
            exit={{ opacity: 0, transition: { duration: 1, delay: 0.1 } }}
          >
            <YearbookImage character={characters[1]} key={characters[1].id} />
          </motion.div>

          <motion.div
            ref={ref3}
            className="rect p-3 rounded row-start-8 col-start-1 row-span-2 sm:row-start-1 sm:col-start-4 md:col-start-5"
            variants={cjVariants}
            initial="initial"
            animate={inView3 ? 'animate' : 'initial'}
          >
            <YearbookImage character={characters[2]} key={characters[2].id} />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="absolute right-20 bottom-64"
        style={{ y: y2, x: 5 }}
      >
        <Image src="/svg/frame-10.svg" width="112px" height="134px" />
      </motion.div>
      <motion.div
        className="absolute right-64 bottom-14"
        style={{ y: y3, x: 5 }}
      >
        <Image src="/svg/frame-3.svg" width="146px" height="171px" />
      </motion.div>
    </div>
  )
}
