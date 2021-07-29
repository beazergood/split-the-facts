import { gql } from '@apollo/client'
import client from '../../scripts/apollo-client'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion'
import { YearbookImage } from '../../components/YearbookImage'
import Link from 'next/link'

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
const transition = { duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] }
export default function CharacterDetail({ character }) {
  // console.log('on the client character detail component = ', character)
  return (
    <div className="container mx-auto">
      <motion.main
        className={styles.main}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Link href={'/the-interview-we-never-saw'}>BACK</Link>
        <div className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-3 gap-y-14 gap-x-10 grid-flow-col">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.1, ...transition }
              }}
              className="bg-white rect p-3 rounded row-start-1 row-span-3"
            >
              <YearbookImage character={character} key={character.id} />
            </motion.div>
            <div className="col-span-2">
              <motion.h1
                className="text-3xl text-left my-4"
                layoutId="h1"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {character.name}
              </motion.h1>
              <motion.p className="text-left text-2xl my-4">
                {character.quip}
              </motion.p>
              <motion.p className="text-left text-xl">
                {character.about}
              </motion.p>
            </div>
          </div>
        </div>
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
      </motion.main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        characters {
          slug
        }
      }
    `
  })
  console.group('getting data for static paths: ', data.characters)
  const paths = data.characters.map((character) => {
    return {
      params: {
        slug: character.slug
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params: { slug } }) {
  console.log('im on the server need to fetch characters ', slug)

  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env
  const res = await fetch(
    `${NEXT_PUBLIC_STRAPI_API_URL}/characters?slug=${slug}`
  )
  const data = await res.json()
  // console.log(' ===== data ', data)

  return {
    props: {
      character: data[0]
    },
    revalidate: 10
  }
}
