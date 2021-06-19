import React, { useState } from 'react'
import { motion } from 'framer-motion'
// import styles from './styles.css'
import { EmailForm } from '../Form'

export interface BottomSheetProps {
  isOpen: boolean
  onClose?: any
  onOpen?: any
}

function BottomSheet({ isOpen, setIsOpen }) {
  return (
    <motion.div
      drag="y"
      dragElastic={0.2}
      dragConstraints={{ top: 10, bottom: -10 }}
      style={{
        display: 'inline-block',
        marginLeft: '20px',
        width: '400px',
        height: '100px',
        borderRadius: '10px 10px 0 0',
        border: '1px solid #fee',
        background: 'white'
      }}
      animate={{ y: isOpen ? 0 : 100 }}
    >
      <EmailForm />
    </motion.div>
  )
}

function Line() {
  return <hr style={{ backgroundColor: 'black', height: 1 }} />
}

function Button(props) {
  return (
    <button
      style={{
        border: 'none',
        borderRadius: 10,
        margin: 20,
        padding: 5,
        maxWidth: 200
      }}
      {...props}
    />
  )
}

export const BottomSheetWithForm: React.FC<BottomSheetProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)

  function onToggle() {
    console.log('toggling')

    setIsOpen((prev) => !prev)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 100
      }}
    >
      <Button onClick={onToggle}>Toggle</Button>
      <BottomSheet isOpen={isOpen} setIsOpen={setIsOpen} />
      <Line />
    </div>
  )
}
