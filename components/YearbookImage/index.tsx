import { motion } from 'framer-motion'
import Link from 'next/link'
const imgVariants = {
  initial: { opacity: 1, y: 10, skew: 1 },
  animate: {
    opacity: 1,
    y: 0,
    skew: 0,
    transition: { duration: 1.5, ease: 'easeInOut' }
  }
}
const svgVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } }
}
const pathVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' }
  }
}
const transition = { duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] }

export const YearbookImage = ({ character }) => {
  return (
    <>
      <Link
        href={`/the-interview-we-never-saw/[slug]`}
        as={`/the-interview-we-never-saw/${character.slug}`}
      >
        {/* <AnimatePresence initial={false} exitBeforeEnter> */}
        <motion.div
          className="mx-auto border- border-yellow-200 relative cursor-pointer w-full"
          whileHover={{ scale: 1.03 }}
          key={character.slug}
          transition={transition}
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          style={{ width: '235px', height: '369px' }}
          variants={imgVariants}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="235"
            height="369"
            variants={svgVariants}
            initial="initial"
            animate="animate"
            className="mx-auto relative z-10"
          >
            <motion.path
              d="M 230.5 364.5 L 4.2 364.5 L 4.2 42.5 L 46.3 42.5 L 46.5 40.5 C 48.2 19.2 78.1 5.2 117.4 5.2 C 157.1 5.2 186.3 18.8 188.2 40.5 L 188.4 42.5 L 230.5 42.5 Z M 192.2 38.2 C 188.5 15.3 158.1 1 117.4 1 C 76.4 1 46.1 15.3 42.5 38.2 L 0 38.2 L 0 368.7 L 234.8 368.7 L 234.8 38.2 Z"
              fill="rgb(85,53,15)"
            />
            <motion.path
              d="M 226.2 47.8 L 226.2 359.9 L 8.5 359.9 L 8.5 47.8 L 46.5 47.8 L 50.8 47.6 L 50.7 43.3 C 50.7 23.7 79.4 10.6 117.4 10.6 C 143.1 10.6 164.2 15.1 176.3 27.2 C 181.4 32.3 184 37.9 184 43.5 L 184 47.8 Z"
              fill="transparent"
              stroke-width="2"
              stroke="#55350f"
              stroke-miterlimit="10"
              variants={pathVariants}
            />
            <g transform="translate(54.4 13.8)">
              <motion.path
                d="M 116.4 25.6 C 113.4 25.6 110.9 27.4 110.9 29.4 C 110.9 31.6 112.9 32.4 114.4 32.4 C 115.9 32.4 117.4 31.9 117.4 30.4 C 117.4 29 116.1 28.8 115.9 28.6 C 116.2 28.1 116.9 27.7 117.7 27.7 C 119 27.7 122.5 27.9 122.5 31.5 C 122.5 34.7 119.2 36.5 115.2 36.5 C 108.7 36.5 104.4 33.3 92.4 24.3 L 92.7 24.1 C 94.7 24.6 97 25.2 98.2 25.2 C 102.2 25.2 107.2 23.4 107.2 18.4 C 107.2 13.6 102.7 11.6 98.2 11.6 C 93.7 11.6 90.9 14.3 90.9 16.3 C 90.9 18.3 92.4 19.3 94.7 19.3 C 96.7 19.3 97.5 18.2 97.5 17.3 C 97.5 16.4 97 15.2 94.5 15.3 C 95 14.4 96 13.3 98.3 13.3 C 101.8 13.3 105.1 15.1 105.1 18.3 C 105.1 21.7 102.1 23.5 98.6 23.5 C 97.3 23.5 95.1 23.1 92.6 22.4 C 89.8 21.7 82.6 20.4 77.8 20.4 C 73.3 20.4 65 22.4 62.6 28.5 L 62.5 28.5 C 60 22.4 51.7 20.3 47 20.3 C 42.5 20.3 35.2 21.7 32.5 22.5 C 30 23.2 27.7 23.6 26.5 23.6 C 23 23.6 20 21.8 20 18.4 C 20 15.2 23.3 13.4 26.5 13.4 C 29 13.4 30 14.5 30.5 15.4 C 28 15.2 27.5 16.5 27.5 17.4 C 27.5 18.3 28.3 19.4 30.3 19.4 C 32.6 19.4 34.1 18.3 34.1 16.4 C 34.1 14.4 31.3 11.7 26.6 11.7 C 22.3 11.7 17.8 13.7 17.8 18.5 C 17.8 23.5 22.6 25.3 26.6 25.3 C 28.1 25.3 30.4 24.8 32.1 24.2 L 32.4 24.4 C 20.6 33.4 16.4 36.6 9.8 36.6 C 5.8 36.6 2.5 34.8 2.5 31.6 C 2.5 28 6 27.8 7.3 27.8 C 8.1 27.8 8.8 28.2 9.1 28.7 C 8.6 28.9 7.6 29.1 7.6 30.5 C 7.6 31.8 9.1 32.5 10.6 32.5 C 12.1 32.5 14.1 31.6 14.1 29.5 C 14.1 27.5 11.6 25.7 8.3 25.7 C 1 25.7 0 29.8 0 31.6 C 0 33 1 38.2 9.8 38.2 C 19.3 38.2 26.3 30.7 32.4 26.6 L 32.7 26.8 C 31.9 28.2 31.7 29.7 31.7 31.3 C 31.7 32.9 33.2 38.1 40.5 38.1 C 46.5 38.1 48.8 34.5 48.8 32.9 C 48.8 30.6 46.5 27.9 42.8 27.9 C 39.5 27.9 38.3 29.5 38.3 30.6 C 38.3 31.9 38.8 33.1 40.8 33.1 C 42.6 33.1 43.3 32.2 43.3 30.9 C 43.3 30.5 43.3 30.2 43 29.8 C 44 29.8 46.5 30.3 46.5 32.8 C 46.5 35 43.7 36.6 40.7 36.6 C 37.4 36.6 33.9 35.3 33.9 30.9 C 33.9 27 36.4 22.5 47.2 22.5 C 51 22.5 60.7 24.3 60.7 32.2 C 60.7 36.1 57.9 37 55.7 37 C 53.9 37 52.7 36.3 52.7 34.8 C 52.7 34.1 53.5 33.4 54.5 33.2 C 54.5 33.9 55 34.6 56 34.6 C 57 34.6 57.8 33.7 57.8 33 C 57.8 32.3 57 31 55 31 C 53.5 31 50.7 32.1 50.7 34.4 C 50.7 37.3 53.5 38.2 55.7 38.2 C 59 38.2 61.7 36.9 62.6 34.1 L 62.9 34.1 C 63.8 37 66.5 38.2 69.5 38.2 C 72 38.2 74.8 37.3 74.8 34.4 C 74.8 32.1 72 31.2 70.5 31.2 C 68.5 31.2 67.7 32.3 67.7 33 C 67.7 33.7 68.5 34.6 69.5 34.6 C 70.3 34.6 71 33.9 71 33.2 C 72 33.4 72.8 34.1 72.8 35 C 72.8 36.3 71.3 37 69.5 37 C 67.5 37 64.7 36.1 64.7 32.2 C 64.7 24.3 74.5 22.5 78 22.5 C 89 22.5 91.5 27 91.5 31.1 C 91.5 35.4 88 36.7 84.7 36.7 C 81.7 36.7 78.9 35.1 78.9 32.9 C 78.9 30.4 81.2 29.9 82.2 29.9 C 82.2 30.3 81.9 30.8 82.2 31 C 82.2 32.3 83 33.2 84.7 33.2 C 86.5 33.2 87.2 31.9 87.2 30.7 C 87.2 29.6 85.9 28 82.7 28 C 78.9 28 76.7 30.7 76.7 33 C 76.7 34.8 79 38.2 85 38.2 C 92.3 38.2 93.8 33 93.8 31.4 C 93.8 29.8 93.5 28.3 92.5 26.9 L 92.8 26.7 C 98.8 30.8 106.1 38.3 115.3 38.3 C 124.1 38.3 125.3 33.1 125.3 31.7 C 124.9 29.7 123.9 25.6 116.4 25.6 Z"
                fill="#55350f"
              />
              <motion.path
                d="M 67.197 17.4 C 67.197 14.7 72.397 7.2 77.697 7.2 C 79.697 7.2 81.197 8.5 81.197 9.9 C 81.197 12.6 76.697 13.3 73.397 14.6 C 70.397 15.5 68.397 17.2 67.397 18.5 C 67.197 18.2 67.197 17.8 67.197 17.4 Z M 60.697 15 C 60.197 13.1 57.197 8.1 57.197 5.9 C 57.197 3.8 57.997 0 62.197 0 C 66.497 0 66.997 3.7 66.997 5.9 C 66.997 8.2 64.197 13 63.697 15 C 63.197 16.8 62.197 21.8 62.197 21.8 C 62.197 21.8 61.197 16.8 60.697 15 Z M 44.195 9.9 C 44.195 8.5 45.695 7.2 47.695 7.2 C 52.895 7.2 58.195 14.7 58.195 17.4 C 58.195 17.8 58.195 18.1 57.895 18.5 C 56.895 17.3 54.895 15.5 51.895 14.4 C 48.595 13.3 44.095 12.6 44.195 9.9 Z"
                fill="#55350f"
              />
            </g>
          </motion.svg>
          <HoverImage
            src={character.image.url}
            srcOnHover={character.image_hover.url}
            alt={character.name}
          />

          {character.showName && (
            <p className="text-sm text-center my-5">{character.name}</p>
          )}
        </motion.div>
        {/* </AnimatePresence> */}
      </Link>
    </>
  )
}

export const HoverImage = ({ src, srcOnHover, alt }) => {
  return (
    <>
      <motion.img
        src={src}
        alt={alt}
        onMouseOver={(e): void => {
          // srcOnHover && (e.currentTarget.src = srcOnHover)
        }}
        onMouseOut={(e): void => {
          // srcOnHover && (e.currentTarget.src = src || '')
        }}
        variants={imgVariants}
        initial="initial"
        animate="animate"
        style={{
          position: 'absolute',
          top: '60px',
          left: '15px',
          zIndex: 30,
          width: '205px',
          height: '290px'
        }}
        className="yearbookImg"
      />
      <style jsx>{`
        .yearbookImg {
          border: 1px solid red;
          -webkit-transition: all ease 1s;
          -moz-transition: all ease 1s;
          -o-transition: all ease 1s;
          -ms-transition: all ease 1s;
          transition: all ease 1s;
        }
      `}</style>
    </>
  )
}
