import React, { useState } from 'react'
import { motion } from 'framer-motion'

export interface WaveBackgroundProps {
  fill?: string
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({ fill }) => {
  return (
    <>
      <motion.div className="w-full z-10">
        <div className="w-full">
          <div className="svg-container">
            <svg
              preserveAspectRatio="xMinYMin meet"
              viewBox="0 0 1440 145"
              className="svg-content"
            >
              <path
                d="M 0 91.675 L 48 86.375 C 96 80.675 192 70.675 288 75.675 C 384 80.675 480 102.675 576 91.675 C 672 80.675 768 38.675 864 16.975 C 960 -4.325 1056 -4.325 1152 16.975 C 1248 38.675 1344 80.675 1392 102.375 L 1440 123.675 L 1440 144.5 L 0 144.5 Z"
                fill={fill ? fill : '#faf4e6'}
              ></path>
            </svg>
          </div>
        </div>
        {/* <div className="svg-container">
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
        </div> */}
      </motion.div>
      <style jsx>{`
        .svg-container {
          display: inline-block;
          position: relative;
          width: 100%;
          padding-bottom: 10%;
          vertical-align: middle;
          margin-bottom: -2px;
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
