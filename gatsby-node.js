const path = require("path")
const chalk = require("chalk")
const readingTime = require(`reading-time`)
const {
  contentPagesQuery,
} = require("./server/graphql-query/pages-query")
const { projectPageQuery } = require("./server/graphql-query/projects-query")

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
  if (node.internal.type === `Mdx`) {
    const { type } = node.frontmatter

    if (node.frontmatter.title) {
      const pagePath = node.frontmatter.title
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll(" ", "")
      /**
       * TODO: add reading time field
       */
      // console.log(pagePath)

      createNodeField({
        name: `path`,
        node,
        value: `${type}s/${pagePath}`,
      })
      // logSp()
      // log(chalk.greenBright('node field made', JSON.stringify(pagePath)))
    }
  } else {
    //   console.log(
    //     chalk.redBright(`
    // =================================
    //   `))
    //   console.log(JSON.stringify(Object.keys(node)))
    //   console.log(node.frontmatter)
  }
}

const handleGeneralContent = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const ArticleTemplate = path.resolve("src/templates/article-template.js")
  const NoteTemplate = path.resolve("src/templates/note-template.js")

  const results = await graphql(contentPagesQuery)

  if (results.errors) {
    reporter.panicOnBuild("Error loading Markdown result", results.errors)
  }

  await results.data.allMdx.edges.slice().forEach((edge) => {
    const pagePath = edge.node.fields.path
    if (!pagePath.includes("Index") || pagePath.length < 1) {
      if (edge.node.frontmatter.type === "note") {
        createPage({
          path: pagePath,
          component: `${NoteTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
          context: {
            next: edge.next,
            node: edge.node,
            previous: edge.previous,
            title: edge.node.frontmatter.title,
          },
        })
      }  else if (edge.node.frontmatter.type === "article") {
        createPage({
          path: pagePath,
          component: `${ArticleTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
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

const handleProjects = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const CaseTemplate = path.resolve("src/templates/case-template.js")

  const results = await graphql(projectPageQuery)

  if (results.errors) {
    reporter.panicOnBuild("Error loading MDX result", results.errors)
  }

  await results.data.allMdx.edges.slice().forEach((edge) => {
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
  await handleGeneralContent({ actions, graphql, reporter })
  await handleProjects({ actions, graphql, reporter })
}
