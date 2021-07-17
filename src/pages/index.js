import React from 'react'
import SEO from '@/components/seo'

const IndexPage = () => {
  return (
    <main className="h-full flex flex-col items-center justify-center p-8">
      <SEO title="Home" isFront={true} />
      <h2>Here's some news!</h2>
    </main>
  )
}

export default IndexPage
