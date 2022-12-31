const projectPageQuery = `{
  allMdx(
    sort: {fields: frontmatter___date_created, order: DESC}
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
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
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
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        fields {
          path
        }
      }
    }
  }
}`

module.exports = { projectPageQuery }
