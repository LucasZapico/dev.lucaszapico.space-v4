import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ArticleSection from './article-section'
import HomeHero from './hero'
import ProjectSections from './project-section'

const Home = () => {
  const { recentArticles, recentProjects } = useStaticQuery(query)
  return (
    <>
      <HomeHero />
      <ProjectSections recentProjects={recentProjects} />
      <ArticleSection recentArticles={recentArticles} />
    </>
  )
}

export const query = graphql`
  query {
    recentArticles: allMarkdownRemark(
      filter: { frontmatter: { isdraft: { eq: false }, type: { eq: "post" } } }
      sort: { fields: frontmatter___date_created, order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            path
          }
          excerpt(format: HTML)
          frontmatter {
            title
            categories
            description
            tags
          }
        }
      }
    }

    recentProjects: allMarkdownRemark(
      filter: {
        frontmatter: { isdraft: { eq: false }, type: { eq: "project" } }
      }
      sort: { fields: frontmatter___date_created, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(format: HTML)

          frontmatter {
            title
            subHeader
            categories
            description
            tags
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
`

export default Home
