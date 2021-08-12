import { gql } from '@apollo/client'
import client from '../../scripts/apollo-client'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { WaveBackground } from '../../components/WaveBackground'
import Markdown from 'markdown-to-jsx'
import HyvorTalk from 'hyvor-talk-react'
const WEBSITE_ID = process.env.NEXT_PUBLIC_HYVOR_WEBSITE_ID
export default function Article({ theme, article }) {
  // console.log(video)

  const SEO = {
    title: `Split the facts | ${article.title}`,
    description: article.description,
    openGraph: {
      title: `Split The Facts! | ${article.title}`,
      description: article.description
    }
  }
  return (
    <>
      <NextSeo {...SEO} />
      <div className="bg-wall">
        <div className="" style={{ backgroundColor: theme.primary }}>
          <Navbar theme={theme.header} />
          <div className="flex justify-center items-center flex-col py-2 bg-EAEFB1 rounded-t-md">
            <Image src={article.image.url} width="400px" height="380px" />
          </div>
          <WaveBackground />
        </div>

        {/* <motion.div className="border-2 border-green-300 mx-auto w-1/2 h-1/3 absolut-z-2 ">
        {video.hero_image && (
          <Image
            src={video.hero_image?.url}
            width={620}
            height={650}
            layout="responsive"
            className="mx-auto"
          />
        )}
      </motion.div> */}
        <motion.div className="container mx-auto relative  ">
          <motion.div className="container border- border-red-300 mx-auto w-5/6">
            <div className="my-16">
              <p className="text-3xl mb-2 font-PlayfairDisplay text-center">
                {article.title}
              </p>
            </div>
          </motion.div>
          <motion.div className="container border- border-red-300 mx-auto my-10 w-1/2">
            {article.content && (
              <article className="prose lg:prose-xl px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                <Markdown>{article.content}</Markdown>
              </article>
            )}
          </motion.div>
        </motion.div>
        <div className="w-1/2 mx-auto">
          <HyvorTalk.Embed
            websiteId={WEBSITE_ID}
            id={article.id}
            loadMode="scroll"
          />
        </div>
        <Footer theme={theme.footer} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        articles {
          title
          description
          slug
          image {
            url
          }
          id
        }
      }
    `
  })

  const paths = data.articles.map((a) => {
    return {
      params: {
        slug: a.slug
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env

  const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/articles?slug=${slug}`)
  const data = await res.json()

  return {
    props: {
      article: data[0],
      theme: {
        primary: '#E9F7CA',
        header: { logoFill: '#94A661' },
        body: { bgFill: '#fefefe' },
        footer: {
          logoFill: '#94A661',
          bgFill: '#E9F7CA',
          buttonFill: '#94A661',
          iconsFill: '#E9F7CA',
          linkColour: '#E9F7CA'
        }
      }
    }
  }
}
