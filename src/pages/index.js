import React from 'react'
import SEO from '@/components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import clsx from 'clsx'

const ExtLink = ({ url, title, className }) => (
  <a
    className={clsx('hover:underline', className)}
    href={url}
    target="_blank"
    rel="noreferrer noopener"
  >
    {title}
  </a>
)

const Post = ({ post, featured }) => {
  const { date, tags } = post.frontmatter
  const { title, url } = tags
  const image = getImage(post.localImage)

  return (
    <article
      className={`group overflow-hidden w-full h-full bg-red-500 text-white relative ${
        featured ? ' md:row-span-2' : ''
      }`}
    >
      <GatsbyImage
        className="absolute top-0 left-0 h-full w-full object-cover transition duration-300 transform group-hover:scale-110"
        image={image}
        alt={title}
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
  // console.log(data)
  const [featuredPost, secondPost, thirdPost, ...posts] =
    data.featuredPosts.nodes

  // console.log({ featuredPost, secondPost, thirdPost, posts })

  return (
    <>
      <main className="flex flex-col md:grid md:grid-rows-[1fr, 1fr] md:grid-cols-[1fr, 1fr] md:grid-flow-col h-full w-full">
        <SEO title="Home" isFront={true} />
        <Post featured={true} post={featuredPost} />
        <Post post={secondPost} />
        <Post post={thirdPost} />
      </main>
      <div className="w-full grid gap-3 grid-rows-10 grid-cols-[1fr, 1fr, 1fr]">
        {data.otherPosts.nodes.map(({ frontmatter: post }, i) => (
          <ExtLink
            key={post.tags.url}
            url={post.tags.url}
            title={`${i} ${post.tags.title}`}
          />
        ))}
      </div>
    </>
  )
}

export const query = graphql`
  query {
    featuredPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" }, internal: {} }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
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
          author
        }
        localImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    otherPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" }, internal: {} }
      sort: { fields: frontmatter___date, order: DESC }
      skip: 3
      limit: 30
    ) {
      nodes {
        frontmatter {
          tags {
            description
            title
            url
          }
          date(formatString: "MMMM D, YYYY h:mm a")
          author
        }
      }
    }
  }
`

export default IndexPage
