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
      className="w-100  border-t-2 pb-20 border-ocean bg-ocean relative min-h-64 "
      ref={ref}
    >
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
      <div
        className="absolute -bottom-10 z-10 h-72 w-full "
        style={{
          backgroundImage:
            'linear-gradient(176deg, #3F678D 70%, #B3525E calc(70% + 2px))'
        }}
      ></div>
    </div>
  )
}
