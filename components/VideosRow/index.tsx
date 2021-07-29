import { motion } from 'framer-motion'
import Image from 'next/image'
import Moment from 'react-moment'

export interface VideosRowProps {
  videos: any
  group: any
}
export const VideosRow = ({ videos, group }) => {
  return (
    <div className="mx-auto my-10" style={{ width: '95%' }}>
      <p className="text-xl my-3 relative">{group.title}</p>
      <motion.ul className="flex overflow-x-auto space-x-8 mx-auto no-scrollbar py-2 bg-white bg-shadow">
        {videos.map((video) => {
          return (
            <motion.li
              key={video.id}
              className="cursor-pointer border- border-red-300 flex-shrink-0 shadow"
              whileHover={{ scale: 1.05 }}
              style={{ maxWidth: '300px' }}
            >
              <>
                <div className="flex flex-col items-center">
                  {/* <div className="flex"></div> */}
                  {/* <div className="text-right text-sm p-2 rounded-full bg-green-50 ">
                        {video.category.name}
                      </div> */}
                  {video.thumbnail_image && (
                    <Image
                      src={video.thumbnail_image.url}
                      width={270}
                      height={160}
                    />
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
              </>
            </motion.li>
          )
        })}
      </motion.ul>
    </div>
  )
}
