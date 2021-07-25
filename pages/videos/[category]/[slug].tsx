import { gql } from '@apollo/client'
import client from '../../../scripts/apollo-client'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Video({ video }) {
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

      <motion.div className="container mx-auto p-10">
        <p className="text-2xl">{video.title}</p>
        <p className="text-lg">{video.description}</p>
        <motion.div className="border- border-green-300 w-1/2 mx-auto">
          {video.hero_image && (
            <Image
              src={video.hero_image?.url}
              width={520}
              height={350}
              layout="fixed"
              className="mx-auto"
            />
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
  console.log('!_!_!_!_!_!_!_! data', data)
  return {
    props: {
      video: data[0]
    }
  }
}
