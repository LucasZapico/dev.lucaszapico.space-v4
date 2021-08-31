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
import { HalfByHalfSection, LinkOne } from '../components/_index'

export default function ArticleTemplate({ path, pageContext, location }) {
  const { next, previous, node, title } = pageContext
  console.log('page', pageContext)

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

  return (
    <>
      {/* <SEO location={location} title={title} /> */}
      <Box minHeight="100vh" pt={10} pb={10}>
        <Container maxW="container.sm">
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
          {/* <Box>
            <GatsbyImage
              alt=""
              image={
                node.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
            />
          </Box> */}
          <Heading mt={6} mb={4} as="h1" size="2xl">
            {title}
          </Heading>
          <main>
            <Box
              className="article-wrapper"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          </main>
        </Container>

        <Container maxW="container.xl" my={10}>
          <Box my={10}>
            <Heading as="h3" size="3xl">
              More Articles
            </Heading>
            <LinkOne to="/blog">All Articles</LinkOne>
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
