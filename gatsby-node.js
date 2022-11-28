const path = require("path")
const chalk = require("chalk")
const handleMarkdown = require("./server/handle-markdown")
const handleMdx = require("./server/handle-mdx")
const readingTime = require(`reading-time`)

const { log } = console
const logSp = () =>
  log(
    chalk.redBright(`

=================================

`)
  )

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    const { type } = node.frontmatter
    const pagePath = node.frontmatter.title
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll(" ", "")
    /**
     * TODO: add reading time field
     */

    createNodeField({
      name: `path`,
      node,
      value: `${type}s/${pagePath}`,
    })
    // logSp()
    // log(chalk.greenBright('node field made', JSON.stringify(pagePath)))
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  await handleMarkdown({ actions, graphql, reporter })
  await handleMdx({ actions, graphql, reporter })
}
