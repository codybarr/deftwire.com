import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GabText from '@/images/gab-text.inline.svg'

const Footer = ({ location }) => (
  <footer className="fixed right-0 bottom-0 p-4 flex justify-end">
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="text-green-500"
        key={location.pathname}
        initial={{ rotate: 0, scale: 1, x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.25 }}
        whileHover={{
          rotate: 5,
          scale: 1.1,
          opacity: 0.8,
        }}
        whileTap={{
          rotate: 7,
          scale: 1.3,
        }}
      >
        <a href="https://gab.com/deftwire" target="_blank">
          <GabText className="h-10 w-auto fill-current" />
        </a>
      </motion.div>
    </AnimatePresence>
  </footer>
)

export default Footer
