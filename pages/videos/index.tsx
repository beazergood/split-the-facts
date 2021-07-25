import fetch from 'isomorphic-unfetch'
import { m, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function VideosHome({ videos }) {
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
      <motion.div className="container">
        <p className="text-3xl text-center">Videos</p>
        <motion.ul className="w-2/3 mx-auto">
          {videos.map((video) => {
            return (
              <Link
                href={`/videos/[category]/[slug]`}
                key={video.id}
                as={`/videos/${video.category.slug}/${video.slug}`}
              >
                <motion.li
                  key={video.id}
                  className="py-2 cursor-pointer border-2 border-red-300"
                >
                  <>
                    <Image
                      src={video.thumbnail_image.url}
                      width={40}
                      height={40}
                    />
                    <a className="ml-2 prose-2xl text-2xl">{video.title}</a>
                  </>
                </motion.li>
              </Link>
            )
          })}
        </motion.ul>
        {videos.length}
      </motion.div>
    </>
  )
}

export const getServerSideProps = async () => {
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/videos`)
  const data = await res.json()

  return {
    props: {
      videos: data
    }
  }
}
