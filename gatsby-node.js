// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type MarkdownRemark implements Node @infer {
//       frontmatter: Frontmatter!
//     }
//     type Frontmatter @infer {
//       title: String!
//       url: String!
//       image: String!
//       date: Date! @dateformat
//       author: AuthorsJson @link(by: "email", from: "author")
//     }
//   `
//   createTypes(typeDefs)
// }

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
// const { createNode } = actions
// // Data can come from anywhere, but for now create it manually
// const myData = ['https://www.thedailygenevan.com/blog/2021/7/2/PCAGA2021']
// metaget.fetch(
//   'https://www.thedailygenevan.com/blog/2021/7/2/PCAGA2021',
//   { headers: { 'User-Agent': 'Googlebot' } },
//   function (err, meta_response) {
//     if (err) {
//       console.log(err)
//     } else {
//       const title = meta_response['og:title']
//       const description = meta_response['og:description']
//       const image = meta_response['og:image']
//       createNode({
//         title,
//         description,
//         image,
//         id: createNodeId(
//           'https://www.thedailygenevan.com/blog/2021/7/2/PCAGA2021'
//         ),
//         internal: {
//           type: `NewsPost`,
//           mediaType: `text/html`,
//           contentDigest: createContentDigest(description),
//         },
//       })
//     }
//   }
// )
// }

// const { createRemoteFileNode } = require('gatsby-source-filesystem')
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   createTypes(`
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       image: File @link(from: "tags.image___NODE")
//     }
//     type Frontmatter {
//       author: String!
//       date: String!
//       tags: Tags!
//     }
//     type Tags {
//       title: String!
//       description: String!
//       url: String!
//       image: String!
//     }
//   `)
// }

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   store,
//   cache,
//   createNodeId,
// }) => {
//   // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
//   if (
//     node.internal.type === 'MarkdownRemark' &&
//     node.frontmatter.tags.image !== null
//   ) {
//     console.log('image', node.frontmatter.tags.image)
//     let fileNode = await createRemoteFileNode({
//       url: node.frontmatter.tags.image, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//       cache, // Gatsby's cache
//       store, // Gatsby's Redux store
//     })
//     // if the file was created, attach the new node to the parent node
//     if (fileNode) {
//       node.image___NODE = fileNode.id
//       // node.featuredImg___NODE = fileNode.id
//     }
//   }
// }
