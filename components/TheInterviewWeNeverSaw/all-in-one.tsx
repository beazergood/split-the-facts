import { motion } from 'framer-motion'
import Image from 'next/image'
import { YearbookImage } from '../../components/YearbookImage'

export interface AllInOneProps {
  characters: Array<any>
}
export const AllInOne = ({ characters }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mb-10">
      <div className="absolute right-2 top-24">
        <Image
          src="/svg/frame-5.svg"
          width="112px"
          height="134px"
          alt="Ornate Frame"
        />
      </div>
      <div className="absolute right-32 top-0 scale-90">
        <Image
          src="/svg/frame-6.svg"
          width="91px"
          height="102px"
          alt="Ornate Frame"
        />
      </div>
      <div className="flex flex-col mt-32">
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
        <Image
          src="/svg/frame-4.svg"
          width="112px"
          height="134px"
          alt="Ornate Frame"
        />
      </div>
      <div className="absolute left-32 top-0 scale-90">
        <Image
          src="/svg/frame-10.svg"
          width="91px"
          height="102px"
          alt="Ornate Frame"
        />
      </div>
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
    <div key={key} className="flex flex-row items-center mb-32">
      <motion.div
        className="rect"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 1 }
        }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <YearbookImage character={character} key={character.id} />
      </motion.div>
      <div className="flex flex-row ml-4 items-center p-4 bg-moss-green bg-opacity-50 rounded-t-3xl rounded-br-3xl">
        <p className="font-AveriaSerifLibre">
          <span className="text-4xl">&quot;</span>
          <span className="text-xl ">{character.quote}</span>
          <span className="text-4xl leading-5">&quot;</span>
        </p>
      </div>
      <div className="pl-10 flex flex-col items-start justify-center ">
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
    <div key={key} className="flex flex-row items-center mb-32 ">
      <div className="flex flex-row items-end">
        <div className="pl-10 flex flex-col items-start justify-center ">
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
        <div className="flex flex-row mx-6 items-end bg-jasmine-faded p-3 rounded-t-3xl rounded-bl-3xl">
          <p className="font-AveriaSerifLibre">
            <span className="text-4xl">&quot;</span>
            <span className="text-xl ">{character.quote}</span>
            <span className="text-4xl">&quot;</span>
          </p>
        </div>
      </div>
      <motion.div
        className=" rect p- rounded "
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 1 }
        }}
        exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
      >
        <YearbookImage character={character} key={character.id} />
      </motion.div>
    </div>
  )
}
