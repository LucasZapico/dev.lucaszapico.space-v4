import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import { SearchIcon } from '@chakra-ui/icons'

import {
  Flex,
  Box,
  Heading,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { generate } from 'shortid'
import { generateImageData } from 'gatsby-plugin-image'
import ProjectCard from './project-card'
import { ProjectSection, CardOne, Tag } from '../../_index'

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
          <Tag mb={2} hasBG={filter === c} onClick={() => setFilter(c)}>
            {c}
          </Tag>
        )
      })}
    </Flex>
  )
}

const Projects = () => {
  const { recentProjects } = useStaticQuery(query)
  const [filter, setFilter] = useState('')
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

    if (filter !== '') {
      setProjects((prev) => {
        return { edges: filteredProj }
      })
    }
  }, [filter])

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="4xl">
          Work
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
    recentProjects: allMarkdownRemark(
      filter: {
        frontmatter: { isdraft: { eq: false }, type: { eq: "project" } }
      }
      sort: { fields: frontmatter___date_created, order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            path
          }
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

export default Projects
