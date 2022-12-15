import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import { SearchIcon } from "@chakra-ui/icons"

import {
  Flex,
  Box,
  Heading,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react"
import { generate } from "shortid"
import { generateImageData } from "gatsby-plugin-image"
import { ProjectCard, ProjectSection, CardOne } from "components"

const TagCloud = ({ recentProjects, filter, setFilter }) => {
  const [cats, setCats] = useState({})

  function handleCats() {
    const tmpCat = {}
    recentProjects.edges.forEach((e, i) => {
      e.node.frontmatter.categories.forEach((c, j) => {
        if (!(c in cats)) {
          tmpCat[c] = 1
        } else {
          tmpCat[c] += 1
        }
      })
    })
    setCats(tmpCat)
  }

  useEffect(() => {
    handleCats()
  }, [])

  return (
    <Flex flexWrap="wrap">
      {Object.keys(cats).map((c) => {
        return (
          <Tag
            key={generate()}
            variant="sec"
            mr={2}
            mb={2}
            onClick={() => setFilter(c)}
          >
            #{c}
          </Tag>
        )
      })}
    </Flex>
  )
}

const Projects = () => {
  const { recentProjects } = useStaticQuery(query)
  const [filter, setFilter] = useState("")
  const [projects, setProjects] = useState(recentProjects)

  function handleFilter(currentFilter) {
    return recentProjects.edges.filter((e, i) => {
      const cats = e.node.frontmatter.categories
      if (cats.includes(currentFilter)) {
        return e
      }
    })
  }

  useEffect(() => {
    const filteredProj = handleFilter(filter)

    if (filter !== "") {
      setProjects((prev) => {
        return { edges: filteredProj }
      })
    }
  }, [filter])

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="3xl">
          Projects and Work
        </Heading>
        {projects && (
          <TagCloud
            recentProjects={projects}
            setFilter={setFilter}
            filter={filter}
          />
        )}
        {projects && <ProjectSection recentProjects={projects} />}
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    recentProjects: allMdx(
      sort: { fields: frontmatter___date_created, order: DESC }
      filter: {
        frontmatter: { isdraft: { eq: false }, type: { eq: "project" } }
      }
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

export default Projects
