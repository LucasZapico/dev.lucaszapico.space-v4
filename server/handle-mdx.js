// const path = require("path")
// const { allMdxPageQuery } = require("./graphql-query/mdx-pages")

// const handleMdx = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const CaseTemplate = path.resolve("src/templates/case-template.js")

//   const results = await graphql(allMdxPageQuery)

//   if (results.errors) {
//     reporter.panicOnBuild("Error loading MDX result", results.errors)
//   }

//   await results.data.allMdx.edges.forEach((edge) => {
//     const pagePath = edge.node.fields.path
//     if (!pagePath.includes("Index") || pagePath.length < 1) {
//       createPage({
//         path: pagePath,
//         component: `${CaseTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
//         context: {
//           next: edge.next,
//           node: edge.node,
//           previous: edge.previous,
//           title: edge.node.frontmatter.title,
//         },
//       })
//     }
//   })
// }

// module.exports = handleMdx
