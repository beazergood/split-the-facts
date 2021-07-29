import { gql } from '@apollo/client'
import client from '../../scripts/apollo-client'
import fetch from 'isomorphic-unfetch'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Moment from 'react-moment'
import { VideoPlayer } from '../../components/VideoPlayer'
import { WaveBackground } from '../../components/WaveBackground'
import { Button } from '../../components/Button'

export interface LandingHomeProps {
  videos: any
}

export default function LandingHome({ videos }) {
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
      <WaveBackground fill="#e9f7ca" />
      <motion.div>
        <VideoPlayer
          cursiveTitle="Questions from"
          title="The Hallporters Chair"
        />

        <h1 className="text-4xl text-center my-10 font-PlayfairDisplay">
          ☝️ Website Exclusive Video
        </h1>
        <div className="font-AveriaSerifLibre text-xl w-1/3 mx-auto text-center">
          <p>Welcome to my new website!</p>
          <p>
            This will serve as the main hub for all of my content and projects.
            I appreciate all of the encouraging feedback and support I've
            received since starting my videos earlier this year.
          </p>
          <p>
            I'm excited to have this as my creative outlet and welcome you all
            along for the ride. Enjoy!
          </p>
          <div className="my-4">
            <Button label="Entré" />
          </div>
        </div>
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
      logoFill: '#94A661',
      footerFill: '#e9f7ca'
    }
  }
}
