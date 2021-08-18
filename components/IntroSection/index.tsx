import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { HookForm } from '../HookForm'
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'
export interface IntroSectionProps {
  intro: string
}
export const IntroSection = ({ intro }) => {
  const { scrollY } = useViewportScroll()

  const y1 = useTransform(scrollY, [0, 200], [0, -250])
  const x = useTransform(scrollY, [0, 500], [100, 50])
  const x1 = useTransform(scrollY, [0, 500], [10, 50])
  const y3 = useTransform(scrollY, [0, 400], [0, -100])
  const y4 = useTransform(scrollY, [0, 600], [0, -200])
  const y5 = useTransform(scrollY, [0, 200], [0, -100])
  const buttonFill = '#FFD56B'

  return (
    <>
      <div className="relative text-center bg-wall ">
        <motion.div
          className="absolute left-16 top-4 z-0 invisible md:visible"
          style={{ y: y3, x: x1 }}
        >
          <Image
            src="/svg/frame-10.svg"
            width="114px"
            height="150px"
            alt="Ornate Frame"
          />
        </motion.div>
        <motion.div
          className="absolute left-6 bottom-20 z-0 invisible md:visible"
          style={{ y: y3, x: x1 }}
        >
          <Image
            src="/svg/frame-6.svg"
            width="114px"
            height="150px"
            alt="Ornate Frame"
          />
        </motion.div>
        <div className="z-20 bg-white md:mt-0 py-2 md:my-20 w-full sm:w-5/6 md:w-4/6 lg:w-1/2 mx-auto shadow-md border-jasmine-faded border-8 relative">
          <motion.h1
            className="font-PlayfairDisplay text-5xl md:text-7xl font-extrabold italic tracking-tight z-10 text-gray-800 leading-20 text-center mt-10 "
            layoutId="title"
          >
            Split!
          </motion.h1>
          <motion.h2 className="font-PlayfairDisplay text-center text-gray-800 font-semibold px-4 pt-3 leading-32 text-3xl md:text-5xl">
            The West at War with Itself
          </motion.h2>
          {intro && (
            <div className="px-6 my-10">
              <article className="prose lg:prose-lg md:px-6 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed text-center font-PlayfairDisplay ">
                <Markdown>{intro}</Markdown>
              </article>
            </div>
          )}
        </div>
        <div className="relative z-20 mt-20">
          <HookForm fill={buttonFill} />
        </div>
        <div>
          <motion.div
            className="absolute right-20 top-24 z-0 invisible md:visible"
            style={{ y: y4, x: x }}
          >
            <Image
              src="/svg/frame-5.svg"
              width="112px"
              height="134px"
              alt="Ornate Frame"
            />
          </motion.div>
          <motion.div
            className="absolute right-32 md:bottom-32 z-0  invisible md:visible"
            style={{ y: y5, x: 5 }}
          >
            <Image
              src="/svg/frame-11.svg"
              width="91px"
              height="102px"
              alt="Ornate Frame"
            />
          </motion.div>
        </div>
        <div
          className="z-10 h-44 w-full"
          style={{
            backgroundImage:
              'linear-gradient(2deg, #3F678D 70%, #FAF4E6 calc(70% + 2px))'
          }}
        ></div>
      </div>
    </>
  )
}
