import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HookForm } from '../HookForm'
import { FaYoutube, FaPatreon, FaInstagram, FaReddit } from 'react-icons/fa'
import { SiGmail, SiTiktok } from 'react-icons/si'
import styles from '../../styles/Home.module.css'
import packageInfo from '../../package.json'

export interface FooterProps {
  footerFill: string
}

export const Footer: React.FC<FooterProps> = ({ footerFill }) => {
  //   const [fill, setFill] = useState(logoFill)

  const pathVariants = {
    initial: {
      fill: 'red'
    },
    animate: {
      fill: 'green'
    }
  }

  return (
    <>
      <div className="bsolute bottom- z-0 w-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="284">
          <path
            d="M 0 91.675 L 48 86.375 C 96 80.675 192 70.675 288 75.675 C 384 80.675 480 102.675 576 91.675 C 672 80.675 768 38.675 864 16.975 C 960 -4.325 1056 -4.325 1152 16.975 C 1248 38.675 1344 80.675 1392 102.375 L 1440 123.675 L 1440 283.675 L 0 283.675 Z"
            fill={footerFill}
          ></path>
        </svg>
      </div>

      <div style={{ background: footerFill }}>
        <div className="w-0 px-5 md:w-66 lg:w-1/2 mx-auto">
          <div className="flex flex-col md:flex-row w-full border- rounded-md bg-white">
            <a
              href="https://www.youtube.com/channel/UCjRNMsglFYFwNsnOWIOgt1Q"
              className="flex flex-row md:flex-col lg:flex-row shadow-sm p-4 hover:shadow-lg md:w-1/2 w-100 bg-popstar"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-row md:flex-col"
              >
                <div className="w-12 h-12">
                  <FaYoutube className="text-4xl mr-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl">
                    My YouTube Channel &rarr; <br />
                  </p>
                  <p className="text-white text-md">
                    @Split! - The West at War with Itself
                  </p>
                </div>
              </motion.div>
            </a>

            <a
              href="https://www.patreon.com/user/posts?u=56069659"
              className="flex flex-row md:flex-col lg:flex-row shadow-sm p-4 md:w-1/2 hover:shadow-lg w-100 bg-popstar"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-row md:flex-col "
              >
                <div className="w-12 h-12">
                  <FaPatreon className="text-2xl mr-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl">Support my Patreon &rarr; </p>
                  <p className="text-white">@Sam Roffey</p>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
        <div className="w-100 px-2 md:w-3/5 lg:w-1/3 mx-auto my-10 border-0 border-red-400">
          <HookForm />
        </div>
        <div className="w-full px-2 md:w-5/6 lg:w-1/3 mx-auto border- md:border-red-400 text-left lg:text-center">
          <span className="flex flex-row h-10 content-center space-x-4">
            <SiGmail className="text-xl mr-4" />
            <p className={styles.title}>Email: &nbsp;</p>
            <a href="mailto:split.thefacts@gmail.com" className="text-gray-100">
              split.thefacts@gmail.com
            </a>
          </span>
          <span className="flex flex-row h-10 content-center space-x-4">
            <FaInstagram className="text-xl mr-4" />
            <p className={styles.title}>Instagram: &nbsp;</p>
            <a
              href="https://www.instagram.com/split_the_facts"
              className="text-gray-100"
            >
              @split_the_facts
            </a>
          </span>
          <span className="flex flex-row h-10 content-center space-x-4">
            <SiTiktok className="text-xl mr-4" />
            <p className={styles.title}>TikTok: &nbsp;</p>
            <a
              href="https://www.tiktok.com/@split_the_facts?lang=en"
              className="text-gray-100"
            >
              @split_the_facts
            </a>
          </span>
          <span className="flex flex-row h-10 content-center space-x-4">
            <FaReddit className="text-xl mr-4" />
            <p className={styles.title}>Reddit: &nbsp; </p>
            <a
              href="https://www.reddit.com/user/SplitTheFacts"
              className="text-gray-100"
            >
              @SplitTheFacts
            </a>
          </span>
        </div>
        <div className="w-90 mt-10  z-10 mx-auto bottom-10">
          <span className="block text-center text-sm text-popstar">
            &copy; 2021 Sam Roffey
          </span>
          <span className="inline-block text-right ml-10 text-sm text-popstar">
            {packageInfo.version}
          </span>
        </div>{' '}
      </div>
    </>
  )
}
