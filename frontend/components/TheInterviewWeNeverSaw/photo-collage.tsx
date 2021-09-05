import { motion } from 'framer-motion'
import Image from 'next/image'
import { YearbookImage } from '../../components/YearbookImage'

export interface PhotoCollageProps {
  characters: Array<any>
}
export const PhotoCollage = ({ characters }) => {
  return (
    <motion.div className="min-h-screen flex items-center justify-center mb-10">
      <div className="absolute right-2 top-64">
        <Image
          src="/svg/frame-5.svg"
          width="112px"
          height="134px"
          alt="Ornate Frame"
        />
      </div>
      <div className="absolute right-32 bottom-16 scale-90">
        <Image
          src="/svg/frame-6.svg"
          width="91px"
          height="102px"
          alt="Ornate Frame"
        />
      </div>
      <div className="grid grid-cols-3 gap-y-14 gap-x-20 grid-flow-col">
        <motion.div
          className=" rect p-3 rounded row-start-1 row-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
        >
          <YearbookImage character={characters[0]} key={characters[0].id} />
        </motion.div>
        <motion.div
          className=" rect p-3 rounded row-span-2 row-start-2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1.1 }
          }}
          exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
        >
          <YearbookImage character={characters[1]} key={characters[1].id} />
        </motion.div>
        <motion.div
          className=" rect p-3 rounded row-start-1 row-span-2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1.2 }
          }}
          exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
        >
          <YearbookImage character={characters[2]} key={characters[2].id} />
        </motion.div>
        <motion.div
          className=" rect p-3 rounded row-start-3 row-span-2 col-start-1"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1.3 }
          }}
          exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
        >
          <YearbookImage character={characters[3]} key={characters[3].id} />
        </motion.div>
        <motion.div
          className=" rect p-3 rounded col-start-2 row-start-4 row-span-2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1.4 }
          }}
          exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
        >
          <YearbookImage character={characters[4]} key={characters[4].id} />
        </motion.div>
        <motion.div
          className=" rect p-3 rounded col-start-3 row-start-3 row-span-2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1.5 }
          }}
          exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
        >
          <YearbookImage character={characters[5]} key={characters[5].id} />
        </motion.div>
        <motion.div
          className=" rect p-3 rounded row-start-6 col-start-2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1.6 }
          }}
          exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
        >
          <YearbookImage character={characters[6]} key={characters[6].id} />
        </motion.div>
      </div>
      <div className="absolute left-2 top-64">
        <Image
          src="/svg/frame-4.svg"
          width="112px"
          height="134px"
          alt="Ornate Frame"
        />
      </div>
      <div className="absolute left-32 bottom-16 scale-90">
        <Image
          src="/svg/frame-10.svg"
          width="91px"
          height="102px"
          alt="Ornate Frame"
        />
      </div>
    </motion.div>
  )
}
