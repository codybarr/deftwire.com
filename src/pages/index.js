import React from 'react'
import SEO from '@/components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import clsx from 'clsx'
import moment from 'moment'

import Header from '@/components/header'
import Footer from '@/components/footer'

const ExtLink = ({ url, className, children }) => (
  <a
    className={clsx('hover:underline', className)}
    href={url}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
)

const Post = ({ post, className }) => {
  const { date, tags } = post.frontmatter
  const { title, url, description } = tags
  const image = getImage(post.localImage)

  return (
    <article className={clsx('w-full h-full bg-red-500 text-white', className)}>
      <ExtLink
        className="group overflow-hidden w-full h-full block relative"
        url={url}
      >
        <GatsbyImage
          className="absolute top-0 left-0 h-full w-full object-cover transition duration-300 transform group-hover:scale-110"
          image={image}
          alt={title}
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-4">
          <p className="text-xs tracking-wide italic uppercase">
            Posted on {moment(date).format('MMMM D, YYYY h:mm a')}
          </p>
          <h3 className="group-hover:underline text-2xl line-clamp-3">
            {title}
          </h3>
          <p className="text-sm line-clamp-3">{description}</p>
        </div>
      </ExtLink>
    </article>
  )
}

const IndexPage = ({ data }) => {
  const [firstPost, secondPost, thirdPost] = data.featuredPosts.nodes
  console.log(data)
  // console.log({ featuredPost, secondPost, thirdPost, posts })

  return (
    <>
      <SEO title="Deft Wire" isFront={true} />

      {/* mobile */}
      <div className="md:hidden">
        <div className="grid grid-rows-[auto,1fr] grid-cols-[1fr] h-screen w-full">
          <Header />
          <Post post={firstPost} />
        </div>
        <section className="grid grid-rows-2 grid-cols-1 grid-flow-col h-screen w-full">
          <Post post={secondPost} />
          <Post post={thirdPost} />
        </section>
      </div>

      {/* desktop */}
      <div className="hidden md:grid grid-rows-[auto,1fr] grid-cols-[1fr] h-screen w-full">
        <Header />
        <section className="grid grid-rows-[1fr,1fr] grid-cols-[1fr,1fr] grid-flow-col h-full w-full">
          <Post className="md:row-span-2" post={firstPost} />
          <Post post={secondPost} />
          <Post post={thirdPost} />
        </section>
      </div>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[300vh] md:h-[100vh]">
        {data.tilePosts.nodes.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </section>

      <section>
        <h2 className="bg-deft text-white text-4xl uppercase text-center p-8">
          More News
        </h2>
        <div className="grid grid-cols-1 divide-y divide-gray-300 sm:divide-none sm:grid-cols-2 md:grid-cols-3">
          {data.otherPosts.nodes.map(({ frontmatter: post }, i) => (
            <ExtLink
              className="p-4 font-bold self-center"
              key={post.tags.url}
              url={post.tags.url}
            >
              {post.tags.title}
            </ExtLink>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

// date(formatString: "MMMM D, YYYY h:mm a")
export const query = graphql`
  query {
    featuredPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
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
          date
          author
        }
        localImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    tilePosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: 3
      limit: 6
    ) {
      nodes {
        frontmatter {
          tags {
            description
            title
            url
          }
          date
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
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: 9
      limit: 30
    ) {
      nodes {
        frontmatter {
          tags {
            description
            title
            url
          }
          date
          author
        }
      }
    }
  }
`

export default IndexPage
