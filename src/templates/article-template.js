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
        <Container maxW="container.xl" >
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <Box
            mx="auto"
            px={{ base: 4, md: 4, lg: 4 }}
            pt={40}
            pb={20}
            as={GridItem}
            colSpan={{ base: 12, lg: 8 }}
          >
            <Box maxW={{ md: "650px" }} mx="auto">
              <Heading mt={6} mb={4} as="h1" size="2xl">
                {title}
              </Heading>
              <BreadCrumbGroup pathArr={["articles", title]} />
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
