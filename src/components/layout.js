import React, { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import SEO from '@/components/seo'
import Header from '@/components/header'
import Footer from '@/components/footer'
// import x from '@/images/x.inline.svg'

const Layout = ({ children, location }) => {
  return (
    <div className="grid grid-rows-[auto,1fr] grid-cols-[1fr] h-screen w-screen">
      <SEO title="Deft Wire" />
      <Header location={location} />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      {/* <Footer location={location} /> */}
    </div>
  )
}

export default memo(Layout)
