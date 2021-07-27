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

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
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
}
