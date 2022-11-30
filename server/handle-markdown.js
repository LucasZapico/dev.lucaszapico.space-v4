// const path = require("path")
// const { allMarkDownPagesQuery } = require("./graphql-query/markdown-pages")

// const handleMarkdown = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const PostTemplate = path.resolve("src/templates/article-template.js")
//   const NoteTemplate = path.resolve("src/templates/note-template.js")

//   const results = await graphql(allMarkDownPagesQuery)

//   if (results.errors) {
//     reporter.panicOnBuild("Error loading Markdown result", results.errors)
//   }

//   await results.data.allMarkdownRemark.edges.forEach((edge) => {
//     const pagePath = edge.node.fields.path
//     if (!pagePath.includes("Index") || pagePath.length < 1) {
//       if (edge.node.frontmatter.type === "note") {
//         createPage({
//           path: pagePath,
//           component: NoteTemplate,
//           context: {
//             next: edge.next,
//             node: edge.node,
//             previous: edge.previous,
//             title: edge.node.frontmatter.title,
//           },
//         })
//       } else {
//         createPage({
//           path: pagePath,
//           component: PostTemplate,
//           context: {
//             next: edge.next,
//             node: edge.node,
//             previous: edge.previous,
//             title: edge.node.frontmatter.title,
//           },
//         })
//       }
//     }
//   })
// }

// module.exports = handleMarkdown
