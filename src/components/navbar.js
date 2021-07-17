import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

const NavLink = (props) => (
  <motion.div whileTap={{ scale: 1.2 }}>
    <Link
      {...props}
      className="transition hover:text-white"
      activeClassName="text-white"
      partiallyActive={true}
    />
  </motion.div>
)

const Navbar = () => (
  <nav className="font-marker mt-8 md:mt-0 text-xl tracking-widest uppercase w-full flex items-center justify-center md:justify-end">
    <ul className="space-x-6 flex flex-row items-center justify-center">
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
)

export default Navbar
