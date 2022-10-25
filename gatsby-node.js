const path = require('path')
const chalk = require('chalk')

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

  if (node.internal.type === `MarkdownRemark`) {
    const { type } = node.frontmatter
    const pagePath = node.frontmatter.title
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll(' ', '')
    // const value = createFilePath({ node, getNode })
    createNodeField({
      name: `path`,
      node,
      value: `${type}s/${pagePath}`,
    })
    logSp()
    log(chalk.greenBright('node field made', JSON.stringify(pagePath)))
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve('src/templates/article-template.js')

  const results = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { isdraft: { eq: false } } }
        sort: { fields: frontmatter___date_created, order: DESC }
      ) {
        edges {
          next {
            frontmatter {
              title
            }
            fields {
              path
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              path
            }
          }
          node {
            excerpt
            fields {
              path
            }
            id
            html
            tableOfContents(heading: "", maxDepth: 4)
            wordCount {
              words
            }
            frontmatter {
              title
              description
              date_created
              last_modified
              isdraft
              type
              categories
              tags
            }
          }
        }
      }
    }
  `)

  logSp()

  await results.data.allMarkdownRemark.edges.forEach((edge) => {
    const pagePath = edge.node.fields.path
    log(pagePath)
    if (!pagePath.includes('Index') || pagePath.length < 1) {
      log(pagePath)
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
  })
}
