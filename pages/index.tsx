import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
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
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  })

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

      <Navbar theme={theme.header} />
      <WaveBackground fill="#B3525E" />
      <div className="relative border- border-green-300 w-full md:w-2/3 mx-auto">
        <HomepageHero characters={characters} heroVideo={heroVideo} />
      </div>
      <div className="container h-full mx-auto lg:mt-10 border-border-yellow-300">
        <main className={styles.main}>
          <motion.h1
            className="text-4xl md:text-6xl w-5/6 md:w-1/2 mx-auto leading-normal font-bold relative z-10 text-black text-center mt-10"
            layoutId="title"
          >
            <span className="font-PlayfairDisplay">
              Split! - The West at War with Itself
            </span>
          </motion.h1>
          {homepage && (
            <div className="container w-full md:w-1/2 mx-auto mt-10">
              <p className="text-lg text-black text-center font-PlayfairDisplay px-2">
                {homepage.intro}
              </p>
            </div>
          )}
          <div className="w-5/6 md:w-2/3 mx-auto mt-20 mb-44">
            <HookForm />
          </div>
          <OrnateFrame label="Videos" />
          <VideosRow
            videos={recentVideos}
            group={{ title: 'Latest Uploads', action: 'link' }}
          />
          <VideosRow
            videos={royalInterview}
            group={{ title: 'Royal Interview', action: 'link' }}
          />
          <VideosRow
            videos={atTheBar}
            group={{ title: 'At The Bar', action: 'link' }}
          />
          <VideosRow
            videos={theGodfather}
            group={{ title: 'The Godfather', action: 'link' }}
          />
          <InterviewSection characters={charactersCast} />
        </main>
      </div>
      <Footer theme={theme.footer} />
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
