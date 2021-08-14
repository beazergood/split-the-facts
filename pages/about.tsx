import { gql } from '@apollo/client'
import client from '../scripts/apollo-client'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { WaveBackground } from '../components/WaveBackground'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Markdown from 'markdown-to-jsx'
import { HookForm } from '../components/HookForm'
import { OrnateFrame } from '../components/OrnateFrame'
import Image from 'next/image'

export default function About({ about, theme }) {
  const SEO = {
    title: 'Videos Page',
    description: 'My parody videos for your entertainment... enjoy!',
    openGraph: {
      title: 'Videos page',
      description: 'My parody videos for your entertainment... enjoy!'
    }
  }
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -250])
  const y2 = useTransform(scrollY, [0, 900], [0, -20])

  return (
    <>
      <NextSeo {...SEO} />
      <div className="bg-wall overflow-x-hidden">
        {/* <div className="bg-gradient-to-r from-cobalt to-cobalt-deep "> */}
        <div className="bg-gradient-to-r from-popstar to-popstar-hover ">
          <Navbar theme={theme.header} />
          <div className="h-44 w-full relative">
            <div className=" flex flex-col justify-center ">
              <div className="mx-auto">
                {/* <Image src={about.hero.url} width="732px" height="431px" /> */}
              </div>
            </div>
            <div className="absolute left-0 right-0 bottom-16 top-0 bg-0047AB bg-opacity-0 flex flex-col justify-center">
              <OrnateFrame label={about.header} color={theme.primary} />
            </div>
          </div>
          <motion.div className="relative  h-">
            {/* <svg
              width="1440"
              height="80"
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1440 80L0 0V80H1440Z" fill="#FAF4E6" />
            </svg> */}
            <WaveBackground />
          </motion.div>
        </div>
        <motion.div
          style={{ y: y1 }}
          className="w-full relative z-20 p-6 bg-white md:mt-0 py-2 md:my-20 md:w-4/6 mx-auto shadow-md border-jasmine-faded border-8 "
        >
          <div className="flex rounded-lg my-10 flex-col items-center ">
            <Image
              src={about.avatar.url}
              width="102px"
              height="145px"
              className="mx-auto border-2 border-green-50"
              alt="Sam Roffey"
            />
          </div>
          <h1 className="text-4xl font-semibold font-PlayfairDisplay text-center my-4">
            Sam Roffey
          </h1>
          <Markdown className="font-prose lg:prose-xl font-PlayfairDisplay mb-20">
            {about.content}
          </Markdown>
        </motion.div>
        <Footer theme={theme.footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        about {
          header
          content
          hero {
            url
          }
          avatar {
            url
          }
        }
      }
    `
  })

  return {
    props: {
      about: data.about,
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
