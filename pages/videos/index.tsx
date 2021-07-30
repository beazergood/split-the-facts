import { gql } from '@apollo/client'
import client from '../../scripts/apollo-client'
import fetch from 'isomorphic-unfetch'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Moment from 'react-moment'
import { VideoPlayer } from '../../components/VideoPlayer'
import { VideosRow } from '../../components/VideosRow'
import { WaveBackground } from '../../components/WaveBackground'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

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
      <Navbar theme={theme.header} />
      <WaveBackground fill="#B3525E" />
      <motion.div className="w-full h-scren">
        <div className="h-1/2 w-full">
          <p className="text-3xl text-center font-NotoSerif my-10 z-10">
            Videos
          </p>
        </div>

        <VideosRow
          videos={videos}
          group={{ title: 'Royal Interview', action: 'open' }}
        />
        <VideosRow
          videos={videos}
          group={{ title: 'At The Bar', action: 'open' }}
        />
        <VideosRow
          videos={videos}
          group={{ title: 'Boris Addressing The Nation', action: 'open' }}
        />
        <VideosRow
          videos={videos}
          group={{ title: 'The Godfather', action: 'open' }}
        />
      </motion.div>
      <Footer theme={theme.footer} />
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        videos(sort: "published:DESC") {
          id
          slug
          title
          published
          thumbnail_image {
            url
          }
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
      videos: data.videos,
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
