import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

import Wire from '@/images/wire.inline.svg'

import Navbar from '@/components/navbar'

// GatsbyImageSharpFixed_tracedSVG

const Header = ({ location }) => (
  <header className="text-white">
    <div className="p-4 flex flex-col justify-between items-center md:flex-row bg-deft">
      <motion.div
        key={location?.pathname}
        initial={{ rotate: 0, scale: 1, x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', bounce: 0.25 }}
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 1.2 }}
      >
        <Link to="/" className="flex items-center justify-center space-x-4">
          <Wire className="h-10 w-10 fill-current text-white tranform rotate-90" />
          <h1 className="font-teko text-6xl whitespace-nowrap uppercase transform translate-y-1">
            Deft Wire
          </h1>
        </Link>
      </motion.div>
      {/* <Navbar /> */}
    </div>
    <div className="px-4 py-2 flex flex-col items-center md:items-start bg-deft-dark">
      <span className="font-teko uppercase text-2xl font-bold tracking-wide whitespace-nowrap">
        Drink Fresh, Current, Real News
      </span>
    </div>
  </header>
)

export default Header
