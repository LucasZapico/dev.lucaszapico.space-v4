const path = require('path')
const chalk = require('chalk')
const { node } = require('prop-types')

const { log } = console
const logSp = log(
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
    const pagePath = node.frontmatter.title.toLowerCase().replaceAll(' ', '-')
    // const value = createFilePath({ node, getNode })
    createNodeField({
      name: `path`,
      node,
      value: pagePath,
    })
    logSp
    log(
      chalk.greenBright(
        'node field made',
        JSON.stringify(
          node.frontmatter.title.toLowerCase().replaceAll(' ', '-')
        )
      )
    )
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
            id
            html
            frontmatter {
              title
              description
              date_created
              last_modified
              isdraft
              type
              subheader
              link
              repo
              path
              data_created
              isComingSoon
              audio
              subHeader
              featured
              featuredImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  await results.data.allMarkdownRemark.edges.forEach((edge) => {
    const pagePath = edge.node.frontmatter.title
      .toLowerCase()
      .replaceAll(' ', '-')
    logSp
    log(chalk.cyanBright('page path', pagePath))

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
  })
}
