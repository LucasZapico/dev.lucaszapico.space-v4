const contentPagesQuery = `
{
  allMdx(
    filter: {frontmatter: {type: {ne: "project"}, isdraft: {eq: false}}}
    sort: {frontmatter: {date_created: DESC}}
  ) {
    edges {
      next {
        excerpt
        frontmatter {
          title
          categories
        }
        fields {
          path
        }
      }
      previous {
        excerpt
        frontmatter {
          title
          categories
        }
        fields {
          path
        }
      }
      node {
        body
        internal {
          contentFilePath
        }
        excerpt
        fields {
          path
        }
        id
        tableOfContents(maxDepth: 4)
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

module.exports = { contentPagesQuery }
