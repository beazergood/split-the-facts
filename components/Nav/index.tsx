import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: (height = 0) => ({
    clipPath: 'circle(30px at 235px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  })
}

export interface NavProps {
  id: number
  label: string
  url: string
  selected: boolean
}

export const Nav = ({ props }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        id="websiteNav"
        style={{ width: isOpen ? '300px' : '10px' }}
      >
        <motion.div
          className="background"
          variants={sidebar}
          style={{ background: props.fill }}
        />
        <Navigation props={props.items} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <style jsx global>{`
        nav#websiteNav {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 300px;
        }

        .background {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 300px;
        }

        button#navBtn {
          outline: none;
          border: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          cursor: pointer;
          position: absolute;
          top: 18px;
          right: 28px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: transparent;
        }

        nav#websiteNav > ul,
        li {
          margin: 0;
          padding: 0;
        }

        nav#websiteNav > ul {
          padding: 25px;
          position: absolute;
          top: 100px;
          width: 230px;
        }

        nav#websiteNav > ul > li {
          list-style: none;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .icon-placeholder {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          flex: 40px 0;
          margin-right: 20px;
        }

        .text-placeholder {
          border-radius: 5px;
          width: 200px;
          height: 40px;
          flex: 1;
          padding: 5px;
        }

        .refresh {
          padding: 10px;
          position: absolute;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          width: 20px;
          height: 20px;
          top: 10px;
          right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
