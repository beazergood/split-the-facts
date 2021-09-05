import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { OrnateFrame } from '../OrnateFrame'
import { Postcard } from '../PostCard'
import useResponsive from '../../hooks/responsive'
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
  const { scrollY } = useViewportScroll()
  const y6 = useTransform(scrollY, [0, 2300], [0, 200])
  const y5 = useTransform(scrollY, [0, 2300], [0, -200])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true
  })

  const deviceSize = useResponsive()
  return (
    <div
      className="w-100 border-t-2  border-ocean bg-ocean relative min-h-64"
      ref={ref}
    >
      <section className="h-32 w-100 relative z-10">
        <motion.div
          className="absolute left-32 bottom-32 invisible md:visible"
          style={{ y: y6, x: 5 }}
        >
          <Image
            src="/svg/frame-7.svg"
            width="120px"
            height="130px"
            layout="responsive"
            alt="Ornate Frame"
          />
        </motion.div>
        <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-center">
          <OrnateFrame label={title} color={theme.secondary} href="/blog" />
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

      <div className="w-full px-2 z-20">
        <div className="cards grid gap-5 mt-10 ">
          {articles &&
            articles.map((article) => {
              return (
                <Postcard
                  key={article.id}
                  title={article.title}
                  thumb={article.image.url}
                  intro={article.description}
                  href={article.slug}
                  id={article.id}
                  published={article.published_at}
                  width={deviceSize.isTabletOrMobile ? '311px' : '450px'}
                />
              )
            })}
        </div>
      </div>

      <div
        className="absolute -bottom-24 h-72 w-full z-10"
        style={{
          backgroundImage:
            'linear-gradient(176deg, #3F678D 70%, #B3525E calc(70% + 2px))'
        }}
      ></div>

      <style jsx>{`
        .cards {
          scroll-snap-type: x;
          scroll-padding-left: 1.5rem;
          /* padding: 16px; */
          grid-auto-flow: column;
          grid-auto-columns: minmax(1fr, 1fr);
          overflow-x: auto;
          z-index: 20;
          position: relative;
        }
        .cards:before,
        .cards:after {
          content: '';
          width: 0px;
        }
      `}</style>
    </div>
  )
}
