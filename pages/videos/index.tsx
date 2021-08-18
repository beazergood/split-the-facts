import { gql } from '@apollo/client'
import client from '../../scripts/apollo-client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { VideosRow } from '../../components/VideosRow'
import { WaveBackground } from '../../components/WaveBackground'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { OrnateFrame } from '../../components/OrnateFrame'
import Layout from '../../components/Layout'

export default function VideosHome({ videos, theme, preview }) {
  const SEO = {
    title: 'Videos Page',
    description: 'My parody videos for your entertainment... enjoy!',
    openGraph: {
      title: 'Videos page',
      description: 'My parody videos for your entertainment... enjoy!'
    }
  }

  return (
    <>
      <Layout preview={preview}>
        <NextSeo {...SEO} />
        <div className="bg-wall overflow-x-hidden">
          <div className="" style={{ backgroundColor: theme.primary }}>
            <Navbar theme={theme.header} />
            <div className="h-1/2 w-full relative">
              {/* <p className="text-3xl text-white text-center font-NotoSerif my-10 z-20 relative">
              Videos
            </p> */}
              <div className="absolute left-32 top-16 z-0 invisible md:visible">
                <Image
                  src="/svg/frame-6.svg"
                  width="126px"
                  height="141px"
                  alt="Ornate Frame"
                />
              </div>
              <div className="absolute right-32 top-16 z-0 invisible md:visible">
                <Image
                  src="/svg/frame-9.svg"
                  width="106px"
                  height="111px"
                  alt="Ornate Frame"
                />
              </div>

              <div className="flex flex-col justify-center ">
                <OrnateFrame label="Videos" color={theme.primary} />
              </div>
            </div>
            <div className="w-full ">
              <WaveBackground />
            </div>
          </div>
          <motion.div className="w-full h-1/2">
            <div className="relative z-30 bg-wall  py-2 mt-10 w-5/6 md:w-1/2 mx-auto shadow-m border-jasmine-faded border- ">
              <p className="text-lg text-black text-center font-NotoSerif px-2">
                The Meghan, Harry and Boris impressions came about via whimsical
                enactment: I was with a friend, walking our dogs on a golf
                course in Sunningdale, Berkshire, when I pretended to conduct a
                mock interview: the premise was born.
              </p>
            </div>
            <div className="mt-20">
              <VideosRow
                videos={videos.recentVideos}
                group={{ title: 'Recent uploads', action: 'open' }}
              />
              <VideosRow
                videos={videos.royalInterview}
                group={{ title: 'Royal Interview', action: 'open' }}
              />
              <VideosRow
                videos={videos.atTheBar}
                group={{ title: 'At The Bar', action: 'open' }}
              />
              <VideosRow
                videos={videos.boris}
                group={{ title: 'Boris Addressing The Nation', action: 'open' }}
              />
              <VideosRow
                videos={videos.miscellaneous}
                group={{ title: 'Miscellaneous', action: 'open' }}
              />
            </div>
          </motion.div>
          <Footer theme={theme.footer} />
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async ({ preview = null }) => {
  // console.log('videos home preview: ', preview)
  const { data } = await client.query({
    query: gql`
      query {
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
            name
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
            name
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
            name
          }
        }
        boris: videos(
          where: { category: { slug: "parodies" } }
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
            name
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
            name
          }
        }
      }
    `
  })

  return {
    props: {
      preview,
      videos: {
        recentVideos: buildFullSlug(data.recentVideos),
        royalInterview: buildFullSlug(data.royalInterview),
        atTheBar: buildFullSlug(data.atTheBar),
        boris: buildFullSlug(data.boris),
        miscellaneous: buildFullSlug(data.miscellaneous)
      },
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
