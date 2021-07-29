import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { gql } from '@apollo/client'
import client from '../scripts/apollo-client'
import { YearbookImage, YearbookImageThumb } from '../components/YearbookImage'
import { VideosRow } from '../components/VideosRow'
import { WaveBackground } from '../components/WaveBackground'
import { HomepageHero } from '../components/HomepageHero'
import { HookForm } from '../components/HookForm'

export default function Home({ characters, charactersCast, homepage, videos }) {
  return (
    <>
      <Head>
        <title>Split the Facts: Parodies and comic sketches. Enjoy!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WaveBackground fill="#B3525E" />

      <HomepageHero characters={characters} />
      <div className="container mx-auto">
        <main className={styles.main}>
          <motion.h1
            className=" text-6xl w-1/2 mx-auto leading-normal font-bold relative z-10 text-black text-center mt-10"
            layoutId="title"
          >
            <span className="font-PlayfairDisplay italic">Split! -</span>
            <span className="font-PlayfairDisplay">
              The West at War with Itself
            </span>
          </motion.h1>
          <div className="w-1/3 mx-auto my-10">
            <HookForm />
          </div>
          {homepage && (
            <div className="container w-1/2 mx-auto mt-10">
              <p className="text-lg text-black text-center font-PlayfairDisplay">
                {homepage.intro}
              </p>
            </div>
          )}

          <div className=" w-1/3 mx-auto my-20 relative h-46 mt-48">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="312"
              height="145"
              className="mx-auto  h-46"
            >
              <path
                d="M 156.022 3.802 C 156.421 3.643 156.775 4.096 157.286 5.143 C 161.561 13.91 174.249 19.245 190.852 19.258 C 199.051 19.265 214.903 17.306 227.498 14.731 C 239.566 12.264 242.482 11.699 245.329 11.277 C 270.722 7.513 286.882 13.447 292.613 28.639 C 295.066 35.143 293.432 43.547 288.764 48.429 L 288.042 49.184 L 290.123 49.287 C 300.569 49.805 307.313 58.694 308.333 72.472 C 307.313 86.251 300.569 95.139 290.123 95.657 L 288.042 95.76 L 288.764 96.516 C 293.432 101.398 295.066 109.802 292.613 116.306 C 286.882 131.498 270.722 137.432 245.329 133.668 C 242.482 133.246 239.566 132.681 227.498 130.213 C 214.903 127.638 199.051 125.68 190.852 125.687 C 174.249 125.7 161.561 131.035 157.286 139.802 C 156.775 140.849 156.421 141.302 156.022 141.143 C 155.622 141.302 155.268 140.849 154.757 139.802 C 150.482 131.035 137.794 125.7 121.191 125.687 C 112.992 125.68 97.14 127.638 84.545 130.213 C 72.477 132.681 69.561 133.245 66.714 133.668 C 41.321 137.432 25.161 131.498 19.43 116.306 C 16.977 109.802 18.611 101.398 23.279 96.516 L 24.001 95.76 L 21.92 95.657 C 11.474 95.139 4.73 86.251 3.71 72.472 C 4.73 58.694 11.474 49.805 21.92 49.287 L 24.001 49.184 L 23.279 48.429 C 18.611 43.547 16.977 35.143 19.43 28.639 C 25.161 13.447 41.321 7.513 66.714 11.277 C 69.561 11.699 72.477 12.264 84.545 14.731 C 97.14 17.306 112.992 19.265 121.191 19.258 C 137.794 19.245 150.482 13.91 154.757 5.143 C 155.268 4.096 155.622 3.642 156.022 3.802 Z M 299.668 72.473 C 299.053 67.745 297.284 63.938 294.389 60.526 C 292.232 57.984 288.772 57.377 286.188 59.088 C 285.335 59.653 285.326 59.775 286.119 60.062 C 290.062 61.489 289.855 68.546 285.834 69.74 C 278.592 71.892 272.451 61.48 277.234 55.158 C 277.632 54.632 277.957 54.171 277.957 54.133 C 277.957 54.095 277.022 54.035 275.88 53.999 C 265.626 53.673 263.178 38.785 273.374 38.763 C 276.066 38.757 278.875 41.028 278.876 43.21 C 278.876 44.617 281.797 42.048 282.917 39.655 C 286.185 32.667 281.937 24.722 273.27 21.609 C 266.73 19.26 259.155 19.773 230.44 24.506 C 212.567 27.452 207.418 28.05 197.352 28.349 C 179.795 28.853 165.727 25.329 157.387 18.322 L 156.09 17.232 L 156.022 17.293 L 155.953 17.232 L 154.656 18.322 C 146.316 25.329 132.248 28.853 114.691 28.349 C 104.625 28.05 99.477 27.453 81.603 24.506 C 52.888 19.773 45.313 19.26 38.773 21.609 C 30.106 24.722 25.859 32.667 29.127 39.655 C 30.246 42.048 33.167 44.617 33.167 43.21 C 33.168 41.028 35.977 38.757 38.669 38.763 C 48.865 38.785 46.417 53.673 36.164 53.999 C 35.021 54.035 34.086 54.095 34.086 54.133 C 34.086 54.171 34.412 54.632 34.81 55.158 C 39.593 61.48 33.451 71.892 26.209 69.74 C 22.189 68.546 21.981 61.489 25.924 60.062 C 26.717 59.775 26.708 59.653 25.855 59.088 C 23.272 57.377 19.812 57.984 17.654 60.526 C 14.759 63.938 12.99 67.745 12.375 72.473 C 12.99 77.2 14.759 81.008 17.654 84.419 C 19.811 86.961 23.271 87.568 25.855 85.857 C 26.708 85.293 26.717 85.17 25.924 84.883 C 21.981 83.457 22.188 76.4 26.209 75.205 C 33.451 73.053 39.592 83.465 34.81 89.787 C 34.411 90.313 34.086 90.775 34.086 90.812 C 34.086 90.85 35.021 90.91 36.163 90.947 C 46.417 91.272 48.865 106.16 38.669 106.182 C 35.977 106.188 33.168 103.917 33.167 101.735 C 33.167 100.328 30.246 102.897 29.126 105.291 C 25.858 112.278 30.106 120.223 38.773 123.336 C 45.313 125.685 52.888 125.173 81.603 120.439 C 99.476 117.493 104.625 116.895 114.691 116.596 C 132.248 116.092 146.316 119.616 154.656 126.623 L 155.953 127.713 L 156.021 127.652 L 156.09 127.713 L 157.387 126.623 C 165.727 119.616 179.795 116.092 197.352 116.596 C 207.418 116.895 212.566 117.493 230.44 120.439 C 259.155 125.173 266.73 125.685 273.27 123.336 C 281.937 120.223 286.185 112.278 282.916 105.291 C 281.797 102.898 278.876 100.328 278.876 101.735 C 278.875 103.917 276.066 106.188 273.374 106.182 C 263.178 106.16 265.626 91.272 275.879 90.947 C 277.022 90.91 277.957 90.85 277.957 90.812 C 277.957 90.775 277.631 90.313 277.233 89.787 C 272.45 83.465 278.592 73.053 285.834 75.205 C 289.854 76.4 290.062 83.457 286.119 84.883 C 285.326 85.17 285.335 85.293 286.188 85.857 C 288.771 87.568 292.232 86.961 294.389 84.419 C 297.284 81.008 299.053 77.2 299.668 72.473 Z M 306.63 72.473 C 305.943 63.824 302.88 56.99 298 53.66 C 288.194 46.97 274.662 53.63 277.776 63.613 C 279.534 69.249 287.337 70.215 287.337 64.797 C 287.337 62.061 285.394 60.861 282.845 62.023 L 281.433 62.667 L 282.133 61.356 C 285.34 55.349 291.937 54.697 296.127 59.973 C 299.021 63.616 300.784 67.599 301.386 72.473 C 300.784 77.346 299.021 81.329 296.127 84.972 C 291.937 90.248 285.34 89.596 282.133 83.589 L 281.433 82.278 L 282.845 82.922 C 285.394 84.084 287.337 82.884 287.337 80.148 C 287.337 74.73 279.534 75.696 277.776 81.332 C 274.662 91.315 288.194 97.975 298 91.285 C 302.88 87.955 305.943 81.122 306.63 72.473 Z M 5.414 72.473 C 6.101 81.122 9.164 87.955 14.044 91.285 C 23.849 97.975 37.382 91.315 34.268 81.332 C 32.509 75.696 24.706 74.73 24.706 80.148 C 24.706 82.884 26.649 84.084 29.198 82.922 L 30.61 82.278 L 29.91 83.589 C 26.703 89.596 20.107 90.248 15.916 84.972 C 13.022 81.329 11.259 77.346 10.658 72.473 C 11.259 67.599 13.022 63.616 15.916 59.973 C 20.107 54.697 26.703 55.349 29.91 61.356 L 30.61 62.668 L 29.198 62.024 C 26.649 60.861 24.706 62.061 24.706 64.797 C 24.706 70.215 32.509 69.249 34.268 63.613 C 37.382 53.63 23.849 46.97 14.044 53.66 C 9.164 56.99 6.101 63.824 5.414 72.473 Z M 156.022 15.157 C 156.427 15.118 156.807 15.516 157.675 16.327 C 162.882 21.192 173.662 25.345 183.553 26.296 C 195.023 27.399 208.65 26.422 229.049 23.033 C 258.504 18.141 266.299 17.578 273.241 19.842 C 283.524 23.195 288.468 32.819 284.14 41.06 C 282.538 44.11 277.794 46.978 277.486 45.083 C 276.911 41.538 275.954 40.505 273.257 40.521 C 269.355 40.544 267.214 44.081 268.972 47.602 C 271.308 52.278 276.336 53.656 281.713 51.093 C 282.551 50.694 283.39 50.297 284.231 49.902 C 291.74 46.384 294.284 34.276 289.333 25.619 C 281.3 11.591 264.756 8.661 232.165 15.5 C 221.209 17.8 209.739 19.585 199.537 20.585 C 180.25 22.474 163.519 17.601 157.111 8.23 L 156.116 6.776 L 156.021 6.915 L 155.927 6.776 L 154.932 8.23 C 148.524 17.601 131.793 22.474 112.506 20.585 C 102.304 19.585 90.834 17.8 79.878 15.5 C 47.287 8.66 30.743 11.591 22.71 25.619 C 17.759 34.276 20.304 46.384 27.813 49.902 C 28.388 50.172 29.521 50.708 30.33 51.093 C 35.707 53.656 40.735 52.278 43.071 47.602 C 44.829 44.081 42.689 40.543 38.786 40.52 C 36.089 40.505 35.132 41.538 34.557 45.083 C 34.249 46.978 29.506 44.11 27.903 41.059 C 23.576 32.819 28.519 23.195 38.802 19.842 C 45.745 17.578 53.539 18.141 82.994 23.033 C 103.393 26.421 117.02 27.399 128.49 26.296 C 138.381 25.345 149.161 21.192 154.368 16.327 C 155.237 15.516 155.616 15.118 156.022 15.157 Z M 156.022 129.789 C 155.616 129.827 155.237 129.429 154.368 128.618 C 149.161 123.753 138.381 119.6 128.49 118.649 C 117.02 117.546 103.393 118.523 82.994 121.912 C 53.539 126.804 45.745 127.367 38.802 125.103 C 28.519 121.75 23.576 112.126 27.903 103.885 C 29.506 100.835 34.249 97.967 34.557 99.862 C 35.132 103.408 36.089 104.44 38.786 104.424 C 42.689 104.401 44.829 100.864 43.071 97.343 C 40.735 92.667 35.707 91.289 30.33 93.852 C 29.492 94.251 28.653 94.648 27.813 95.043 C 20.304 98.561 17.759 110.669 22.71 119.326 C 30.743 133.354 47.287 136.284 79.878 129.445 C 90.834 127.145 102.304 125.36 112.506 124.36 C 131.793 122.471 148.524 127.344 154.932 136.715 L 155.927 138.17 L 156.022 138.03 L 156.116 138.17 L 157.111 136.715 C 163.519 127.344 180.25 122.471 199.537 124.36 C 209.739 125.36 221.209 127.145 232.165 129.445 C 264.757 136.284 281.3 133.354 289.333 119.326 C 294.284 110.669 291.74 98.561 284.231 95.043 C 283.391 94.648 282.551 94.251 281.713 93.852 C 276.336 91.289 271.308 92.667 268.972 97.343 C 267.214 100.864 269.355 104.401 273.257 104.424 C 275.954 104.44 276.912 103.407 277.487 99.862 C 277.794 97.967 282.538 100.835 284.14 103.885 C 288.468 112.126 283.524 121.75 273.242 125.103 C 266.299 127.367 258.505 126.804 229.049 121.912 C 208.651 118.523 195.024 117.546 183.554 118.649 C 173.662 119.6 162.882 123.753 157.675 128.618 C 156.807 129.429 156.427 129.827 156.022 129.789 Z"
                fill="hsl(0, 0%, 80%)"
              ></path>
            </svg>
            <h1
              style={{ left: '50%', marginLeft: '-40px' }}
              className="absolute font-NotoSerif top-14 text-2xl"
            >
              Videos
            </h1>
          </div>
          <VideosRow videos={videos} group={{ title: 'Latest Videos' }} />
          <VideosRow videos={videos} group={{ title: 'Royal Interview' }} />
          <VideosRow videos={videos} group={{ title: 'At The Bar' }} />
          <VideosRow videos={videos} group={{ title: 'The Godfather' }} />
          <div>
            <motion.div className="min-h-screen flex items-center justify-center my-44">
              <div className="grid grid-cols-6 gap-y-14 gap-x-20 grid-flow-col">
                <div className="col-span-3 col-start-1">
                  <motion.h1
                    className="font-PlayfairDisplay text-6xl  leading-normal font-bold  z-10 text-gray-700 text-left mt-10"
                    layoutId="title"
                  >
                    The Inteview We Never Saw
                  </motion.h1>

                  <div className="col-span-1 col-start-2 row-start-2 relative mt-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="312"
                      height="145"
                      className="mx-auto  h-46"
                    >
                      <path
                        d="M 156.022 3.802 C 156.421 3.643 156.775 4.096 157.286 5.143 C 161.561 13.91 174.249 19.245 190.852 19.258 C 199.051 19.265 214.903 17.306 227.498 14.731 C 239.566 12.264 242.482 11.699 245.329 11.277 C 270.722 7.513 286.882 13.447 292.613 28.639 C 295.066 35.143 293.432 43.547 288.764 48.429 L 288.042 49.184 L 290.123 49.287 C 300.569 49.805 307.313 58.694 308.333 72.472 C 307.313 86.251 300.569 95.139 290.123 95.657 L 288.042 95.76 L 288.764 96.516 C 293.432 101.398 295.066 109.802 292.613 116.306 C 286.882 131.498 270.722 137.432 245.329 133.668 C 242.482 133.246 239.566 132.681 227.498 130.213 C 214.903 127.638 199.051 125.68 190.852 125.687 C 174.249 125.7 161.561 131.035 157.286 139.802 C 156.775 140.849 156.421 141.302 156.022 141.143 C 155.622 141.302 155.268 140.849 154.757 139.802 C 150.482 131.035 137.794 125.7 121.191 125.687 C 112.992 125.68 97.14 127.638 84.545 130.213 C 72.477 132.681 69.561 133.245 66.714 133.668 C 41.321 137.432 25.161 131.498 19.43 116.306 C 16.977 109.802 18.611 101.398 23.279 96.516 L 24.001 95.76 L 21.92 95.657 C 11.474 95.139 4.73 86.251 3.71 72.472 C 4.73 58.694 11.474 49.805 21.92 49.287 L 24.001 49.184 L 23.279 48.429 C 18.611 43.547 16.977 35.143 19.43 28.639 C 25.161 13.447 41.321 7.513 66.714 11.277 C 69.561 11.699 72.477 12.264 84.545 14.731 C 97.14 17.306 112.992 19.265 121.191 19.258 C 137.794 19.245 150.482 13.91 154.757 5.143 C 155.268 4.096 155.622 3.642 156.022 3.802 Z M 299.668 72.473 C 299.053 67.745 297.284 63.938 294.389 60.526 C 292.232 57.984 288.772 57.377 286.188 59.088 C 285.335 59.653 285.326 59.775 286.119 60.062 C 290.062 61.489 289.855 68.546 285.834 69.74 C 278.592 71.892 272.451 61.48 277.234 55.158 C 277.632 54.632 277.957 54.171 277.957 54.133 C 277.957 54.095 277.022 54.035 275.88 53.999 C 265.626 53.673 263.178 38.785 273.374 38.763 C 276.066 38.757 278.875 41.028 278.876 43.21 C 278.876 44.617 281.797 42.048 282.917 39.655 C 286.185 32.667 281.937 24.722 273.27 21.609 C 266.73 19.26 259.155 19.773 230.44 24.506 C 212.567 27.452 207.418 28.05 197.352 28.349 C 179.795 28.853 165.727 25.329 157.387 18.322 L 156.09 17.232 L 156.022 17.293 L 155.953 17.232 L 154.656 18.322 C 146.316 25.329 132.248 28.853 114.691 28.349 C 104.625 28.05 99.477 27.453 81.603 24.506 C 52.888 19.773 45.313 19.26 38.773 21.609 C 30.106 24.722 25.859 32.667 29.127 39.655 C 30.246 42.048 33.167 44.617 33.167 43.21 C 33.168 41.028 35.977 38.757 38.669 38.763 C 48.865 38.785 46.417 53.673 36.164 53.999 C 35.021 54.035 34.086 54.095 34.086 54.133 C 34.086 54.171 34.412 54.632 34.81 55.158 C 39.593 61.48 33.451 71.892 26.209 69.74 C 22.189 68.546 21.981 61.489 25.924 60.062 C 26.717 59.775 26.708 59.653 25.855 59.088 C 23.272 57.377 19.812 57.984 17.654 60.526 C 14.759 63.938 12.99 67.745 12.375 72.473 C 12.99 77.2 14.759 81.008 17.654 84.419 C 19.811 86.961 23.271 87.568 25.855 85.857 C 26.708 85.293 26.717 85.17 25.924 84.883 C 21.981 83.457 22.188 76.4 26.209 75.205 C 33.451 73.053 39.592 83.465 34.81 89.787 C 34.411 90.313 34.086 90.775 34.086 90.812 C 34.086 90.85 35.021 90.91 36.163 90.947 C 46.417 91.272 48.865 106.16 38.669 106.182 C 35.977 106.188 33.168 103.917 33.167 101.735 C 33.167 100.328 30.246 102.897 29.126 105.291 C 25.858 112.278 30.106 120.223 38.773 123.336 C 45.313 125.685 52.888 125.173 81.603 120.439 C 99.476 117.493 104.625 116.895 114.691 116.596 C 132.248 116.092 146.316 119.616 154.656 126.623 L 155.953 127.713 L 156.021 127.652 L 156.09 127.713 L 157.387 126.623 C 165.727 119.616 179.795 116.092 197.352 116.596 C 207.418 116.895 212.566 117.493 230.44 120.439 C 259.155 125.173 266.73 125.685 273.27 123.336 C 281.937 120.223 286.185 112.278 282.916 105.291 C 281.797 102.898 278.876 100.328 278.876 101.735 C 278.875 103.917 276.066 106.188 273.374 106.182 C 263.178 106.16 265.626 91.272 275.879 90.947 C 277.022 90.91 277.957 90.85 277.957 90.812 C 277.957 90.775 277.631 90.313 277.233 89.787 C 272.45 83.465 278.592 73.053 285.834 75.205 C 289.854 76.4 290.062 83.457 286.119 84.883 C 285.326 85.17 285.335 85.293 286.188 85.857 C 288.771 87.568 292.232 86.961 294.389 84.419 C 297.284 81.008 299.053 77.2 299.668 72.473 Z M 306.63 72.473 C 305.943 63.824 302.88 56.99 298 53.66 C 288.194 46.97 274.662 53.63 277.776 63.613 C 279.534 69.249 287.337 70.215 287.337 64.797 C 287.337 62.061 285.394 60.861 282.845 62.023 L 281.433 62.667 L 282.133 61.356 C 285.34 55.349 291.937 54.697 296.127 59.973 C 299.021 63.616 300.784 67.599 301.386 72.473 C 300.784 77.346 299.021 81.329 296.127 84.972 C 291.937 90.248 285.34 89.596 282.133 83.589 L 281.433 82.278 L 282.845 82.922 C 285.394 84.084 287.337 82.884 287.337 80.148 C 287.337 74.73 279.534 75.696 277.776 81.332 C 274.662 91.315 288.194 97.975 298 91.285 C 302.88 87.955 305.943 81.122 306.63 72.473 Z M 5.414 72.473 C 6.101 81.122 9.164 87.955 14.044 91.285 C 23.849 97.975 37.382 91.315 34.268 81.332 C 32.509 75.696 24.706 74.73 24.706 80.148 C 24.706 82.884 26.649 84.084 29.198 82.922 L 30.61 82.278 L 29.91 83.589 C 26.703 89.596 20.107 90.248 15.916 84.972 C 13.022 81.329 11.259 77.346 10.658 72.473 C 11.259 67.599 13.022 63.616 15.916 59.973 C 20.107 54.697 26.703 55.349 29.91 61.356 L 30.61 62.668 L 29.198 62.024 C 26.649 60.861 24.706 62.061 24.706 64.797 C 24.706 70.215 32.509 69.249 34.268 63.613 C 37.382 53.63 23.849 46.97 14.044 53.66 C 9.164 56.99 6.101 63.824 5.414 72.473 Z M 156.022 15.157 C 156.427 15.118 156.807 15.516 157.675 16.327 C 162.882 21.192 173.662 25.345 183.553 26.296 C 195.023 27.399 208.65 26.422 229.049 23.033 C 258.504 18.141 266.299 17.578 273.241 19.842 C 283.524 23.195 288.468 32.819 284.14 41.06 C 282.538 44.11 277.794 46.978 277.486 45.083 C 276.911 41.538 275.954 40.505 273.257 40.521 C 269.355 40.544 267.214 44.081 268.972 47.602 C 271.308 52.278 276.336 53.656 281.713 51.093 C 282.551 50.694 283.39 50.297 284.231 49.902 C 291.74 46.384 294.284 34.276 289.333 25.619 C 281.3 11.591 264.756 8.661 232.165 15.5 C 221.209 17.8 209.739 19.585 199.537 20.585 C 180.25 22.474 163.519 17.601 157.111 8.23 L 156.116 6.776 L 156.021 6.915 L 155.927 6.776 L 154.932 8.23 C 148.524 17.601 131.793 22.474 112.506 20.585 C 102.304 19.585 90.834 17.8 79.878 15.5 C 47.287 8.66 30.743 11.591 22.71 25.619 C 17.759 34.276 20.304 46.384 27.813 49.902 C 28.388 50.172 29.521 50.708 30.33 51.093 C 35.707 53.656 40.735 52.278 43.071 47.602 C 44.829 44.081 42.689 40.543 38.786 40.52 C 36.089 40.505 35.132 41.538 34.557 45.083 C 34.249 46.978 29.506 44.11 27.903 41.059 C 23.576 32.819 28.519 23.195 38.802 19.842 C 45.745 17.578 53.539 18.141 82.994 23.033 C 103.393 26.421 117.02 27.399 128.49 26.296 C 138.381 25.345 149.161 21.192 154.368 16.327 C 155.237 15.516 155.616 15.118 156.022 15.157 Z M 156.022 129.789 C 155.616 129.827 155.237 129.429 154.368 128.618 C 149.161 123.753 138.381 119.6 128.49 118.649 C 117.02 117.546 103.393 118.523 82.994 121.912 C 53.539 126.804 45.745 127.367 38.802 125.103 C 28.519 121.75 23.576 112.126 27.903 103.885 C 29.506 100.835 34.249 97.967 34.557 99.862 C 35.132 103.408 36.089 104.44 38.786 104.424 C 42.689 104.401 44.829 100.864 43.071 97.343 C 40.735 92.667 35.707 91.289 30.33 93.852 C 29.492 94.251 28.653 94.648 27.813 95.043 C 20.304 98.561 17.759 110.669 22.71 119.326 C 30.743 133.354 47.287 136.284 79.878 129.445 C 90.834 127.145 102.304 125.36 112.506 124.36 C 131.793 122.471 148.524 127.344 154.932 136.715 L 155.927 138.17 L 156.022 138.03 L 156.116 138.17 L 157.111 136.715 C 163.519 127.344 180.25 122.471 199.537 124.36 C 209.739 125.36 221.209 127.145 232.165 129.445 C 264.757 136.284 281.3 133.354 289.333 119.326 C 294.284 110.669 291.74 98.561 284.231 95.043 C 283.391 94.648 282.551 94.251 281.713 93.852 C 276.336 91.289 271.308 92.667 268.972 97.343 C 267.214 100.864 269.355 104.401 273.257 104.424 C 275.954 104.44 276.912 103.407 277.487 99.862 C 277.794 97.967 282.538 100.835 284.14 103.885 C 288.468 112.126 283.524 121.75 273.242 125.103 C 266.299 127.367 258.505 126.804 229.049 121.912 C 208.651 118.523 195.024 117.546 183.554 118.649 C 173.662 119.6 162.882 123.753 157.675 128.618 C 156.807 129.429 156.427 129.827 156.022 129.789 Z"
                        fill="hsl(0, 0%, 80%)"
                      ></path>
                    </svg>
                    <h1
                      style={{ left: '50%', marginLeft: '-50px' }}
                      className="absolute font-NotoSerif top-14 text-2xl"
                    >
                      Starring
                    </h1>
                  </div>
                  <div className="flex flex-row">
                    <Link href="/the-interview-we-never-saw">
                      <p className="text-moss-green mt-10 text-lg leading-loose text-right w-full">
                        Meet the whole cast &rarr;
                      </p>
                    </Link>
                  </div>
                </div>

                <motion.div
                  className="rect p-3 rounded row-start-2 col-start-5 row-span-2"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, delay: 1 }
                  }}
                  exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
                >
                  <YearbookImage
                    character={charactersCast[0]}
                    key={charactersCast[0].id}
                  />
                </motion.div>
                <motion.div
                  className="rect p-3 rounded row-span-2 row-start-2 col-start-3"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, delay: 1.1 }
                  }}
                  exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
                >
                  <YearbookImage
                    character={charactersCast[1]}
                    key={charactersCast[1].id}
                  />
                </motion.div>
                <motion.div
                  className="rect p-3 rounded row-start-1 row-span-2"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, delay: 1.2 }
                  }}
                  exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
                >
                  <YearbookImage
                    character={charactersCast[2]}
                    key={charactersCast[2].id}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // console.log('im on the server')
  const { data } = await client.query({
    query: gql`
      query {
        characters {
          id
          name
          image {
            url
          }
          image_hover {
            url
          }
          slug
        }
        homepage {
          intro
          hero_image {
            url
          }
        }
        videos(sort: "published:DESC") {
          id
          slug
          title
          published
          thumbnail_image {
            url
          }
          category {
            slug
            name
          }
        }
      }
    `
  })

  return {
    props: {
      characters: data.characters.map((c) => {
        return { ...c, showName: false }
      }),
      charactersCast: data.characters.map((c) => {
        return { ...c, showName: true }
      }),
      homepage: data.homepage,
      videos: data.videos,
      footerFill: '#8D3F48',
      logoFill: '#EAEFB1'
    }
  }
}
