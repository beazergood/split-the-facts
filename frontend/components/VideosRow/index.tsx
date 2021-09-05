import { motion } from 'framer-motion'
import Image from 'next/image'
import Moment from 'react-moment'
import { FaPlayCircle } from 'react-icons/fa'
import { GoComment } from 'react-icons/go'
import Link from 'next/link'
import React, { useState } from 'react'
import HyvorTalk from 'hyvor-talk-react'
const WEBSITE_ID = parseInt(process.env.NEXT_PUBLIC_HYVOR_WEBSITE_ID)
import classNames from 'classnames'

export interface VideosRowProps {
  videos: any
  group: {
    title: string
    action: string
    theme: string
  }
}

export const VideosRow = ({ videos, group }) => {
  const [items, setItems] = useState(videos)
  const transition = {
    duration: 2.3,
    ease: [0.6, 0.01, -0.05, 0.9],
    type: 'spring',
    stiffness: 200
  }

  return (
    <div
      className="mx-auto my-3 relative py-2 bg-popstar-hove rounded-lg w-full overflow-x-scroll no-scrollbar"
      key={group.title}
    >
      <p
        className={classNames(
          'ml-6 relative font-AveriaSerifLibre',
          {
            'text-wall': group.theme === 'dark'
          },
          {
            'text-popstar': group.theme === 'light'
          }
        )}
      >
        <span className="text-xl">{group.title}</span> -{' '}
        <span className="text-md">{items.length} videos</span>
      </p>
      {/* <div className="absolute left-3 top-36"> */}
      {/* <motion.div
          className="text-4xl"
          initial={{ x: 30 }}
          animate={{ x: 10 }}
          transition={transition}
        >
          👆
        </motion.div> */}
      {/* </div> */}
      <div className="grid cards py-3 row-start-1">
        {items.map((video) => (
          <Card
            key={video.id}
            itemId={video.id}
            title={video.title}
            published={video.published}
            fullSlug={video.fullSlug}
            thumbnail_url={video.thumbnail_image?.url}
          />
        ))}
        <style jsx>{`
          .cards {
            scroll-snap-type: x;
            scroll-padding-left: 1.5rem;
            margin-left: 5px;
            margin-right: 5px;
            grid-auto-flow: column;
            grid-auto-columns: minmax(1fr, 1fr);
            overflow-x: auto;
          }
          .cards:before,
          .cards:after {
            content: '';
            width: 10px;
          }
        `}</style>
      </div>
    </div>
  )
}

function Card({ fullSlug, title, itemId, thumbnail_url, published }) {
  return (
    <motion.div
      key={itemId}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer bg-wall border-red-300 flex-shrink-0 shadow-md hover:shadow-lg mx-4 rounded-lg"
      style={{
        width: '260px'
      }}
      tabIndex={0}
    >
      <Link href={fullSlug} passHref>
        <div className="flex flex-col items-center">
          {thumbnail_url && (
            <div className="relative">
              <Image
                src={`${thumbnail_url.slice(
                  0,
                  thumbnail_url.lastIndexOf('/') + 1
                )}thumbnail_${thumbnail_url.slice(
                  thumbnail_url.lastIndexOf('/') + 1
                )}`}
                width={270}
                height={160}
                alt="Video Thumbnail"
                className="rounded-t-lg"
              />
              <div className="absolute bottom-14 left-24">
                <FaPlayCircle className="text-white text-6xl opacity-70 " />
              </div>
            </div>
          )}

          <div className="w-full my-2 px-2 flex-1">
            <p className="text-sm font-NotoSerif flex-1 flex">{title}</p>
            <div className="text-sm font-NotoSerif text-right flex flex-row mx-2 items-center">
              <Moment format="D MMM YYYY" className="font-NotoSerif text-xs">
                {published}
              </Moment>
              <span className="flex-grow"></span>
              <HyvorTalk.CommentCount
                websiteId={WEBSITE_ID}
                id={itemId}
                mode="number"
              />
              <GoComment className="mx-1 text-lg" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
