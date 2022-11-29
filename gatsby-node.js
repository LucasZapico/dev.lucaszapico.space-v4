const path = require("path")
const chalk = require("chalk")
const readingTime = require(`reading-time`)
const { allMarkDownPagesQuery } = require("./server/graphql-query/markdown-pages")
const { allMdxPageQuery } = require("./server/graphql-query/mdx-pages")

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

const handleMarkdown = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve("src/templates/article-template.js")
  const NoteTemplate = path.resolve("src/templates/note-template.js")

  const results = await graphql(allMarkDownPagesQuery)

  if (results.errors) {
    reporter.panicOnBuild("Error loading Markdown result", results.errors)
  }

  await results.data.allMarkdownRemark.edges.forEach((edge) => {
    const pagePath = edge.node.fields.path
    if (!pagePath.includes("Index") || pagePath.length < 1) {
      if (edge.node.frontmatter.type === "note") {
        createPage({
          path: pagePath,
          component: NoteTemplate,
          context: {
            next: edge.next,
            node: edge.node,
            previous: edge.previous,
            title: edge.node.frontmatter.title,
          },
        })
      } else {
        createPage({
          path: pagePath,
          component: PostTemplate,
          context: {
            next: edge.next,
            node: edge.node,
            previous: edge.previous,
            title: edge.node.frontmatter.title,
          },
        })
      }
    }
  })
}


const handleMdx = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const CaseTemplate = path.resolve("src/templates/case-template.js")

  const results = await graphql(allMdxPageQuery)

  if (results.errors) {
    reporter.panicOnBuild("Error loading MDX result", results.errors)
  }

  await results.data.allMdx.edges.forEach((edge) => {
    const pagePath = edge.node.fields.path
    if (!pagePath.includes("Index") || pagePath.length < 1) {
      createPage({
        path: pagePath,
        component: `${CaseTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
        context: {
          next: edge.next,
          node: edge.node,
          previous: edge.previous,
          title: edge.node.frontmatter.title,
        },
      })
    }
  })
}



exports.createPages = async ({ actions, graphql, reporter }) => {
  await handleMarkdown({ actions, graphql, reporter })
  await handleMdx({ actions, graphql, reporter })
}


