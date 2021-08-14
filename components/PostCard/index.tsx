import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '../Button'
import HyvorTalk from 'hyvor-talk-react'
const WEBSITE_ID = parseInt(process.env.NEXT_PUBLIC_HYVOR_WEBSITE_ID)

export interface PostcardProps {
  id: string
  title: string
  intro: string
  thumb: string
  href: string
  color?: string
}

export const Postcard = ({ title, intro, thumb, color = '', href, id }) => {
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
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div
      className="flex flex-col relative bg-wall shadow-lg rounded-md w-full mx-auto my-6 pb-4"
      ref={ref}
      key={id}
    >
      <div className="flex w-full  justify-center items-center flex-col bg-cobalt rounded-t-xl">
        <div className="h-64 w-full relative rounded-t-xl">
          <Image src={thumb} layout="fill" alt="Blog Post Thumbnail" />
        </div>
      </div>
      <div className="px-4 py-5 h-64 flex flex-col justify-between">
        <h3 className="text-3xl font-PlayfairDisplay">{title}</h3>
        <p className="my-4 font-AveriaSerifLibre text-xl">{intro}</p>
        <HyvorTalk.CommentCount websiteId={WEBSITE_ID} id={id} />

        <div className="flex flex-col items-center ">
          <Button label="Read post" href={href} />
        </div>
      </div>
    </div>
  )
}
