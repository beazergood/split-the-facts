import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { gql } from '@apollo/client'
import client from '../scripts/apollo-client'
import { YearbookImage, YearbookImageThumb } from '../components/YearbookImage'
import { VideosRow } from '../components/VideosRow'
import { WaveBackground } from '../components/WaveBackground'
import { HomepageHero } from '../components/HomepageHero'
import { InterviewSection } from '../components/InterviewSection'
import { HookForm } from '../components/HookForm'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { OrnateFrame } from '../components/OrnateFrame'
import { useInView } from 'react-intersection-observer'
import useResponsive from '../hooks/responsive'
import Markdown from 'markdown-to-jsx'

import {
  useViewportScroll,
  motion,
  useTransform,
  useSpring,
  useMotionValue
} from 'framer-motion'

export default function Home({
  characters,
  charactersCast,
  homepage,
  videos,
  heroVideo,
  atTheBar,
  recentVideos,
  royalInterview,
  theGodfather,
  theme
}) {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -50])
  const x1 = useTransform(scrollY, [0, 500], [10, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const y3 = useTransform(scrollY, [100, 600], [0, -200])
  const y4 = useTransform(scrollY, [100, 800], [0, -100])
  const y5 = useTransform(scrollY, [0, 900], [0, -200])
  const y6 = useTransform(scrollY, [600, 1400], [0, -400])
  const y7 = useTransform(scrollY, [0, 1600], [0, -200])
  const y8 = useTransform(scrollY, [0, 2600], [0, -200])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  })

  const {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina
  } = useResponsive()

  const variantsFromRight = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 50
    }
  }

  return (
    <>
      <Head>
        <title>Split the Facts: Parodies and comic sketches. Enjoy!</title>
        <meta
          name="description"
          content="Split the Facts: Parodies and comic sketches. Enjoy!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-wall overflow-x-hidden">
        <div className="" style={{ backgroundColor: theme.primary }}>
          <Navbar theme={theme.header} />
          <div className="relative border- border-green-300 w-full mx-auto h-1/3">
            {/* {isDesktopOrLaptop && ( */}
            <motion.div
              className="absolute left-32 top-16 z-20"
              style={{ y: y1, x: x1 }}
            >
              <Image src="/svg/frame-3.svg" width="146px" height="171px" />
            </motion.div>
            {/* )} */}
            <HomepageHero heroVideo={homepage.hero_image} />
            <div className="w-full ">
              <WaveBackground fill="#B3525E" />
            </div>
            {/* {isDesktopOrLaptop && ( */}
            <motion.div
              className="absolute right-32 top-4 z-10"
              style={{ y: y2, x: y1 }}
            >
              <Image src="/svg/frame-6.svg" width="91px" height="102px" />
            </motion.div>
            {/* )} */}
          </div>
        </div>
        <div className="bg-nyanz h-full mx-auto  border-0 border-yellow-300">
          <div className="bg-wall py-6 relative">
            <motion.div
              className="absolute left-16 top-44"
              style={{ y: y3, x: x1 }}
            >
              <Image src="/svg/frame-10.svg" width="114px" height="150px" />
            </motion.div>

            <div className="relative z-50 bg-white md:mt-44 py-2 my-20 w-5/6 md:w-1/2 mx-auto shadow-md border-jasmine-faded border-8 ">
              <motion.h1
                className="text-4xl md:text-6xl  leading-normal font-bold relative z-10 text-black text-center mt-10"
                layoutId="title"
              >
                <span className="font-PlayfairDisplay leading-20">
                  Split! <br /> The West at War with Itself
                </span>
              </motion.h1>
              {homepage && (
                <div className="px-6 mt-10">
                  {homepage.intro_rich && (
                    <article className="prose lg:prose-lg px-6 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed text-center font-PlayfairDisplay ">
                      <Markdown>{homepage.intro_rich}</Markdown>
                    </article>
                  )}
                </div>
              )}
              <div className=" my-10 ">
                <HookForm />
              </div>
            </div>
            <motion.div
              className="absolute right-20 top-64"
              style={{ y: y4, x: 5 }}
            >
              <Image src="/svg/frame-5.svg" width="112px" height="134px" />
            </motion.div>
            <motion.div
              className="absolute right-32 bottom-16 scale-90"
              style={{ y: y5, x: 5 }}
            >
              <Image src="/svg/frame-6.svg" width="91px" height="102px" />
            </motion.div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-popstar to-popstar-hover py-14">
          <div className="absolute top-0 z-0 w-full">
            <svg
              width="1440"
              height="80"
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1440 0L0 80V0H1440Z" fill="#FAF4E6" />
            </svg>
          </div>
          <section className="h-64 w-100 bg-hero-patternz relative ">
            <motion.div
              className="absolute left-32 bottom-32"
              style={{ y: y6, x: 5 }}
            >
              <Image src="/svg/frame-7.svg" width="179px" height="200px" />
            </motion.div>
            <div className="absolute left-20 right-0 bottom-0 top-0 bg-popstar-hover bg-opacity-0 flex flex-col justify-center ">
              <OrnateFrame label="Videos" />
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
              videos={recentVideos}
              group={{ title: 'Latest Uploads', action: 'link' }}
            />
            <VideosRow
              key="2"
              videos={royalInterview}
              group={{ title: 'Royal Interview', action: 'link' }}
            />
            <VideosRow
              key="3"
              videos={atTheBar}
              group={{ title: 'At The Bar', action: 'link' }}
            />
            <VideosRow
              key="4"
              videos={theGodfather}
              group={{ title: 'The Godfather', action: 'link' }}
            />
          </div>
        </div>
        <div className="absoute top-0 z-0 w-full">
          <svg
            width="1440"
            height="80"
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1440 0L0 80V0H1440Z" fill="#FAF4E6" />
          </svg>
        </div>
        <InterviewSection characters={charactersCast} />

        <Footer theme={theme.footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  // console.log('im on the server')
  const { data } = await client.query({
    query: gql`
      query {
        characters {
          id
          name
          image {
            url
          }
          image_hover {
            url
          }
          slug
        }
        homepage {
          intro
          intro_rich
          hero_image {
            url
          }
        }
        heroVideo: video(id: "60fee84a54d42565648f4973") {
          title
          embed_url
        }
        recentVideos: videos(sort: "published:DESC", limit: 3) {
          id
          slug
          title
          published
          thumbnail_image {
            url
          }
          embed_url
          category {
            slug
          }
        }
        royalInterview: videos(
          where: { category: { slug: "royal-interview" } }
          sort: "published:DESC"
        ) {
          id
          slug
          title
          published
          thumbnail_image {
            url
          }
          embed_url
          category {
            slug
          }
        }
        atTheBar: videos(
          where: { category: { slug: "at-the-bar" } }
          sort: "published:DESC"
        ) {
          id
          slug
          title
          published
          thumbnail_image {
            url
          }
          embed_url
          category {
            slug
          }
        }
        theGodfather: videos(
          where: { category: { slug: "the-godfather" } }
          sort: "published:DESC"
        ) {
          id
          slug
          title
          published
          thumbnail_image {
            url
          }
          embed_url
          category {
            slug
          }
        }
      }
    `
  })

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

  return {
    props: {
      characters: data.characters.map((c) => {
        return { ...c, showName: false }
      }),
      charactersCast: data.characters.map((c) => {
        return { ...c, showName: true }
      }),
      homepage: data.homepage,
      recentVideos: buildFullSlug(data.recentVideos),
      royalInterview: buildFullSlug(data.royalInterview),
      atTheBar: buildFullSlug(data.atTheBar),
      theGodfather: buildFullSlug(data.theGodfather),
      heroVideo: data.heroVideo,
      theme: {
        primary: '#b3525e',
        secondary: '',
        header: { logoFill: '#fff', navBtnFill: '#fff' },
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
