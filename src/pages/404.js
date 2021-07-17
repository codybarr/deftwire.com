import React from 'react'
import { Link } from 'gatsby'

// markup
const NotFoundPage = () => {
  return (
    <main className="prose p-8 md:p-16">
      <p>
        Lost? Try starting over at the <Link to="/">homepage</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
