import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
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
  const { scrollY } = useViewportScroll()
  const y6 = useTransform(scrollY, [0, 2300], [0, 200])
  const y5 = useTransform(scrollY, [0, 2300], [0, -200])

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
      <section className="h-32 w-100 relative">
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
      <div className="w-full px-2 z-20 ">
        <div className="cards grid gap-8 overflow-x-scroll mt-10 no-scrollbar md:-ml-96">
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
                />
              )
            })}
        </div>
      </div>
      {/* <div
        className="absolute -bottom-10 h-72 w-full z-0"
        style={{
          backgroundImage:
            'linear-gradient(176deg, #3F678D 70%, #B3525E calc(70% + 2px))'
        }}
      ></div> */}
      <style jsx>{`
        .cards {
          /* scroll-snap-type: x;
          scroll-padding-left: 1.5rem; */
          /* display: grid; */

          /* grid-auto-flow: column; */
          /* grid-template-columns: repeat(2, calc(50% - 40px)); */
          /* grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          grid-template-rows: minmax(1fr); */
          margin-left: -300px;
          padding: 16px;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          grid-auto-flow: column;
          grid-auto-columns: minmax(350px, 1fr);
          overflow-x: auto;
        }
        .cards:before,
        .cards:after {
          content: '';
          width: 10px;
        }
      `}</style>
    </div>
  )
}
