import { motion } from 'framer-motion'
import Image from 'next/image'
import Moment from 'react-moment'
import { FaPlayCircle, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'

export interface VideosRowProps {
  videos: any
  group: {
    title: string
    action: string
  }
}
export const VideosRow = ({ videos, group }) => {
  const [embedId, setEmbedId] = useState('')
  const [videoPlayerStyles, setStyles] = useState({
    display: 'none'
  })

  return (
    <div className="mx-auto y-10 " style={{ width: '95%' }}>
      <p className="text-xl my-3 relative">{group.title}</p>
      <motion.ul className="flex overflow-x-auto space-x-8 mx-auto no-scrollbar py-2">
        {videos.map((video) => {
          return (
            <motion.li
              key={video.id}
              className="cursor-pointer border- bg-white border-red-300 flex-shrink-0 shadow"
              whileHover={{ scale: 1.05 }}
              style={{ maxWidth: '300px' }}
            >
              <>
                {group.action === 'open' && (
                  <div className="flex flex-col items-center">
                    {video.thumbnail_image && (
                      <div
                        className="relative"
                        onClick={() => {
                          setStyles({ display: 'block' })
                          setEmbedId(video.embed)
                        }}
                      >
                        <Image
                          src={video.thumbnail_image.url}
                          width={270}
                          height={160}
                        />
                        <div className="absolute bottom-14 left-24 ">
                          <FaPlayCircle className="text-white text-6xl opacity-70 " />
                        </div>
                      </div>
                    )}
                    <div className="w-full my-4 px-2">
                      <p className="text-sm font-NotoSerif">{video.title}</p>
                      <Moment
                        format="D MMM YYYY"
                        className="font-NotoSerif text-xs"
                      >
                        {video.published}
                      </Moment>
                    </div>
                  </div>
                )}
                {group.action === 'link' && (
                  <Link href={video.fullSlug}>
                    <div className="flex flex-col items-center">
                      {/* <div className="flex"></div> */}
                      {/* <div className="text-right text-sm p-2 rounded-full bg-green-50 ">
                        {video.category.name}
                      </div> */}
                      {video.thumbnail_image && (
                        <div className="relative">
                          <Image
                            src={video.thumbnail_image.url}
                            width={270}
                            height={160}
                          />
                          <div className="absolute bottom-14 left-24 ">
                            <FaPlayCircle className="text-white text-6xl opacity-70 " />
                          </div>
                        </div>
                      )}
                      <div className="w-full my-4 px-2">
                        <p className="text-sm font-NotoSerif">{video.title}</p>
                        <Moment
                          format="D MMM YYYY"
                          className="font-NotoSerif text-xs"
                        >
                          {video.published}
                        </Moment>
                      </div>
                    </div>
                  </Link>
                )}
              </>
            </motion.li>
          )
        })}
      </motion.ul>
      <motion.div
        className="py-10 px-4 border- border-red-100"
        style={videoPlayerStyles}
      >
        <div className="flex flex-row">
          <div className="flex-grow"></div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaTimes
              className="text-4xl m-2 text-gray-500 hover:text-popstar"
              onClick={() => {
                setStyles({ display: 'none' })
                console.log('done: ', videoPlayerStyles)
              }}
            />
          </motion.div>
        </div>

        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </motion.div>
      <style jsx>{`
        .video-responsive {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          height: 0;
        }

        .video-responsive iframe {
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      `}</style>
    </div>
  )
}
