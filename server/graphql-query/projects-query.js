const projectPageQuery = `{
  allMdx(
    sort: {frontmatter: {date_created: DESC}}
    filter: {frontmatter: {isdraft: {eq: false}, type: {eq: "project"}}}
  ) {
    edges {
      node {
        id
        internal {
          contentFilePath
        }
        body
        frontmatter {
          title
          isComingSoon
          isdraft
          last_modified
          link
          subHeader
          tags
          technology_stack
          type
          categories
        }
        excerpt
        fields {
          path
        }
        tableOfContents(maxDepth: 4)
      }
      next {
        excerpt
        frontmatter {
          title
          subHeader
        }
        fields {
          path
        }
      }
      previous {
        excerpt
        frontmatter {
          title
          subHeader
        }
        fields {
          path
        }
      }
    }
  }
}`

module.exports = { projectPageQuery }
