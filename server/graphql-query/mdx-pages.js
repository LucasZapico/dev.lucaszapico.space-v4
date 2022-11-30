const allMdxPageQuery = `{
  allMdx(
    filter: {frontmatter: {isdraft: {eq: false}}}
    sort: {fields: frontmatter___date_created, order: DESC}
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
    }
  }
}`

module.exports = { allMdxPageQuery }
