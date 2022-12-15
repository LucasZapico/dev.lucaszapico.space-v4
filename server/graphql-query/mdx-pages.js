const allMdxPageQuery = `{
  allMdx(
    filter: {frontmatter: {isdraft: {eq: false}, type: {eq: "project" }}}
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
        excerpt
        frontmatter {
          title
        }
        fields {
          path
        }
      }
      previous {
        excerpt
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
