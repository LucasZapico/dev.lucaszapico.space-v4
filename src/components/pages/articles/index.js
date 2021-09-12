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
} from '@chakra-ui/react'
import { generate } from 'shortid'
import { generateImageData } from 'gatsby-plugin-image'
import ArticleCard from './article-card'

const Articles = () => {
  const { recentArticles } = useStaticQuery(query)
  const [articles, setArticles] = useState(recentArticles.edges)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (recentArticles && search.length > 0) {
      console.log('art', recentArticles)
      console.log(search)
      const searchResults =
        recentArticles &&
        recentArticles.edges.filter((article) => {
          const title = article.node.frontmatter.title.toLowerCase()
          return title.includes(search)
        })
      console.log('results', results)
      if (searchResults.length > 0) {
        setArticles(searchResults)
      }
    } else {
      setResults([])
    }
    console.log('a', articles)
  }, [search])

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="4xl">
          Articles
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
        <Container
          maxW="container.xl"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {articles &&
            articles.map((article, i) => <ArticleCard article={article} />)}
        </Container>
      </Container>
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
  }
`

export default Articles
