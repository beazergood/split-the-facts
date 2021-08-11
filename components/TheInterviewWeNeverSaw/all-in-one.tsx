import { motion } from 'framer-motion'
import Image from 'next/image'
import { YearbookImage, HoverImage } from '../../components/YearbookImage'

export interface AllInOneProps {
  characters: Array<any>
}
export const AllInOne = ({ characters }) => {
  return (
    <motion.div className="min-h-screen flex items-center justify-center mb-10">
      <div className="absolute right-2 top-24">
        <Image src="/svg/frame-5.svg" width="112px" height="134px" />
      </div>
      <div className="absolute right-32 top-0 scale-90">
        <Image src="/svg/frame-6.svg" width="91px" height="102px" />
      </div>
      <div className="grid grid-cols-4 gap-y-20 gap-x-4 mt-32">
        {characters &&
          characters.map((character, index) => {
            return (
              <>
                {index % 2 === 0 ? (
                  <LeftsideProfile character={character} key={index} />
                ) : (
                  <RightsideProfile character={character} key={index} />
                )}
              </>
            )
          })}
      </div>
      <div className="absolute left-2 top-14">
        <Image src="/svg/frame-4.svg" width="112px" height="134px" />
      </div>
      <div className="absolute left-32 top-0 scale-90">
        <Image src="/svg/frame-10.svg" width="91px" height="102px" />
      </div>
    </motion.div>
  )
}

const LeftsideProfile = ({ character }) => {
  return (
    <>
      <motion.div
        className=" rect p- rounded col-span-1"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 1 }
        }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <YearbookImage character={character} key={character.id} />
      </motion.div>

      <div className="col-span-2 flex flex-col items-start justify-center">
        <motion.h1
          className="text-5xl text-left my-4 font-PlayfairDisplay"
          layoutId="h1"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {character.name}
        </motion.h1>
        <motion.p className="text-left text-3xl my-4 font-AlexBrush">
          {character.quip}
        </motion.p>
        <motion.p className="text-left text-xl font-AveriaSerifLibre">
          {character.about}
        </motion.p>
      </div>
      <div className="col-span-1"></div>
    </>
  )
}
const RightsideProfile = ({ character }) => {
  return (
    <>
      <div className="col-span-1"></div>
      <div className="col-span-2 flex flex-col items-start justify-center">
        <motion.h1
          className="text-5xl text-left my-4 font-PlayfairDisplay"
          layoutId="h1"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {character.name}
        </motion.h1>
        <motion.p className="text-left text-3xl my-4 font-AlexBrush">
          {character.quip}
        </motion.p>
        <motion.p className="text-left text-xl font-AveriaSerifLibre">
          {character.about}
        </motion.p>
      </div>
      <motion.div
        className=" rect p- rounded col-span-1"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 1 }
        }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <YearbookImage character={character} key={character.id} />
      </motion.div>
    </>
  )
}
