import * as React from 'react'

const MdxWrapper = ({ children }) => {
  return (
    <main className="mdx-content prose prose-lg max-w-none p-8 md:p-16">
      {children}
    </main>
  )
}

export default MdxWrapper
