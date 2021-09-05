import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../scripts/apollo-client'
import { Navbar } from '../components/Navbar'
import { HomepageHero } from '../components/HomepageHero'
import { IntroSection } from '../components/IntroSection'
import { InterviewSection } from '../components/InterviewSection'
import { BlogSection } from '../components/BlogSection'
import { VideosSection } from '../components/VideosSection'
import { Footer } from '../components/Footer'

export interface HomepageProps {
  heroProps: {
    cursive_header: string
    main_header: string
    above_image_text: string
    hero_image_url: string
    embedId: string
  }
}
export default function Home({
  charactersCast,
  heroProps,
  homepage,
  atTheBar,
  recentVideos,
  royalInterview,
  miscellaneous,
  theme,
  articles
}) {
  return (
    <>
      <Head>
        <title>Split the Facts! | Home</title>
        <meta
          name="description"
          content="Split the Facts: Parodies and comedic sketches for your entertainment. Enjoy!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full overflow-x-hidden">
        <div className="bg-popstar w-screen">
          <Navbar theme={theme.header} />
          <HomepageHero
            heroImageUrl={heroProps.hero_image_url}
            cursiveTitle={heroProps.hero_cursive_title}
            mainTitle={heroProps.hero_main_title}
            aboveImageText={heroProps.hero_above_image_header}
            embedId={heroProps.embed_id}
          />

          <IntroSection intro={homepage.intro_rich} theme={theme.textColor} />

          <BlogSection
            title="Blog"
            articles={articles}
            theme={theme}
            href="/blog"
          />

          <VideosSection
            title="Videos"
            href="/videos"
            videos={{ miscellaneous, recentVideos, royalInterview, atTheBar }}
            theme={theme}
          />

          <InterviewSection characters={charactersCast} />
          <Footer theme={theme.footer} />
        </div>
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
          hero_main_title
          hero_cursive_title
          hero_above_image_header
          embed_id
          hero_image {
            url
          }
          intro_rich
        }
        heroVideo: video(id: "60fee84a54d42565648f4973") {
          title
          embed_url
        }
        articles(sort: "published_at:DESC", limit: 4) {
          title
          description
          slug
          image {
            url
          }
          id
          published_at
        }
        recentVideos: videos(sort: "published:DESC", limit: 6) {
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
        miscellaneous: videos(
          where: { category: { slug: "miscellaneous" } }
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
      heroProps: {
        hero_main_title: data.homepage.hero_main_title,
        hero_cursive_title: data.homepage.hero_cursive_title,
        hero_above_image_header: data.homepage.hero_above_image_header,
        embed_id: data.homepage.embed_id,
        hero_image_url: data.homepage.hero_image.url
      },
      recentVideos: buildFullSlug(data.recentVideos),
      royalInterview: buildFullSlug(data.royalInterview),
      atTheBar: buildFullSlug(data.atTheBar),
      miscellaneous: buildFullSlug(data.miscellaneous),
      heroVideo: data.heroVideo,
      theme: {
        primary: '#b3525e',
        secondary: '#3F678D',
        header: { logoFill: '#fff', navBtnFill: '#FAF4E6' },
        body: { bgFill: '#fefefe' },
        textColor: 'light',
        footer: {
          textColor: 'light',
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
