const allMarkDownPagesQuery = `
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
}`

module.exports = { allMarkDownPagesQuery }
