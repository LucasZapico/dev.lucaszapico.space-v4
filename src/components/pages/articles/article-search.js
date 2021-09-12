import React, { useState, useEffect } from 'react'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Container,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Link as GatsbyLink } from 'gatsby'
import { generate } from 'shortid'

const ArticleSearch = ({ publishedArticles }) => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  console.log('da', publishedArticles)

  useEffect(() => {
    if (publishedArticles && search.length > 0) {
      const searchResults =
        publishedArticles &&
        publishedArticles.edges.filter((article) => {
          const title = article.node.frontmatter.title.toLowerCase()
          return title.includes(search)
        })
      console.log('searc', searchResults)
      if (searchResults.length > 0) {
        setResults(searchResults)
      }
    } else {
      setResults([])
    }
  }, [search])

  return (
    <Container maxW="container.md" px={0} py={10} position="relative">
      <InputGroup border="2px" rounded="lg" borderColor="gray.700">
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
      {results.length > 0 && (
        <Box
          bgGradient="linear(to-b, brand.two, brand.two)"
          position="absolute"
          width="100%"
          p={4}
          border="2px"
          rounded="lg"
          borderColor="gray.700"
        >
          {results &&
            results.map((r, i) => (
              <Link
                py={1}
                display="block"
                key={generate()}
                as={GatsbyLink}
                to={r.node.frontmatter.path}
              >
                {r.node.frontmatter.title}
              </Link>
            ))}
        </Box>
      )}
    </Container>
  )
}

export default ArticleSearch
