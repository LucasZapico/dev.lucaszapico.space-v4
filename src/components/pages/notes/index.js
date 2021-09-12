import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import { SearchIcon } from '@chakra-ui/icons'

import {
  Box,
  Heading,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
} from '@chakra-ui/react'
import { generate } from 'shortid'
import { generateImageData } from 'gatsby-plugin-image'
import ArticleCard from './article-card'

const Notes = () => {
  const { recentNotes } = useStaticQuery(query)
  const [Notes, setNotes] = useState(recentNotes.edges)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (recentNotes && search.length > 0) {
      console.log('art', recentNotes)
      console.log(search)
      const searchResults =
        recentNotes &&
        recentNotes.edges.filter((article) => {
          const title = article.node.frontmatter.title.toLowerCase()
          return title.includes(search)
        })
      console.log('results', results)
      if (searchResults.length > 0) {
        setNotes(searchResults)
      } else {
        setNotes(recentNotes.edges)
      }
    }
    console.log('a', Notes)
  }, [search])

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="4xl">
          Notes
        </Heading>
        <Container maxW="container.md" px={0} py={10}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search"
              size="lg"
              defaultValue={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>

          {/* <Box>
            {results &&
              results.map((r, i) => <Box>{r.node.frontmatter.title}</Box>)}
          </Box> */}
        </Container>
        <Container maxW="container.md">
          {Notes &&
            Notes.map((note, i) => (
              <Box as={GatsbyLink} to={`/${note.node.fields.path}`}>
                <Heading as="h4" size="md" mb={2}>
                  {note.node.frontmatter.title}
                </Heading>
                <Divider mb={6} />
              </Box>
            ))}
        </Container>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    recentNotes: allMarkdownRemark(
      filter: { frontmatter: { isdraft: { eq: false }, type: { eq: "note" } } }
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
            categories
            description
            tags
          }
        }
      }
    }
  }
`

export default Notes
