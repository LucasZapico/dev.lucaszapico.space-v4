import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import { SearchIcon } from '@chakra-ui/icons'
import { CardOne } from '../../_index'
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
              type="tel"
              placeholder="search"
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
            articles.map((article, i) => (
              <CardOne
                key={generate()}
                className="link"
                mt={6}
                to={`/${article.node.fields.path}`}
                as={GatsbyLink}
                width={{ base: '100%', md: '45%', lg: '30%' }}
                minH="15rem"

                // onClick={() => {
                //   navigate(`/${article.node.fields.path}`)
                // }}
              >
                <Heading as="h4" size="md" variant="sec">
                  {article.node.frontmatter.title}
                </Heading>
                <Heading as="h5" variant="sec" size="md">
                  {article.node.frontmatter.description}
                </Heading>
              </CardOne>
            ))}
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
