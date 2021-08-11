import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export interface ButtonProps {
  label: string
  href?: string
}

export const Button: React.FC<ButtonProps> = ({ label, href = '' }) => {
  console.log('href: ', href)
  return (
    <>
      {href && (
        <Link href={href}>
          <a className="flex">
            <ButtonElement label={label} />
          </a>
        </Link>
      )}
      {!href && <ButtonElement label={label} />}
    </>
  )
}

const ButtonElement = ({ label }) => {
  const transition = {
    duration: 1.3,
    ease: [0.6, 0.01, -0.05, 0.9],
    type: 'spring',
    stiffness: 300
  }

  const svgVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition
    }
  }
  const pathVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: { duration: 2, ease: 'easeInOut' }
    }
  }

  const hoverFill = '#B3525E'

  return (
    <div className="flex items-center justify-center  hover:text-gray-500 hover:text-2xl cursor-pointer">
      <p className="absolute">{label}</p>

      <motion.svg
        width="183"
        height="62"
        viewBox="0 0 183 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.05, fill: hoverFill }}
        variants={svgVariants}
      >
        <motion.path
          variants={pathVariants}
          d="M97 60.9986C73.9504 61.012 50.9006 60.932 27.8522 60.7585C26.7912 60.7505 25.5386 60.6662 25 60C46.1868 60.0909 67.3735 60.1817 88.5603 60.2726C91.4072 60.2848 94.317 60.3047 97 60.9986Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M90 1.33125C107.621 1.29878 125.242 1.26632 142.864 1.23386C147.685 1.22497 152.513 1.21634 157.318 1.60461C155.356 0.0424846 152.632 -0.0135005 150.124 0.0016396C131.14 0.116249 112.156 0.230856 93.1716 0.345465C92.0245 0.352391 90.7148 0.434008 90 1.33125Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M130.268 60.0565C145.551 60.1788 160.833 60.3011 176.115 60.4235C177.453 60.4342 178.881 60.4721 179.981 61.2329C153.319 61.4382 126.653 61.1857 100 60.4756C110.076 59.8951 120.176 59.9757 130.268 60.0565Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M181.608 4.03225C181.577 9.67279 181.547 15.3133 181.516 20.9539C181.51 21.9845 181.504 23.0151 181.499 24.0457C180.992 23.626 180.98 23.1736 180.976 22.7359C180.925 16.7018 180.875 10.6677 180.824 4.63353C180.822 4.38805 180.938 4.08613 181.608 4.03225Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M34.1825 0.958669C33.3954 0.953516 32.4198 0.822667 32.156 0.0809809C49.7971 0.0461613 67.4386 0.182996 85.0771 0.491453C85.3035 0.974108 84.5441 1.28835 84.011 1.28486C67.4015 1.17613 50.792 1.0674 34.1825 0.958669Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M17.8441 60.0265C20.2224 60.0317 22.6409 60.0426 24.9165 60.734C17.97 61.0862 11.013 61.2306 4.05794 61.1672C3.73327 60.4557 4.84399 59.9983 5.62601 60C9.69872 60.0089 13.7714 60.0177 17.8441 60.0265Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M10.0898 0.072888C16.8108 0.0703561 23.5318 0.0678259 30.2528 0.0831904C30.8145 0.0844744 31.5339 0.205621 31.6504 0.755123C24.2625 0.930904 16.8692 0.876965 9.48472 0.593403C9.27748 0.330542 9.75504 0.0730141 10.0898 0.072888Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M0.676519 25.6454C0.265587 22.5545 0.0676255 19.4352 0.084489 16.3171C0.0913779 15.0434 0.13612 13.7555 0.474702 12.5276C1.2201 16.8546 1.28847 21.2975 0.676519 25.6454Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M169.993 0.784365C169.502 0.757971 168.823 0.439085 169.043 0C170.841 0.014784 172.639 0.0295615 174.437 0.0443457C175.558 0.0535607 176.68 0.0628347 177.797 0.142738C177.452 1.0256 176.26 1.12164 175.313 1.07068C173.54 0.975234 171.766 0.87981 169.993 0.784365Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M0.789292 11.4843C0.77325 11.7868 0.557954 12.2073 0.299592 12.0493C0.0158563 9.74896 -0.0101332 7.41693 0.222206 5.11084C0.958371 5.32277 1.06389 6.30766 1.02331 7.07265C0.945305 8.54321 0.867296 10.0138 0.789292 11.4843Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M159 0.234362C160.808 0.155261 162.615 0.0783167 164.423 0.00358941C165.141 -0.0260741 166.086 0.117732 166.202 0.826648C164.182 0.836842 162.163 0.847051 160.144 0.857245C159.66 0.859685 159.015 0.717539 159 0.234362Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M1.25854 32.1686C1.28511 32.4927 1.30793 32.8367 1.15792 33.1252C1.04154 33.349 0.823042 33.5171 0.576867 33.5723C0.165296 31.3141 0.246662 28.9674 0.813621 26.7431C0.961925 28.5516 1.11023 30.3601 1.25854 32.1686Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M181.939 53.0271C182.42 55.6745 182.417 58.4091 181.93 61.0555C181.422 58.4115 181.424 55.6701 181.939 53.0271Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M3.19141 0.908081C2.85635 0.940652 2.48068 0.961398 2.22369 0.743955C2.07502 0.618164 1.99003 0.420615 2.00094 0.226174C4.02926 -0.132791 6.13232 -0.0636452 8.13268 0.427754C6.4856 0.587866 4.8385 0.747969 3.19141 0.908081Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M0 1.99569C0.112865 1.33046 0.225745 0.66523 0.33861 0C1.071 1.19259 1.06971 2.79751 0.335401 3.98891C0.22412 3.33701 0.112811 2.68511 0.00153168 2.03321L0 1.99569Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M0.429599 44.7065C0.837456 46.0168 0.829703 47.4532 0.407681 48.7591C-0.143512 47.4829 -0.135379 45.9766 0.429599 44.7065Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M0.720226 51.7209C0.843579 52.0797 0.593055 52.5185 0.221337 52.5946C-0.0563938 51.4745 -0.0233206 50.279 0.315936 49.176C0.711999 49.9439 0.895215 50.8201 0.839989 51.6823L0.720226 51.7209Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M2.46709 60.0172C2.32006 60.7102 1.70295 61.2771 1 61.365C1.25661 60.3057 2.05613 59.3934 3.07258 59C3.23701 59.3793 2.98741 59.8778 2.58518 59.9733L2.46709 60.0172Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M0.0482218 39.3034C-0.0591227 39.1243 0.23587 38.9257 0.417976 39.0279C0.600083 39.13 0.653587 39.3638 0.678362 39.5711C0.785292 40.466 0.696167 41.3838 0.419034 42.2414C0.0124832 41.324 -0.0917201 40.2756 0.126337 39.2961L0.0482218 39.3034Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M181.882 37.5116C182.091 38.271 181.989 39.111 181.604 39.7982C181.13 39.0515 181.162 38.0172 181.681 37.301L181.882 37.5116Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M179.232 0.0222901C179.738 -0.0411433 180.383 0.00733206 180.573 0.480499C180.234 0.751471 179.827 1.03917 179.404 0.94075C178.981 0.842326 178.827 0.10324 179.253 0.0139752L179.232 0.0222901Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M181.853 44.1229C182.118 44.4623 181.899 45.0517 181.476 45.1345C181.248 44.5605 181.25 43.8986 181.482 43.3263C181.801 43.1677 181.97 43.7167 181.904 44.0665L181.853 44.1229Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M181.655 50.3384C181.526 50.0121 181.751 49.5256 182.093 49.6026C182.251 49.9189 182.291 50.2918 182.206 50.6345C182.037 50.8896 181.542 50.6352 181.652 50.3501L181.655 50.3384Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M181 26.0501C181.398 25.7981 181.872 26.5666 181.469 26.8092C181.17 26.9988 180.982 26.4415 181.06 26.0965L181 26.0501Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M3.5 57C3.5 39 3.60128 22.541 3.27534 5.0003C3.27534 5.0003 2.49997 4 2 4L2.86857 58.7321C61.2122 58.9328 119.564 59.1336 177.905 58.8835C120 57.6225 61.4821 57.1828 3.5 58V57Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
        <motion.path
          variants={pathVariants}
          d="M178.405 4.00003C178.405 22 178.304 38.459 178.63 55.9997C178.63 55.9997 179.405 57 179.905 57L179.036 2.26793C120.693 2.0672 62.3413 1.86647 3.99991 2.11651C61.905 3.37757 120.423 3.8172 178.405 3.00003V4.00003Z"
          fill="black"
          whileHover={{ fill: hoverFill }}
        />
      </motion.svg>
    </div>
  )
}
