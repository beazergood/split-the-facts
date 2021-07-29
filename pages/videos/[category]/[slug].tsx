import { gql } from '@apollo/client'
import client from '../../../scripts/apollo-client'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Video({ video }) {
  console.log(video)

  const SEO = {
    title: `Split the facts | ${video.title}`,
    description: video.description,
    openGraph: {
      title: `Split The Facts! | ${video.title}`,
      description: video.description
    }
  }
  return (
    <>
      <NextSeo {...SEO} />
      <motion.div className="border- border-green-300 mx-auto w-1/2 h-1/3 absolut-z-2 ">
        {video.hero_image && (
          <Image
            src={video.hero_image?.url}
            width={620}
            height={650}
            layout="responsive"
            className="mx-auto"
          />
        )}
      </motion.div>
      <motion.div className="container mx-auto p-10 relative bg-white bg-opacity-1 ">
        <p className="text-2xl">{video.title}</p>
        <p className="text-lg">{video.description}</p>

        <motion.div className="container border- border-red-300 mx-auto my-10 w-2/3">
          {video.oembed && (
            <div
              dangerouslySetInnerHTML={{ __html: video.oembed.rawData.html }}
              className="w-full h-full"
            ></div>
          )}
        </motion.div>
        <motion.div className="container border- border-red-300 mx-auto my-10 w-1/2">
          {video.content && (
            <p
              dangerouslySetInnerHTML={{ __html: video.content }}
              className="text-lg"
            ></p>
          )}
        </motion.div>
      </motion.div>
    </>
  )
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        videos {
          slug
          id
          category {
            slug
          }
        }
      }
    `
  })

  const paths = data.videos.map((video) => {
    return {
      params: {
        category: video.category.slug,
        slug: video.slug
      }
    }
  })
  console.log('paths: ', paths)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  console.log('params: ', slug)

  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env

  const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/videos?slug=${slug}`)
  const data = await res.json()
  const parsedData = data.map((vid) => {
    return {
      ...vid,
      oembed: vid.oembed ? JSON.parse(vid.oembed) : ''
    }
  })

  return {
    props: {
      video: parsedData[0]
    }
  }
}
