import { Link as GatsbyLink } from "gatsby"
import React from "react"
import {
  Grid,
  GridItem,
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Tag,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { generate } from "shortid"
import { BreadCrumbGroup, HalfByHalfSection, LinkOne, MdxTOC } from "components"
import MDXLayout from "components/base/layout/mdx-layout"

export default function ArticleTemplate({
  children,
  path,
  pageContext,
  location,
}) {
  const { next, previous, node, title } = pageContext
  const { tableOfContents, fields } = node
  let imageNext = null
  let imagePrev = null
  if (next?.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData) {
    imageNext =
      next.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  }
  if (previous?.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData) {
    imagePrev =
      previous.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  }

  const NextArticle = () => (
    <Box key={generate()}>
      <Box to={`/${next.fields.path}`} as={GatsbyLink}>
        {/* {next.featuredImage.node.localFile.childImageSharp.gatsbyImageData} */}
        <Box>{imageNext && <GatsbyImage alt="" image={imageNext} />}</Box>
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
        <Box>{imagePrev && <GatsbyImage alt="" image={imagePrev} />}</Box>
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
      <Box minHeight="100vh">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 0, lg: 6 }}>
            <Box
              mx="auto"
              pt={40}
              pb={20}
              as={GridItem}
              colSpan={{ base: 12, lg: 8 }}
            >
              <Box px={{ base: 0, md: 4, lg: 4 }} maxW={{ md: "650px" }}>
                <Heading mt={6} mb={4} as="h1" size="2xl">
                  {title}
                </Heading>
                <BreadCrumbGroup size="sm" pathArr={["articles", title]} />
                <Flex flexWrap="wrap" py={6}>
                  {node.frontmatter.categories &&
                    node.frontmatter.categories.map((cat, i) => (
                      <Tag mr={1} mb={1} variant="sec" key={generate()}>
                        #{cat}
                      </Tag>
                    ))}
                </Flex>
                <MDXLayout>
                  <Box py={10}>{children}</Box>
                </MDXLayout>
              </Box>
            </Box>
            <Box
              as={GridItem}
              display={{ base: "none", xl: "block" }}
              colSpan={{ base: 0, lg: 4 }}
            >
              <MdxTOC
                tableOfContents={tableOfContents}
                pagePath={path}
                width="20%"
              />
            </Box>
          </Grid>
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
