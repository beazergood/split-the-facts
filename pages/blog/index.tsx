import { gql } from '@apollo/client'
import client from '../../scripts/apollo-client'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { WaveBackground } from '../../components/WaveBackground'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { OrnateFrame } from '../../components/OrnateFrame'
import { Postcard } from '../../components/PostCard'

export default function BlogHome({ posts, theme }) {
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
      <div className="bg-cobalt-deep overflow-x-hidden">
        <div className="" style={{ backgroundColor: theme.primary }}>
          <Navbar theme={theme.header} />
          <div className="h-1/2 w-full relative">
            <div className="flex flex-col justify-center ">
              <OrnateFrame label="Blog" color={theme.primary} />
            </div>
          </div>
          <div className="w-full ">
            <WaveBackground fill="#013A88" />
          </div>
        </div>
        <motion.div className="w-full h-1/2">
          <div className="mt-20 flex flex-col ">
            {posts &&
              posts.map((post) => {
                return (
                  <div
                    className="w-full md:w-1/3 lg:w-1/2 flex flex-col mx-auto my-10"
                    key={post.id}
                  >
                    <div className="w-32"></div>
                    <Postcard
                      title={post.title}
                      thumb={post.image.url}
                      intro={post.description}
                      href={post.slug}
                      id={post.id}
                    />
                    <div className="w-32"></div>
                  </div>
                )
              })}
          </div>
        </motion.div>
        <Footer theme={theme.footer} />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        articles(sort: "published:DESC") {
          title
          description
          slug
          image {
            url
          }
          id
        }
      }
    `
  })

  return {
    props: {
      posts: data.articles.map((a) => {
        return { ...a, slug: 'blog/' + a.slug }
      }),
      theme: {
        primary: '#3F678D',
        header: { logoFill: '#fff', navBtnFill: '#fff' },
        body: { bgFill: '#fefefe' },
        footer: {
          bgFill: '#3F678D',
          buttonFill: '#013A88',
          iconsFill: '#3F678D',
          linkColour: '#fff',
          logoFill: '#013A88',
          titleTagColour: '#fff'
        }
      }
    }
  }
}
