import { motion, useViewportScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { YearbookImage } from '../../components/YearbookImage'

export interface AllInOneProps {
  characters: Array<any>
}
export const AllInOne = ({ characters }) => {
  const { scrollY } = useViewportScroll()

  const y1 = useTransform(scrollY, [0, 500], [10, -350])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const y3 = useTransform(scrollY, [100, 600], [0, -200])
  const y4 = useTransform(scrollY, [100, 600], [0, -200])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mb-10">
      <motion.div
        className="absolute right-2 top-24 invisible md:visible"
        style={{ y: y1, x: 0 }}
      >
        <Image
          src="/svg/frame-5.svg"
          width="112px"
          height="134px"
          alt="Ornate Frame"
        />
      </motion.div>
      <motion.div
        className="absolute right-32 top-0 scale-90 invisible md:visible"
        style={{ y: y2, x: 0 }}
      >
        <Image
          src="/svg/frame-6.svg"
          width="91px"
          height="102px"
          alt="Ornate Frame"
        />
      </motion.div>
      <div className="flex flex-col mt-32">
        {characters &&
          characters.map((character, index) => {
            console.log('index: ', index)
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
      <motion.div
        className="absolute left-2 top-32 md:top-14 invisible md:visible"
        style={{ y: y3, x: 0 }}
      >
        <Image
          src="/svg/frame-4.svg"
          width="112px"
          height="134px"
          alt="Ornate Frame"
        />
      </motion.div>
      <motion.div
        className="absolute left-32 -top-20 md:top-0 scale-90 invisible md:visible"
        style={{ y: y4, x: 0 }}
      >
        <Image
          src="/svg/frame-10.svg"
          width="91px"
          height="102px"
          alt="Ornate Frame"
        />
      </motion.div>
      <p className="border-2 p-8 font-PlayfairDisplay text-ocean text-lg text-bold  rounded-xl border-golden">
        <span className="text-3xl text-golden">*</span> it&lsquo;s perhaps worth
        pointing out in this day and age that these quotes are part of my parody
        video scripts and in no way were any real life individuals close to
        resembling these levels of honesty and transparency in their respective
        dialogues.
      </p>
    </div>
  )
}

const LeftsideProfile = ({ character, key }) => {
  return (
    <div key={key} className="flex flex-col lg:flex-row items-center mb-32">
      <motion.div
        className="flex flex-col md:flex-row lg:w-1/3 items-center my-4"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 1 }
        }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <div className="order-2 md:order-1 lg:order-2">
          <YearbookImage character={character} key={character.id} />
        </div>
        <div className="flex order-1 flex-row ml-4 lg:mr-3 items-center p-4 bg-moss-green bg-opacity-50 rounded-t-3xl rounded-br-3xl md:w-1/3 w-1/2 lg:rounded-bl-3xl lg:rounded-br-none ">
          <p className="font-AveriaSerifLibre">
            <span className="text-4xl">&quot;</span>
            <span className="text-xl ">{character.quote}</span>
            <span className="text-4xl leading-5">&quot;</span>
          </p>
        </div>
      </motion.div>
      <div className="lg:pl-10 w-9/12 sm:w-full px-3 flex lg:w-2/3 flex-col items-start justify-center ">
        <motion.h1
          className="text-4xl text-left font-PlayfairDisplay "
          layoutId="h1"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {character.name}
        </motion.h1>
        <motion.p className="text-left text-4xl my-4 font-AlexBrush">
          {character.quip}
        </motion.p>
        <motion.p className="text-left text-lg font-NotoSerif">
          {character.about}
        </motion.p>
      </div>
    </div>
  )
}
const RightsideProfile = ({ character, key }) => {
  return (
    <div key={key} className="flex flex-col lg:flex-row items-center mb-32">
      <div className="lg:pl-10 w-9/12 sm:w-full px-3 flex lg:w-2/3 flex-col items-start justify-center order-2 lg:order-1">
        <motion.h1
          className="text-4xl text-left font-PlayfairDisplay"
          layoutId="h1"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {character.name}
        </motion.h1>
        <motion.p className="text-left text-4xl my-4 font-AlexBrush">
          {character.quip}
        </motion.p>
        <motion.p className="text-left text-lg font-NotoSerif">
          {character.about}
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col md:flex-row lg:w-1/3 items-center justify-end my-4 order-1 lg:order-2 "
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 1 }
        }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <div className="order-2 ">
          <YearbookImage character={character} key={character.id} />
        </div>
        <div className="flex order-1 flex-row mr-4 lg:mr-3 items-center p-4 text-left bg-jasmine-faded rounded-t-3xl rounded-bl-3xl md:w-1/3 w-1/2 lg:rounded-bl-3xl lg:rounded-br-none ">
          <p className="font-AveriaSerifLibre">
            <span className="text-4xl">&quot;</span>
            <span className="text-xl ">{character.quote}</span>
            <span className="text-4xl leading-5">&quot;</span>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
