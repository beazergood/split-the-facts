import fetch from 'isomorphic-unfetch'
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
const WEBSITE_ID = parseInt(process.env.NEXT_PUBLIC_HYVOR_WEBSITE_ID)
import HyvorTalk from 'hyvor-talk-react'
import { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'

export default function Video({ theme, video, preview }) {
  const SEO = {
    title: `Split the facts | ${video.title}`,
    description: video.description,
    openGraph: {
      title: `Split The Facts! | ${video.title}`,
      description: video.description
    }
  }

  const [currentPercent, setCurrentPercent] = useState(null)
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
      currentPercent >= 70
        ? '#B3525E'
        : currentPercent >= 45
        ? '#FFD56B'
        : currentPercent >= 20
        ? '#0047AB'
        : '#0047AB'
    )
  }, [currentPercent])
  return (
    <>
      <Layout preview={preview}>
        <NextSeo {...SEO} />
        <div className="bg-wall">
          <div style={{ backgroundColor: theme.primary }}>
            <Navbar theme={theme.header} />
            {video.embed_url && (
              <>
                <div className="md:w-2/3 mx-auto w-full">
                  <div className="embed-container" role="main">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embed_url}?autoplay=1`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="mx-auto shadow-2xl"
                    ></iframe>

                    <style jsx>{`
                      .embed-container {
                        position: relative;
                        max-width: 80%;
                        margin: 0 auto;
                        padding-bottom: 56.25%;
                        height: 0;
                        overflow: hidden;
                        max-width: 100%;
                      }
                      .embed-container iframe,
                      .embed-container object,
                      .embed-container embed {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                      }
                    `}</style>
                  </div>
                </div>
                {/* <div className="video-responsive relative mx-auto">
                <iframe
                  width="640"
                  height="370"
                  frameBorder="0"
                  src={`https://www.youtube.com/embed/${video.embed_url}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mx-auto shadow-2xl"
                  title="Embedded youtube"
                />
              </div> */}
              </>
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
            <motion.div className="container border- border-red-300 mx-auto md:w-5/6">
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
                bottom: '20px',
                left: '20px',
                width: '120px',
                height: '120px',
                color: 'white'
              }}
            >
              <svg className="progress-icon" viewBox="0 0 60 60">
                <motion.path
                  fill={currentPercent === 100 ? '#B3525E' : 'none'}
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
                {currentPercent}
              </motion.div>
            </div>
            <motion.div className="container border- border-red-300 mx-auto my-10 md:w-1/2 w-full">
              {video.content && (
                <article
                  className="prose lg:prose-xl px-4 lg:px-0 mt-12 font-PlayfairDisplay text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed"
                  role="main"
                >
                  <Markdown>{video.content}</Markdown>
                </article>
              )}
            </motion.div>
          </motion.div>
          <div className="w-full md:w-1/2 mx-auto" role="feed">
            <HyvorTalk.Embed
              websiteId={WEBSITE_ID}
              id={video.id}
              loadMode="scroll"
            />
          </div>
          <Footer theme={theme.footer} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env
  const res = await fetch(
    `${NEXT_PUBLIC_STRAPI_API_URL}/videos?&_publicationState=preview`
  )
  const data = await res.json()

  const paths = data.map((video) => {
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

export const getStaticProps = async ({ params, preview = null }) => {
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env
  const res = await fetch(
    `${NEXT_PUBLIC_STRAPI_API_URL}/videos?slug=${params.slug}&_publicationState=preview`
  )
  const data = await res.json()

  console.log('data[0].id: ', data[0].id)

  return {
    props: {
      preview,
      video: data[0],
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
