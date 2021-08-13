import { gql } from '@apollo/client'
import client from '../../../scripts/apollo-client'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring
} from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Navbar } from '../../../components/Navbar'
import { Footer } from '../../../components/Footer'
import { WaveBackground } from '../../../components/WaveBackground'
import Markdown from 'markdown-to-jsx'
const WEBSITE_ID = process.env.NEXT_PUBLIC_HYVOR_WEBSITE_ID
import HyvorTalk from 'hyvor-talk-react'
import { useState, useEffect } from 'react'

export default function Video({ theme, video }) {
  // console.log(video)

  const SEO = {
    title: `Split the facts | ${video.title}`,
    description: video.description,
    openGraph: {
      title: `Split The Facts! | ${video.title}`,
      description: video.description
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
        setCurrentPercent(Math.trunc(yRange.get()))
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
          {video.embed_url && (
            <div className="video-responsive mx-auto">
              <iframe
                width="1000"
                height="580"
                src={`https://www.youtube.com/embed/${video.embed_url}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mx-auto shadow-2xl"
                title="Embedded youtube"
              />
            </div>
          )}
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
                {video.title}
              </p>
              <p className="text-lg text-center font-AveriaSerifLibre">
                {video.description}
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
            {video.content && (
              <article className="prose lg:prose-xl px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                <Markdown>{video.content}</Markdown>
              </article>
            )}
          </motion.div>
        </motion.div>
        <div className="w-1/2 mx-auto">
          <HyvorTalk.Embed
            websiteId={WEBSITE_ID}
            id={video.id}
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
        videos {
          slug
          id
          category {
            slug
          }
          embed_url
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
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env

  const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/videos?slug=${slug}`)
  const data = await res.json()

  return {
    props: {
      video: data[0],
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
