import React, { useState, useEffect, memo } from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import { SearchIcon } from "@chakra-ui/icons"
import { capitalizeCase } from "utils/font-util"
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
  Tag,
} from "@chakra-ui/react"
import { generate } from "shortid"
import { generateImageData } from "gatsby-plugin-image"
import { ArticleCard, CardOne, NoteCard } from "components"
import SubjectTree from "components/modules/subject-tree"
import pathToJsonTree from "utils/path-to-json-tree"

const NoteGrid = ({ notes }) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={10}>
      {notes &&
        notes.map((note, i) => <NoteCard key={generate()} note={note} />)}
    </Grid>
  )
}

/**
 * Memo functions
 */
const MemoNoteGrid = memo(NoteGrid)
const MemoSubjectTree = memo(SubjectTree)

const Notes = () => {
  const { recentNotes } = useStaticQuery(query)
  const [notes, setNotes] = useState(recentNotes.edges)
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const [tree, setTree] = useState()

  const makeDirTree = (edges) => {
    let jsonTree = []
    /* eslint-disable  */
    for (const e of edges) {
      const path = e.node.parent.relativePath
      const link = e.node.fields.path
      const i = path.replace("notes/", "").split("/")
      jsonTree = pathToJsonTree(i, link, jsonTree)
    }
    return jsonTree
  }

  useEffect(() => {
    if (recentNotes.edges.length > 0) {
      const newTree = makeDirTree(recentNotes.edges)

      setTree(newTree)
    }
  }, [])

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
    <Container maxW="container.xl">
      <Flex>
        <Box
          overflow="scroll"
          // backgroundColor="gray.800"
          pl={4}
          py={10}
          display={{ base: "none", md: "block" }}
          flexBasis={{ base: "0%", md: "30%", lg: "25%" }}
        >
          <Heading variant="tri">Subjects</Heading>
          <MemoSubjectTree tree={tree} />
        </Box>
        <Box flexBasis={{ base: "100%", md: "60%", lg: "75%" }}>
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
            <Box>
              <Heading as="h1" size="3xl">
                Notes
              </Heading>
              <Text fontSize="sm" as="blockquote" maxW="650px">
                ⚠️ Disclaimer: This is a personal public notes repository with
                the primary goal of being useful to the author and not
                necessarily for general use. It is meant to serve as;
                <br />
                <br />
                1. A public reference for common "let me remember that snippet,
                rule, gotcha etc"
                <br />
                2. Making my notes public forces me to edit, clarify and clean
                up otherwise more raw notes all lead to the review of the
                material and commitment to memory.
              </Text>
            </Box>
          </Container>
          <Container maxW="container.xl">
            <MemoNoteGrid notes={notes} />
          </Container>
        </Box>
      </Flex>
    </Container>
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
