import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Link as GatsbyLink, graphql } from 'gatsby'
import React from 'react'
import { generate } from 'shortid'
import { HalfByHalfSection, LinkOne, Tag } from '../components/_index'

export default function ArticleTemplate({ path, pageContext, location }) {
  const { next, previous, node, title, tableOfContents } = pageContext
  console.log('page', pageContext)
  const TOC = () => (
    <Box
      px={2}
      py={10}
      dangerouslySetInnerHTML={{ __html: node.tableOfContents }}
    />
  )
  const NextArticle = () => (
    <Box key={generate()}>
      <Box to={`/${next.fields.path}`} as={GatsbyLink}>
        {/* <Box>
            <GatsbyImage
              alt=""
              image={
                next.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
            />
          </Box> */}
        <Box p={{ base: 5, md: 10 }}>
          <Heading as="h4" size="lg">
            {next.frontmatter.title}
          </Heading>
          {/* <Text as="lg" dangerouslySetInnerHTML={{ __html: next.excerpt }} /> */}
        </Box>
      </Box>
    </Box>
  )

  const PrevArticle = () => (
    <Box key={generate()}>
      <Box as={GatsbyLink} to={`/${previous.fields.path}`}>
        {/* <Box>
            <GatsbyImage
              alt=""
              image={
                previous.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
            />
          </Box> */}
        <Box p={{ base: 5, md: 10 }}>
          <Heading as="h4" size="lg">
            {previous.frontmatter.title}
          </Heading>
          {/* <Text
              as="lg"
              dangerouslySetInnerHTML={{
                __html: previous.excerpt,
              }}
            /> */}
        </Box>
      </Box>
    </Box>
  )

  const BreadCrumbs = () => (
    <Box mt={6} mb={10}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink to="/" as={GatsbyLink}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink to="/blog" as={GatsbyLink}>
            Articles
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  )

  return (
    <>
      {/* <SEO location={location} title={title} /> */}
      <Box minHeight="100vh" pt={10} pb={10}>
        <Container
          maxW="container.xl"
          py={10}
          display="flex"
          flexWrap="wrap"
          flexDirection="row-reverse"
        >
          <TOC />
          <Container
            maxW="container.md"
            py={10}
            px={10}
            backgroundColor="brand.two"
          >
            <BreadCrumbs />
            <Heading mt={6} mb={4} as="h1" size="xl">
              {title}
            </Heading>
            <Box py={6}>
              {node.frontmatter.categories &&
                node.frontmatter.categories.map((cat, i) => (
                  <Tag key={generate()}>{cat}</Tag>
                ))}
            </Box>
            <main>
              <Box
                py={10}
                className="article-wrapper"
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
            </main>
          </Container>
        </Container>

        <Container maxW="container.xl" my={10}>
          <Box my={10}>
            <Heading as="h3" size="xl">
              More Articles
            </Heading>
            <LinkOne to="/articles">All Articles</LinkOne>
          </Box>
          <HalfByHalfSection
            right={previous !== null ? <PrevArticle /> : ''}
            left={next !== null ? <NextArticle /> : ''}
          />
        </Container>
      </Box>
    </>
  )
}
