import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '../Button'
import { OrnateFrame } from '../OrnateFrame'
import { Postcard } from '../PostCard'

export interface Article {
  title: string
  description: string
  image: {
    url: string
  }
}
export interface BlogSectionProps {
  title: string
  articles: Array<Article>
  theme: any
  href: string
}

export const BlogSection = ({ title, articles, theme, href }) => {
  const transition = {
    duration: 1.3,
    ease: [0.6, 0.01, -0.05, 0.9],
    type: 'spring',
    stiffness: 300
  }

  const svgVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } }
  }
  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } }
  }
  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: 'easeInOut' }
    }
  }
  const { scrollY } = useViewportScroll()
  const y6 = useTransform(scrollY, [0, 2300], [0, 200])
  const y5 = useTransform(scrollY, [0, 2300], [0, -200])
  const y7 = useTransform(scrollY, [0, 2300], [0, -100])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div
      className="w-100  border-t-2 pb-20 border-ocean bg-ocean  relative min-h-64 py-20"
      ref={ref}
    >
      <div className="w-full absolute -top-20 ">
        <div className="svg-container-1">
          {/* wave */}
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            className="svg-content"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1440 80L0 0V80H1440Z" fill="#3F678D" />
          </svg>
        </div>
        <style jsx>{`
          .svg-container-1 {
            display: inline-block;
            position: relative;
            width: 100%;
            padding-bottom: 25%;
            vertical-align: middle;
            margin-top: -85px;
            overflow: hidden;
          }

          .svg-content {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
          }
        `}</style>
      </div>

      <section className="h-64 w-100 relative ">
        <motion.div
          className="absolute left-32 bottom-32 invisible md:visible"
          style={{ y: y6, x: 5 }}
        >
          <Image
            src="/svg/frame-7.svg"
            width="120px"
            height="130px"
            alt="Ornate Frame"
          />
        </motion.div>
        <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-center">
          <OrnateFrame label={title} color={theme.secondary} />
        </div>
        <motion.div
          className="absolute right-32 bottom-0 invisible md:visible"
          style={{ y: y5, x: 5 }}
        >
          <Image
            src="/svg/frame-4.svg"
            width="157px"
            height="175px"
            alt="Ornate Frame"
          />
        </motion.div>
      </section>
      <div className="w-full px-2">
        <div className="flex flex-col lg:flex-row ">
          {articles &&
            articles.map((article) => {
              return (
                <div
                  className="md:w-1/3 sm:w-2/3 lg:w-1/4 z-20 mx-auto"
                  key={article.id}
                >
                  <Postcard
                    title={article.title}
                    thumb={article.image.url}
                    intro={article.description}
                    href={article.slug}
                    id={article.id}
                    published={article.published_at}
                  />
                </div>
              )
            })}
        </div>
      </div>
      <div className="z-30 w-100">
        <div className="svg-container-2">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            className="svg-content-2 "
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <path d="M1440 0L0 80V0H1440Z" fill="#ff0000" /> */}
            <path d="M1440 0L0 80V0H1440Z" fill="#3F678D" />
          </svg>
          <style jsx>{`
            .svg-container-2 {
              display: inline-block;
              position: relative;
              width: 100%;
              height: 80px;
              z-index: 10;
              vertical-align: middle;
              margin-bottom: -250px;
              overflow: hidden;
            }

            .svg-content-2 {
              display: inline-block;
              position: absolute;
              bottom: 0;
              left: 0;
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}
