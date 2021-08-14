import { gql } from '@apollo/client'
import client from '../../scripts/apollo-client'
import { NextSeo } from 'next-seo'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
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

  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -250])

  return (
    <>
      <NextSeo {...SEO} />
      <div className="bg-wall">
        <div className="gradient-to-r from-bg-popstar to-bg-popstar-hover overflow-x-hidden">
          <div className="" style={{ backgroundColor: theme.primary }}>
            <Navbar theme={theme.header} />
            <div className="h-1/2 w-full relative">
              <div className="flex flex-col justify-center ">
                <OrnateFrame label="Blog" color={theme.primary} />
              </div>
            </div>
            <div className="w-full ">
              <WaveBackground />
            </div>
          </div>
          <motion.div className="w-full h-1/2" style={{ y: y1, x: 0 }}>
            <div className="mt-10 flex flex-col ">
              {posts &&
                posts.map((post) => {
                  return (
                    <div
                      className="w-full md:w-1/3 lg:w-1/3 flex flex-col mx-auto my-10"
                      key={post.id}
                    >
                      <div className="w-32"></div>
                      <Postcard
                        title={post.title}
                        thumb={post.image.url}
                        intro={post.description}
                        href={post.slug}
                        id={post.id}
                        published={post.published_at}
                      />
                      <div className="w-32"></div>
                    </div>
                  )
                })}
            </div>
          </motion.div>
          <Footer theme={theme.footer} />
        </div>
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

          published_at
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
        primary: '#b3525e',
        secondary: '#3F678D',
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
