import React from 'react'
import SEO from '@/components/seo'

import { graphql } from 'gatsby'

const ExtLink = ({ url, title }) => (
  <a
    className="hover:underline"
    href={url}
    target="_blank"
    rel="noreferrer noopener"
  >
    {title}
  </a>
)

const Post = ({ post, featured }) => {
  const { date, tags } = post
  const { title, url, image } = tags

  return (
    <article
      className={`group overflow-hidden w-full h-full bg-red-500 text-white relative ${
        featured ? ' md:row-span-2' : ''
      }`}
    >
      <img
        className="absolute top-0 left-0 h-full w-full object-cover transition duration-300 transform group-hover:scale-110"
        src={image}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-4">
        <p className="text-sm tracking-wide italic uppercase">
          Posted on {date}
        </p>
        <h3 className="text-2xl">
          <ExtLink url={url} title={title} />
        </h3>
      </div>
    </article>
  )
}

const IndexPage = ({ data }) => {
  console.log(data)
  const [featuredPost, secondPost, thirdPost, ...posts] =
    data.allMarkdownRemark.nodes

  console.log({ featuredPost, secondPost, thirdPost, posts })

  return (
    <main className="flex flex-col md:grid md:grid-rows-[1fr, 1fr] md:grid-cols-[1fr, 1fr] md:grid-flow-col h-full w-full">
      <SEO title="Home" isFront={true} />
      <Post featured={true} post={featuredPost.frontmatter} />
      <Post post={secondPost.frontmatter} />
      <Post post={thirdPost.frontmatter} />
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" }, internal: {} }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          tags {
            description
            image
            title
            url
          }
          date(formatString: "MMMM D, YYYY h:mm a")
        }
      }
    }
  }
`

export default IndexPage
