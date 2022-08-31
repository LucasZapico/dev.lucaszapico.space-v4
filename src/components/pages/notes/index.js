import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import { SearchIcon } from '@chakra-ui/icons'
import { capitalizeCase } from '../../../utils/font-util'
import {
  Text,
  Box,
  Flex,
  Heading,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  GridItem,
  Grid,
} from '@chakra-ui/react'
import { generate } from 'shortid'
import { generateImageData } from 'gatsby-plugin-image'
import ArticleCard from './article-card'
import { CardOne, Tag } from '../../_index'

const NoteCard = ({ note }) => {
  const {
    title,
    categories,
    tags,
    date_created: dateCreated,
    last_modified: lastModified,
  } = note.node.frontmatter
  const noteTitle = capitalizeCase(title)

  return (
    <CardOne colSpan={{ base: 6, md: 3 }} as={GridItem}>
      <Flex
        height="100%"
        justifyContent="space-between"
        direction="column"
        as={GatsbyLink}
        to={`/${note.node.fields.path}`}
      >
        <Box>
          <Heading as="h4" size="md" mb={2} color="brand.three">
            {noteTitle}
          </Heading>
          <Text>{note.node.excerpt}</Text>
          <Text color="gray.300" mb={0} fontSize="xs">
            published: {dateCreated.slice(0, 10)}
          </Text>
          <Text color="gray.300" mb={4} fontSize="xs">
            last updated: {lastModified.slice(0, 10)}
          </Text>
        </Box>
        <Flex flexWrap="wrap">
          {categories.map((c) => {
            if (c != 'notes') {
              return <Tag mb={4}>{c}</Tag>
            }
          })}
        </Flex>
      </Flex>
    </CardOne>
  )
}

const Notes = () => {
  const { recentNotes } = useStaticQuery(query)
  const [Notes, setNotes] = useState(recentNotes.edges)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    /**
     * TODO: review for refactor
     */
    if (recentNotes && search.length > 0) {
      const searchResults =
        recentNotes &&
        recentNotes.edges.filter((article) => {
          const title = article.node.frontmatter.title.toLowerCase()
          return title.includes(search)
        })

      if (searchResults.length > 0) {
        setNotes(searchResults)
      } else {
        setNotes(recentNotes.edges)
      }
    } else {
      setNotes(recentNotes.edges)
    }
  }, [search])

  return (
    <>
      {/* <Box pl={4}>
        <Heading>Test</Heading>

      </Box> */}
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
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(6, 1fr)" gap={10}>
            {Notes && Notes.map((note, i) => <NoteCard note={note} />)}
          </Grid>
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
          parent {
            id
            ... on File {
              id
              name
              dir
              relativeDirectory
              relativePath
            }
          }
          excerpt
          id
          fields {
            path
          }
          frontmatter {
            title
            categories
            description
            tags
            date_created
            last_modified
            type
          }
        }
      }
    }
  }
`

export default Notes
