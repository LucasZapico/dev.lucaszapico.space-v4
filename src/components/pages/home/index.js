import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import ArticleSection from "./article-section"
import HomeHero from "./hero"
import { ProjectSection } from "components"
import { Heading, Flex, Box, Link, Container, Tag } from "@chakra-ui/react"
import { generate } from "shortid"

const technologies = [
  "JavaScript",
  "React",
  "Nextjs",
  "Gatsby",
  "Node",
  // "Bun",
  "Express",
  "Python",
  "Pandas",
  "Flask",
  "Docker",
  "Linux",
]

const Home = () => {
  const { recentArticles, recentProjects } = useStaticQuery(query)
  return (
    <>
      <HomeHero />
      <Container maxW="container.xl">
        <Heading size="md">Technical Skills</Heading>
        <Flex flexWrap="wrap">
          {technologies.map((t) => {
            return (
              <Tag mr={2} mb={2}variant="sec" key={generate()}>
                #{t}
              </Tag>
            )
          })}
        </Flex>
                <Heading textAlign="left" as="h3" size="2xl">
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
    recentArticles: allMdx(
      filter: {
        frontmatter: { type: { ne: "project" }, isdraft: { eq: false } }
      }
      sort: {frontmatter: {date_created: DESC}}
    ) {
      edges {
        node {
          id
          fields {
            path
          }
          excerpt
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
      sort: {frontmatter: {date_created: DESC}}
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
