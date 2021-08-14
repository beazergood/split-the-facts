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
      className="w-full border- py-20 border-green-500 bg-ocean relative min-h-64"
      ref={ref}
    >
      <div className="w-full absolute -top-20">
        <svg
          width="1440"
          height="80"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 80L0 0V80H1440Z" fill="#3f678d" />
        </svg>
      </div>

      <section className="h-64 w-100 bg-hero-patternz relative ">
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
      <div className="border- border-red-300 w-full ">
        <div className="flex flex-col lg:flex-row ">
          {articles &&
            articles.map((article) => {
              return (
                <div className="md:w-1/3 z-20 mx-auto" key={article.id}>
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
      <div className="absolute -bottom-20 z-10 w-full">
        <svg
          width="1440"
          height="80"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 0L0 80V0H1440Z" fill="#3F678D" />
        </svg>
      </div>
    </div>
  )
}
