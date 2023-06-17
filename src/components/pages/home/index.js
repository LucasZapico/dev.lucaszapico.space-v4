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

const learning = [
  "GoLang",
  "Machine Learning",
  "PyTorch", 
]

const Home = () => {
  const { recentArticles, recentProjects } = useStaticQuery(query)
  return (
    <>
      <HomeHero />
      <Container maxW="container.xl">
        <Heading size="md">Stuff I&apos;m Pretty Good At:</Heading>
        <Flex flexWrap="wrap">
          {technologies.map((t) => {
            return (
              <Tag mr={2} variant="sec" key={generate()}>
                #{t}
              </Tag>
            )
          })}
        </Flex>
        <Heading size="md">Stuff I&apos;m Interested In or Learning:</Heading>
        <Flex flexWrap="wrap">
          {learning.map((t) => {
            return (
              <Tag mr={2} variant="sec" key={generate()}>
                #{t}
              </Tag>
            )
          })}
        </Flex>
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
    recentArticles: allMdx(
      filter: {
        frontmatter: { type: { ne: "project" }, isdraft: { eq: false } }
      }
      sort: { fields: frontmatter___date_created, order: DESC }
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
