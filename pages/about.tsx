import { gql } from '@apollo/client'
import client from '../scripts/apollo-client'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { WaveBackground } from '../components/WaveBackground'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function About({ about, theme }) {
  const SEO = {
    title: 'Videos Page',
    description: 'My parody videos for your entertainment... enjoy!',
    openGraph: {
      title: 'Videos page',
      description: 'My parody videos for your entertainment... enjoy!'
    }
  }

  return (
    <>
      <NextSeo {...SEO} />
      <Navbar theme={theme.header} />
      <WaveBackground fill="#B3525E" />
      <motion.div className="w-full h-screen container mx-auto">
        <div className="h-1/3 w-full">
          <p className="text-3xl text-center  my-10 z-30 relative text-white font-PlayfairDisplay">
            {about.header}
          </p>
        </div>

        <p className="w-2/3 mx-auto">{about.content}</p>
      </motion.div>
      <Footer theme={theme.footer} />
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
        }
      }
    `
  })

  return {
    props: {
      about: data.about,
      theme: {
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
