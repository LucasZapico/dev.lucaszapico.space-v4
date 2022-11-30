import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import ArticleSection from "./article-section"
import HomeHero from "./hero"
import { ProjectSection } from "components"
import { Heading, Link, Container } from "@chakra-ui/react"

const Home = () => {
  const { recentArticles, recentProjects } = useStaticQuery(query)
  return (
    <>
      <HomeHero />
      <Container maxW="container.xl">
        <Heading textAlign="center" as="h3" size="2xl">
          Recent Projects
        </Heading>
        <Link as={GatsbyLink} to="/projects" variant="linkOne">
          See All Project
        </Link>
        {recentProjects && <ProjectSection recentProjects={recentProjects} />}
      </Container>
      {recentArticles && <ArticleSection recentArticles={recentArticles} />}
    </>
  )
}

export const query = graphql`
  query {
    recentArticles: allMarkdownRemark(
      filter: {
        frontmatter: { isdraft: { eq: false }, type: { ne: "project" } }
      }
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

    recentProjects: allMdx(
      sort: { fields: frontmatter___date_created, order: DESC }
      filter: {
        frontmatter: { isdraft: { eq: false }, type: { eq: "project" } }
      }
      limit: 4
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            subHeader
            categories
            date_created
            title
            tags
            isdraft
            last_modified
            link
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
  }
`
export default Home
