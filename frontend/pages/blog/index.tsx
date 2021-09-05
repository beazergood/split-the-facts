import { NextSeo } from 'next-seo'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { WaveBackground } from '../../components/WaveBackground'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { OrnateFrame } from '../../components/OrnateFrame'
import { Postcard } from '../../components/PostCard'
import Layout from '../../components/Layout'
export default function BlogHome({ posts, theme, preview }) {
  const SEO = {
    title: 'Split the facts! | Blog Home',
    description: 'A blog by Sam Roffey',
    openGraph: {
      title: 'Split the facts! | Blog Home',
      description: 'A blog by Sam Roffey'
    }
  }

  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -250])

  return (
    <>
      <Layout preview={preview}>
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
            <motion.div
              className="w-full h-1/2 px-3"
              style={{ y: y1, x: 0 }}
              role="main"
            >
              <div className="mt-10 flex flex-col ">
                {posts &&
                  posts.map((post) => {
                    return (
                      <div
                        className="w-full md:w-1/3 lg:w-1/3 flex flex-col mx-auto my-4 md:my-10"
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
                          width="auto"
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
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params, preview = null }) => {
  const { NEXT_PUBLIC_STRAPI_API_URL } = process.env
  const res = await fetch(
    `${NEXT_PUBLIC_STRAPI_API_URL}/articles${
      preview ? '?_publicationState=preview' : ''
    }`
  )
  const data = await res.json()
  return {
    props: {
      preview,
      posts: blogPostsDescending(data),
      theme: {
        primary: '#b3525e',
        secondary: '#3F678D',
        header: { logoFill: '#fff', navBtnFill: '#FAF4E6' },
        body: { bgFill: '#fefefe' },
        footer: {
          textColor: 'dark',
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

const blogPostsDescending = (data) => {
  return data
    .map((a) => {
      return { ...a, slug: 'blog/' + a.slug }
    })
    .sort((a, b) => {
      return (
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      )
    })
}
