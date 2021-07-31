import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion'
import { gql } from '@apollo/client'
import client from '../../scripts/apollo-client'
import Link from 'next/link'
import { WaveBackground } from '../../components/WaveBackground'
import { YearbookImage, HoverImage } from '../../components/YearbookImage'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

const imgVariants = {
  initial: { opacity: 0, y: 10, skew: 1 },
  animate: {
    opacity: 1,
    y: 0,
    skew: 0,
    transition: { duration: 1.5, ease: 'easeInOut' }
  }
}
const svgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } }
}
const pathVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' }
  }
}

export default function Yearbook({ characters, theme, videos }) {
  // console.log('on the client characters = ', characters)
  return (
    <>
      <Navbar theme={theme} />
      <WaveBackground fill="#B3525E" />
      <motion.div className="container mx-auto relative z-10">
        <motion.h1
          className="text-4xl font-PlayfairDisplay text-white text-center mx-2"
          layoutId="h1"
        >
          The Interview We Never Saw
        </motion.h1>
        <h1 className="text-2xl mt-10 font-AveriaSerifLibre text-popstar-hover text-center">
          starring
        </h1>
        <motion.div className="min-h-screen flex items-center justify-center mb-10">
          <div className="grid grid-cols-3 gap-y-14 gap-x-20 grid-flow-col">
            <motion.div
              className=" rect p-3 rounded row-start-1 row-span-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              <YearbookImage character={characters[0]} key={characters[0].id} />
            </motion.div>
            <motion.div
              className=" rect p-3 rounded row-span-2 row-start-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.1 } }}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              <YearbookImage character={characters[1]} key={characters[1].id} />
            </motion.div>
            <motion.div
              className=" rect p-3 rounded row-start-1 row-span-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.2 } }}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              <YearbookImage character={characters[2]} key={characters[2].id} />
            </motion.div>
            <motion.div
              className=" rect p-3 rounded row-start-3 row-span-2 col-start-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.3 } }}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              <YearbookImage character={characters[3]} key={characters[3].id} />
            </motion.div>
            <motion.div
              className=" rect p-3 rounded col-start-2 row-start-4 row-span-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.4 } }}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              <YearbookImage character={characters[4]} key={characters[4].id} />
            </motion.div>
            <motion.div
              className=" rect p-3 rounded col-start-3 row-start-3 row-span-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              <YearbookImage character={characters[5]} key={characters[5].id} />
            </motion.div>
            <motion.div
              className=" rect p-3 rounded row-start-6 col-start-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 1.6 } }}
              exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
            >
              <YearbookImage character={characters[6]} key={characters[6].id} />
            </motion.div>
          </div>
        </motion.div>
        {/* <div className="flex flex-row w-full container">
          {characters &&
            characters.map((character) => {
              return (
                <div key={character.id} className="m-10 ">
                  <YearbookImage character={character} key={character.id} />
                </div>
              )
            })}
        </div> */}
      </motion.div>
      <Footer
        theme={theme.footer}
        playlist={{
          videos: videos,
          group: { title: 'Parody videos', action: 'open' }
        }}
      />
    </>
  )
}

export async function getStaticProps() {
  // console.log('im on the server')
  const { data } = await client.query({
    query: gql`
      query {
        characters {
          id
          name
          image {
            url
          }
          image_hover {
            url
          }
          slug
        }
        videos(limit: 3) {
          id
          title
          embed_url
          thumbnail_image {
            url
          }
        }
      }
    `
  })

  // console.log(' ===== data ', data)

  return {
    props: {
      characters: data.characters.map((c) => {
        return { ...c, showName: true }
      }),
      videos: data.videos,
      theme: {
        header: { logoFill: '#fff' },
        body: { bgFill: '#fefefe' },
        footer: {
          bgFill: '#8D3F48',
          buttonFill: '#B3525E',
          iconsFill: '#8D3F48',
          linkColour: '#fff',
          titleTagColour: '#fff',
          logoFill: '#fff'
        }
      }
    }
  }
}
