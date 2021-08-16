import { gql } from '@apollo/client'
import client from '../scripts/apollo-client'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { WaveBackground } from '../components/WaveBackground'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Markdown from 'markdown-to-jsx'
import { OrnateFrame } from '../components/OrnateFrame'

export default function Privacy({ privacy, theme }) {
  const SEO = {
    title: 'Privacy Policy Page',
    description: 'My parody videos for your entertainment... enjoy!',
    openGraph: {
      title: 'Privacy Policy Page',
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
              <OrnateFrame label={privacy.header} color={theme.primary} />
            </div>
          </div>
          <motion.div className="relative  h-">
            <WaveBackground />
          </motion.div>
        </div>
        <motion.div
          style={{ y: y1 }}
          className="w-full relative z-20 p-6 bg-white md:mt-0 py-2 md:my-20 md:w-4/6 mx-auto shadow-md border-jasmine-faded border-8 "
        >
          <Markdown className="font-prose lg:prose-xl font-PlayfairDisplay mb-20">
            {privacy.content}
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
        privacyPolicy {
          header
          content
        }
      }
    `
  })

  return {
    props: {
      privacy: data.privacyPolicy,
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
