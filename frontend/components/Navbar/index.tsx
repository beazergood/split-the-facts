import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../Button'
import { Nav } from '../Nav'

export interface NavbarProps {
  theme: any
}

export const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  //   const [fill, setFill] = useState(logoFill)

  const pathVariants = {
    initial: {
      fill: 'red'
    },
    animate: {
      fill: 'white'
    }
  }
  const transition = {
    duration: 1.3,
    ease: [0.6, 0.01, -0.05, 0.9],
    type: 'spring',
    stiffness: 300
  }
  const navProps = {
    fill: theme.navBtnFill,
    items: [
      { id: 0, label: 'Home', selected: true, href: '/' },
      { id: 1, label: 'About', selected: false, href: '/about' },
      { id: 2, label: 'Videos', selected: false, href: '/videos' },
      { id: 3, label: 'Blog', selected: false, href: '/blog' },
      { id: 4, label: 'Cast', selected: false, href: '/the-cast' }
    ]
  }

  return (
    <div
      className="w-100 h-24 relative flex flex-row space-around border-0 border-red-300  py-4 z-40"
      role="navigation"
    >
      <div>
        <Link href="/" passHref>
          <motion.svg
            height="80%"
            xmlns="http://www.w3.org/2000/svg"
            width="150px"
            version="1.1"
            viewBox="0 0 139.31 54.3909"
            className="cursor-pointer md:ml-0 lg:ml-10"
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={transition}
            whileHover={{
              scale: 1.1,
              originX: 0.1,
              boxShadow: '0px 0px 8px rgb(255,255,255)',
              textShadow: '0px 0px 8px rgb(255,255,255)'
            }}
          >
            <defs />
            <g id="Untitled">
              <motion.path
                d="M131.476+46.9478C128.58+47.8983+125.958+43.6156+127.707+41.1196C129.455+38.6236+133.64+38.8804+135.647+41.1741C136.82+42.515+137.357+44.5493+136.519+46.1219C135.682+47.6945+133.24+48.2941+132.033+46.9838L131.476+46.9478Z"
                opacity="1"
                fill={theme.logoFill}
                initial="initial"
                animate="animate"
              />
              <motion.path
                d="M103.24+5.8767C109.907-0.431237+121.555-0.416471+128.205+5.90835C121.292+4.13742+118.622+8.75995+118.269+13.1598C117.773+19.3293+117.277+25.4989+116.782+31.6684C116.456+35.7205+115.284+40.7801+111.292+41.5496C106.479+32.875+110.569+22.1637+110.297+12.2473C110.264+11.048+110.089+9.70219+109.14+8.96775C108.135+8.18922+106.714+8.42922+105.45+8.29019C104.185+8.15117+102.736+7.04438+103.24+5.8767Z"
                opacity="1"
                fill={theme.logoFill}
                initial="initial"
                animate="animate"
              />
              <motion.path
                d="M133.23+0.180353C135.098-0.478776+137.216+0.755295+138.196+2.47637C139.177+4.19744+139.286+6.26552+139.306+8.24616C139.399+17.4618+138.077+26.6905+135.402+35.5099C131.153+34.3595+130.313+28.7902+130.309+24.3882C130.305+18.6042+130.3+12.8202+130.295+7.03624C130.293+4.37501+130.721+1.06593+133.23+0.180353Z"
                opacity="1"
                fill={theme.logoFill}
                initial="initial"
                animate="animate"
              />
              <motion.path
                d="M91.6753+44.8094C88.6685+40.0191+89.1129+33.9175+89.6609+28.2884C90.3763+20.9397+91.0917+13.5909+91.8072+6.24221C92.0671+3.57251+96.2204+3.03236+98.0932+4.95267C99.9659+6.87298+100.099+9.84916+100.052+12.5311C99.853+23.8215+98.2629+35.6378+91.6753+44.8094Z"
                opacity="1"
                fill={theme.logoFill}
                initial="initial"
                animate="animate"
              />
              <motion.path
                d="M40.8032+4.32951C43.2257+1.32026+47.3891-0.174733+51.1727+0.606024C54.9562+1.38678+58.1877+4.40777+59.2211+8.1302C61.3679+15.8628+54.5414+23.0203+48.009+27.6818C40.1904+33.2612+45.9319+47.0518+39.7352+54.3909C38.0649+53.9543+37.728+51.7662+37.7255+50.0398C37.7095+39.3752+37.6935+28.7105+37.6776+18.0459C37.6704+13.2591+37.8014+8.05816+40.8032+4.32951M48.5675+7.16501C45.9503+8.05249+45.5561+11.5318+45.6294+14.2944C45.7136+17.4624+45.7977+20.6303+45.8819+23.7983C47.1291+21.5978+49.1091+19.9268+50.7868+18.034C52.4645+16.1411+53.918+13.7825+53.7178+11.2611C53.5176+8.73976+50.9628+6.35274+48.5675+7.16501Z"
                opacity="1"
                fill={theme.logoFill}
                initial="initial"
                animate="animate"
              />
              <motion.path
                d="M66.2356+3.68085C68.1954+2.2878+71.126+3.95621+71.8939+6.23477C72.6619+8.51333+71.9601+10.9969+71.2583+13.2967C70.0201+17.3548+68.7819+21.4129+67.5437+25.471C66.9685+27.3559+66.3871+29.2902+66.5051+31.2574C66.8641+37.2431+75.1039+40.9969+79.856+37.3396C81.6265+35.9769+84.5207+37.513+84.9149+39.7122C85.3091+41.9113+83.7626+44.1019+81.7763+45.125C79.7901+46.148+77.4663+46.2445+75.2326+46.1997C71.1566+46.118+67.0887+45.6363+63.1064+44.7638C61.444+44.3995+59.7095+43.9191+58.513+42.7089C56.3518+40.5229+56.7689+36.9561+57.4052+33.9486C59.3228+24.8853+61.8561+15.9654+64.3874+7.05391C64.7449+5.79525+65.1691+4.43891+66.2356+3.68085Z"
                opacity="1"
                fill={theme.logoFill}
                initial="initial"
                animate="animate"
              />
              <motion.path
                d="M27.5827+5.57675C29.4656+6.81774+31.2319+9.37231+29.8154+11.127C27.2419+14.3151+21.4131+5.0968+18.8335+11.6924L21.3466+14.5377L24.2949+18.0229C27.8685+22.0688+31.5247+26.2527+33.3084+31.3477C35.0921+36.4427+34.5689+42.7338+30.6093+46.4029C26.2873+50.4079+19.2285+50.0163+14.1123+47.0932C8.99612+44.1701+5.37231+39.2665+1.90285+34.5039C0.896648+33.1226-0.159819+31.5663+0.020177+29.8669C0.200172+28.1676+2.40208+26.741+3.66397+27.8934C7.20599+31.1279+10.748+34.3624+14.29+37.5969C16.6138+39.7189+19.5924+42.0014+22.5896+41.0423C26.6231+39.7516+26.7341+33.8089+24.5063+30.2073C22.1196+26.3484+18.2166+23.7156+15.1553+20.3665C12.094+17.0175+9.82004+12.1397+11.6858+8.00374C14.1943+2.44287+22.489+2.21959+27.5827+5.57675Z"
                opacity="1"
                fill={theme.logoFill}
                initial="initial"
                animate="animate"
              />
            </g>
          </motion.svg>
        </Link>
      </div>
      <div className="flex-grow"></div>
      {/* <div className="flex space-x-4 mr-10">
        <Link href={'/videos'}>
          <a
            key="a"
            className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Videos
          </a>
        </Link>

        <Link href={'/about'}>
          <a
            key="a"
            className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </a>
        </Link>
      </div> */}
      <div className="">
        <Nav props={navProps} />
        {/* <Button href={'/test'} label="TEsT 123" /> */}
      </div>
    </div>
  )
}
