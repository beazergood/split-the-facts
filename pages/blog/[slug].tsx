import { gql } from '@apollo/client'
import client from '../../scripts/apollo-client'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { WaveBackground } from '../../components/WaveBackground'
import Markdown from 'markdown-to-jsx'
import HyvorTalk from 'hyvor-talk-react'
const WEBSITE_ID = parseInt(process.env.NEXT_PUBLIC_HYVOR_WEBSITE_ID)
import { useEffect, useState } from 'react'
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  useMotionValue
} from 'framer-motion'

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

  const [currentPrecent, setCurrentPercent] = useState(null)
  const [currentProgressColor, setCurrentProgressColor] = useState(null)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })

  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(yRange.current))
      }),
    [yRange]
  )

  useEffect(() => {
    setCurrentProgressColor(
      currentPrecent >= 90
        ? '#E9F7CA'
        : currentPrecent >= 45
        ? '#3F678D'
        : currentPrecent >= 20
        ? '#0047AB'
        : '#0047AB'
    )
  }, [currentPrecent])

  return (
    <>
      <NextSeo {...SEO} />
      <div className="bg-wall">
        <div className="" style={{ backgroundColor: theme.primary }}>
          <Navbar theme={theme.header} />
          <div className="flex justify-center items-center flex-col py-2 bg-EAEFB1 rounded-t-md">
            <Link href="/blog">&lArr;Back to blog home</Link>
            <Image src={article.image.url} width="400px" height="380px" />
          </div>
          <WaveBackground />
        </div>

        <motion.div className="container mx-auto relative  ">
          <motion.div className="container border- border-red-300 mx-auto w-5/6">
            <div className="my-16">
              <p className="text-3xl mb-2 font-PlayfairDisplay text-center">
                {article.title}
              </p>
            </div>
          </motion.div>
          <div
            style={{
              position: 'fixed',
              top: '20px',
              left: '20px',
              width: '120px',
              height: '120px',
              color: 'white'
            }}
          >
            <svg className="progress-icon" viewBox="0 0 60 60">
              <motion.path
                fill={currentPrecent === 100 ? '#E9F7CA' : 'none'}
                strokeWidth="8"
                stroke={currentProgressColor}
                strokeDasharray="0 1"
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{
                  pathLength,
                  rotate: 90,
                  translateX: 5,
                  translateY: 5,
                  opacity: pathLength,
                  scaleX: -1
                }}
              />
            </svg>
            <motion.div
              style={{
                position: 'absolute',
                top: '40px',
                left: '40px',
                width: '120px',
                height: '120px',
                color: 'black',
                opacity: pathLength
              }}
            >
              {currentPrecent}
            </motion.div>
          </div>

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
