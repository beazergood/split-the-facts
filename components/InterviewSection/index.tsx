import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { YearbookImage } from '../YearbookImage'
import { OrnateFrame } from '../OrnateFrame'
import { Button } from '../Button'

export interface InterviewSectionProps {
  characters: any
}
export const InterviewSection = ({ characters }) => {
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
    <div>
      <motion.div className="min-h-screen flex items-center justify-center my-44 px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-y-14 gap-x-20 grid-flow-col">
          <div className="col-span-2 sm:col-span-3 md:col-span-3 col-start-1 row-start-1 row-span-1 ">
            <motion.h1
              className="font-PlayfairDisplay text-6xl pl-10 leading-normal font-bold  z-10 text-gray-700 text-left mt-10"
              layoutId="title"
            >
              The Interview We Never Saw
            </motion.h1>
          </div>
          <div className="col-span-1 col-start-1 row-start-3 relative mt-10 gap-x-3 md:row-start-2 md:col-start-1">
            <OrnateFrame label="Starring" />
          </div>
          <div className="col-span-2 col-start-2 row-start-3 relative mt-10 gap-x-3 sm:col-start-5 sm:row-start-3 ">
            <div className="mx-auto border- border-red-400 flex">
              <Button
                href="/the-interview-we-never-saw"
                label="Meet the cast"
              />
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
    </div>
  )
}
