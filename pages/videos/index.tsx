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

export default function VideosHome({ videos }) {
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
      <WaveBackground fill="#B3525E" />
      <motion.div className="w-full h-scren">
        <div className="h-1/2 w-full">
          <p className="text-3xl text-center font-NotoSerif my-10 z-10">
            Videos
          </p>
        </div>

        <VideosRow videos={videos} group={{ title: 'Royal Interview' }} />
        <VideosRow videos={videos} group={{ title: 'At The Bar' }} />
        <VideosRow
          videos={videos}
          group={{ title: 'Boris Addressing The Nation' }}
        />
        <VideosRow videos={videos} group={{ title: 'The Godfather' }} />
      </motion.div>
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
  const parsedData = data.videos.map((vid) => {
    return {
      ...vid,
      oembed: vid.oembed ? JSON.parse(vid.oembed) : ''
    }
  })

  return {
    props: {
      videos: parsedData,
      logoFill: '#EAEFB1',
      footerFill: '#B3525E'
    }
  }
}
