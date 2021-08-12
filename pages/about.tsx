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
  const y1 = useTransform(scrollY, [0, 500], [0, -250])
  const y2 = useTransform(scrollY, [0, 900], [0, -20])

  return (
    <>
      <NextSeo {...SEO} />
      <div className="bg-wall overflow-x-hidden">
        <div className="" style={{ backgroundColor: theme.primary }}>
          <Navbar theme={theme.header} />
          <div className="h-64 mb-32 w-full relative">
            <div className=" flex flex-col justify-center ">
              <div className="mx-auto">
                <Image src={about.hero.url} width="732px" height="431px" />
              </div>
            </div>
            <div className="absolute left-20 right-0 -bottom-32 top-0 bg-popstar-hover bg-opacity-0 flex flex-col justify-center ">
              <OrnateFrame label={about.header} color={theme.primary} />
            </div>
          </div>
          <motion.div style={{ y: y2 }} className="relative h-64">
            <WaveBackground />

            <div className="bg-wall h-64 w-full"></div>
          </motion.div>
        </div>
        <motion.div
          style={{ y: y1 }}
          className="relative z-50 p-6 bg-white md:mt-0 py-2 my-20 w-5/6 md:w-1/2 mx-auto shadow-md border-jasmine-faded border-8 "
        >
          <div className="flex rounded-lg my-10 flex-col items-center ">
            <Image
              src={about.avatar.url}
              width="102px"
              height="145px"
              className="mx-auto border-2 border-green-50 rounded-full"
            />
          </div>
          <Markdown>{about.content}</Markdown>
          <div className=" my-10 ">
            <HookForm />
          </div>
        </motion.div>
        <motion.div className="w-full h-screen container mx-auto"></motion.div>
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
        primary: '#B3525E',
        header: { logoFill: '#fff', navBtnFill: '#fff' },
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
