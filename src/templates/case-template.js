import {
  Flex,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
  Tag,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Link as GatsbyLink, graphql } from "gatsby"
import React from "react"
import { generate } from "shortid"
import { HalfByHalfSection, LinkOne } from "components"
import MDXLayout from "components/base/layout/mdx-layout"

export default function CaseTemplate({
  children,
  path,
  pageContext,
  location,
}) {
  console.log("case template")
  const { next, previous, node, title, tableOfContents } = pageContext

  const TOC = () => (
    <Box
      position={{ base: "static", lg: "sticky" }}
      top="0px"
      right="2rem"
      paddingY={6}
      as="aside"
      className="toc"
    >
      <Heading as="div" color="gray.200" mb={2} size="xl">
        Table of Contents
      </Heading>
      <Box
        as="nav"
        px={2}
        py={10}
        dangerouslySetInnerHTML={{ __html: node.tableOfContents }}
      />
    </Box>
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
          <Text as="lg" dangerouslySetInnerHTML={{ __html: next.excerpt }} />
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
          <Text
            as="lg"
            dangerouslySetInnerHTML={{
              __html: previous.excerpt,
            }}
          />
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
          <BreadcrumbLink to="/projects" as={GatsbyLink}>
            Projects
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
          <Container maxW="container.xl" py={10} px={10}>
            <Heading mt={6} mb={4} as="h1" size="2xl">
              {title}
            </Heading>
            <BreadCrumbs />
            <Flex flexWrap="wrap" py={6}>
              {node.frontmatter.categories &&
                node.frontmatter.categories.map((cat, i) => (
                  <Tag variant="sec" mb={4} mr={1} key={generate()}>
                    {cat}
                  </Tag>
                ))}
            </Flex>
            <Box
              display="flex"
              flexDirection={{ base: "column-reverse", lg: "row" }}
              justifyContent="space-between"
              as="main"
            >
              <MDXLayout>
                <Box width={{ md: "650px" }} py={10}>
                  {children}
                </Box>
              </MDXLayout>
              <TOC width="20%" />
            </Box>
          </Container>
        </Container>

        <Container maxW="container.xl" my={10}>
          <Box my={10}>
            <Heading as="h3" size="xl">
              More {node.frontmatter.type === "note" ? "Notes" : "/Articles"}
            </Heading>
            {node.frontmatter.type === "note" ? (
              <LinkOne as={GatsbyLink} to="/notes">
                All Notes
              </LinkOne>
            ) : (
              <LinkOne as={GatsbyLink} to="/articles">
                All Articles
              </LinkOne>
            )}
          </Box>
          <HalfByHalfSection
            right={previous !== null ? <PrevArticle /> : ""}
            left={next !== null ? <NextArticle /> : ""}
          />
        </Container>
      </Box>
    </>
  )
}
