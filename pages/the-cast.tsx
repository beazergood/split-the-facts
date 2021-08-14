import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { gql } from '@apollo/client'
import client from '../scripts/apollo-client'
import Image from 'next/image'
import { WaveBackground } from '../components/WaveBackground'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PhotoCollage, AllInOne } from '../components/TheInterviewWeNeverSaw'

const imgVariants = {
  initial: { opacity: 0, y: 10, skew: 1 },
  animate: {
    opacity: 1,
    y: 0,
    skew: 0,
    transition: { duration: 1.5, ease: 'easeInOut' }
  }
}
const svgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } }
}
const pathVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' }
  }
}

export default function Yearbook({ characters, theme, videos }) {
  const { scrollY } = useViewportScroll()

  const y1 = useTransform(scrollY, [0, 500], [10, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const y3 = useTransform(scrollY, [100, 600], [0, -200])

  return (
    <>
      <div className="bg-wall">
        <div className="relative" style={{ backgroundColor: theme.primary }}>
          <Navbar theme={theme.header} />
          <div className="relative border- border-green-300 w-full mx-auto h-1/3">
            <div className="absolute left-32 top-16 z-0 invisible md:visible">
              <Image
                src="/svg/frame-3.svg"
                width="146px"
                height="171px"
                alt="Ornate Frame"
              />
            </div>

            <motion.h1
              className="font-PlayfairDisplay text-6xl pl-10 leading-normal font-bold text-popstar-hover text-center mx-2"
              layoutId="h1"
            >
              The Interview We Never Saw
            </motion.h1>
            <h1 className="text-2xl mt-10 font-AveriaSerifLibre text-popstar-hover font-extrabold text-center">
              starring
            </h1>

            <div className="w-full ">
              <WaveBackground />
            </div>
            {/* {isDesktopOrLaptop && ( */}
            <motion.div
              style={{ y: y1, x: 0 }}
              className="absolute right-16 top-4 z-30 invisible md:visible"
            >
              <Image
                src="/svg/frame-9.svg"
                width="182px"
                height="203px"
                alt="Ornate Frame"
              />
            </motion.div>
            {/* )} */}
          </div>
        </div>
        <motion.div className="container mx-auto relative z-10">
          <div className="relative z-50 bg-white  py-2 my-20 w-5/6 md:w-1/2 mx-auto shadow-md border-jasmine-faded border-8 ">
            <p className="text-lg text-black text-center font-NotoSerif px-2">
              The Meghan, Harry and Boris impressions came about via whimsical
              enactment: I was with a friend, walking our dogs on a golf course
              in Sunningdale, Berkshire, when I pretended to conduct a mock
              interview: the premise was born.
            </p>
          </div>
          {/* <PhotoCollage characters={characters} /> */}
          <AllInOne characters={characters} />
        </motion.div>
        <Footer
          theme={theme.footer}
          playlist={{
            videos: videos,
            group: { title: 'Parody videos', action: 'open' }
          }}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  // console.log('im on the server')
  const buildFullSlug = (videos, category = '') => {
    if (category) {
      return videos.map((video) => {
        return {
          ...video,
          fullSlug: `/videos/${category}/${video.slug}`
        }
      })
    } else {
      return videos.map((video) => {
        const cat = video.category.slug
        return {
          ...video,
          fullSlug: `/videos/${cat}/${video.slug}`
        }
      })
    }
  }

  const { data } = await client.query({
    query: gql`
      query {
        characters {
          id
          name
          quip
          about
          image {
            url
          }
          image_hover {
            url
          }
          slug
          quote
        }
        videos(limit: 3, sort: "published:DESC") {
          id
          title
          embed_url
          thumbnail_image {
            url
          }
          slug
          category {
            slug
          }
        }
      }
    `
  })

  // console.log(' ===== data ', data)

  return {
    props: {
      characters: data.characters.map((c) => {
        return { ...c, showName: false }
      }),
      videos: buildFullSlug(data.videos),
      theme: {
        primary: '#b3525e',
        secondary: '#3F678D',
        header: { logoFill: '#fff', navBtnFill: '#FAF4E6' },
        body: { bgFill: '#fefefe' },
        footer: {
          bgFill: '#8D3F48',
          buttonFill: '#B3525E',
          iconsFill: '#8D3F48',
          linkColour: '#fff',
          logoFill: '#B3525E',
          titleTagColour: '#fff'
        }
      }
    }
  }
}
