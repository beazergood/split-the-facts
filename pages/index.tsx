import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../scripts/apollo-client'
import { useInView } from 'react-intersection-observer'
import { Navbar } from '../components/Navbar'
import { HomepageHero } from '../components/HomepageHero'
import { IntroSection } from '../components/IntroSection'
import { InterviewSection } from '../components/InterviewSection'
import { BlogSection } from '../components/BlogSection'
import { VideosSection } from '../components/VideosSection'
import { Footer } from '../components/Footer'
import { useViewportScroll, useTransform } from 'framer-motion'

export default function Home({
  charactersCast,
  homepage,
  atTheBar,
  recentVideos,
  royalInterview,
  theGodfather,
  theme,
  articles
}) {
  const { scrollY } = useViewportScroll()

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
        <div className="relative" style={{ backgroundColor: theme.primary }}>
          <Navbar theme={theme.header} />
          <HomepageHero heroVideo={homepage.hero_image} />
        </div>

        <div className="bg-wall py-0 relative z-10 mt-28 pt-4">
          <IntroSection intro={homepage.intro_rich} />

          <div className="md:mt-44">
            <BlogSection
              title="Writing"
              articles={articles}
              theme={theme}
              href="/blog"
            />
          </div>
          <VideosSection
            title="Videos"
            href="/videos"
            videos={{ theGodfather, recentVideos, royalInterview, atTheBar }}
            theme={theme}
          />

          <InterviewSection characters={charactersCast} />
          <Footer theme={theme.footer} />
        </div>
      </div>
      {/* </div> */}
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
        articles(sort: "published:DESC", limit: 2) {
          title
          description
          slug
          image {
            url
          }
          id
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
      articles: data.articles.map((a) => {
        return { ...a, slug: 'blog/' + a.slug }
      }),
      homepage: data.homepage,
      recentVideos: buildFullSlug(data.recentVideos),
      royalInterview: buildFullSlug(data.royalInterview),
      atTheBar: buildFullSlug(data.atTheBar),
      theGodfather: buildFullSlug(data.theGodfather),
      heroVideo: data.heroVideo,
      theme: {
        primary: '#b3525e',
        secondary: '#3F678D',
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
