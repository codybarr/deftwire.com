import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

import Navbar from '@/components/navbar'

// GatsbyImageSharpFixed_tracedSVG

const Header = () => (
  <header className="p-6 pb-0 flex flex-col justify-center md:flex-row">
    <div className="text-center">
      <motion.div
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 1.2, rotate: -15 }}
      >
        <Link to="/">
          {/* <StaticImage
            width={150}
            placeholder="tracedSVG"
            tracedSVGOptions={{ color: '#f9dc00' }}
            src="../images/deft.png"
            alt="Deft Wire"
          /> */}
        </Link>
      </motion.div>
    </div>
    <Navbar />
  </header>
)

export default Header
