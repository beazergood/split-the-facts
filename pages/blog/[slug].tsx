import fetch from 'isomorphic-unfetch'
import Moment from 'react-moment'
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
  useTransform
} from 'framer-motion'
import Layout from '../../components/Layout'

export default function Article({ theme, article, preview }) {
  const SEO = {
    title: `Split the facts! | ${article.title}`,
    description: article.description,
    openGraph: {
      title: `Split The Facts! | ${article.title}`,
      description: article.description
    }
  }

  const [currentPercent, setCurrentPercent] = useState(0)
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
          <div className="" style={{ backgroundColor: theme.primary }}>
            <Navbar theme={theme.header} />
            <WaveBackground />
          </div>

          <motion.div className="container mx-auto relative  ">
            <motion.div className="container border- border-red-300 mx-auto w-5/6">
              <div className="my-16">
                <p className="text-5xl mb-2 font-PlayfairDisplay text-center">
                  {article.title}
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

            <motion.div className="container border- border-red-300 mx-auto my-10 md:w-1/2">
              {article.content && (
                <article className="prose lg:prose-xl font-PlayfairDisplay px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                  <Markdown>{article.content}</Markdown>
                  <div className="text-right">
                    <p>
                      {article.author.name}
                      <br />
                      <Moment
                        format="D MMM YYYY"
                        className="font-NotoSerif text-xs"
                      >
                        {article.published}
                      </Moment>
                    </p>
                  </div>
                </article>
              )}
            </motion.div>
          </motion.div>
          <div className="w-full px-2 md:px-0 md:w-1/2 mx-auto">
            <HyvorTalk.Embed
              websiteId={WEBSITE_ID}
              id={article.id}
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
    `${NEXT_PUBLIC_STRAPI_API_URL}/articles?_publicationState=preview`
  )
  const data = await res.json()

  const paths = data.map((a) => {
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

export const getStaticProps = async ({ params, preview = null }) => {
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env
  const res = await fetch(
    `${NEXT_PUBLIC_STRAPI_API_URL}/articles?slug=${params.slug}&_publicationState=preview`
  )
  const data = await res.json()

  return {
    props: {
      preview,
      article: data[0],
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
