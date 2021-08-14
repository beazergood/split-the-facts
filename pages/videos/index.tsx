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

export default function VideosHome({ videos, theme }) {
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
          <div className="mt-20">
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
              videos={videos.theGodfather}
              group={{ title: 'The Godfather', action: 'open' }}
            />
          </div>
        </motion.div>
        <Footer theme={theme.footer} />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
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
            name
          }
        }
      }
    `
  })

  return {
    props: {
      videos: {
        royalInterview: buildFullSlug(data.royalInterview),
        atTheBar: buildFullSlug(data.atTheBar),
        boris: buildFullSlug(data.boris),
        theGodfather: buildFullSlug(data.theGodfather)
      },
      theme: {
        primary: '#94A661',
        header: { logoFill: '#fff', navBtnFill: '#fff' },
        body: { bgFill: '#fefefe' },
        footer: {
          bgFill: '#94A661',
          buttonFill: '#E9F7CA',
          iconsFill: '#94A661',
          linkColour: '#0c0c0c',
          logoFill: '#E9F7CA',
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
