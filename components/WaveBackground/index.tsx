import React, { useState } from 'react'
import { motion } from 'framer-motion'

export interface WaveBackgroundProps {
  fill: string
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({ fill }) => {
  return (
    <>
      <motion.div className="w-full absolute top-0 z-0 border- border-red-300">
        <div className="svg-container">
          <svg
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 1440 320"
            className="svg-content"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M 0 192 L 48 197.3 C 96 203 192 213 288 208 C 384 203 480 181 576 192 C 672 203 768 245 864 266.7 C 960 288 1056 288 1152 266.7 C 1248 245 1344 203 1392 181.3 L 1440 160 L 1440 0 L 0 0 Z"
                fill={fill}
              ></path>
            </g>
          </svg>
        </div>
      </motion.div>
      <style jsx>{`
        .svg-container {
          display: inline-block;
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          vertical-align: middle;
          overflow: hidden;
        }

        .svg-content {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  )
}
