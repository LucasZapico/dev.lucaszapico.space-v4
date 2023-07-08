import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect, memo } from "react"
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
import pathToJsonTree from "utils/path-to-json-tree"
import { generate } from "shortid"
import { BreadCrumbGroup, HalfByHalfSection, LinkOne, MdxTOC } from "components"
import SubjectTree from "components/modules/subject-tree"
import MDXLayout from "components/base/layout/mdx-layout"
import SideNavContainer from "components/modules/side-nav-container"
import { atom, useAtom } from 'jotai'
import { treeAtom } from "store"



export default function NoteTemplate({
  children,
  path,
  pageContext,
  location,
}) {
  
  const { next, previous, node, title } = pageContext
  const { tableOfContents, fields } = node
  const { recentNotes } = useStaticQuery(query)
  const [notes, setNotes] = useState(recentNotes.edges)
  const [tree, setTree] = useState()
  const [treeState, setTreeState] = useAtom(treeAtom)
  const [currentEl, setCurrentEl] = useState([])

  useEffect(() => {}, [treeState, setTreeState])

  const makeDirTree = (edges) => {
    let jsonTree = []
    /* eslint-disable  */
    for (const e of edges) {
      const path = e.node.parent.relativePath

      if (path.match(/trash/gi) < 1) {
        const link = e.node.fields.path
        const i = path.replace("notes/", "").split("/")
        jsonTree = pathToJsonTree(i, link, jsonTree)
      }
    }
    return jsonTree
  }

  useEffect(() => {
    if (recentNotes.edges.length > 0) {
      const newTree = makeDirTree(recentNotes.edges)

      setTree(newTree)
    }
  }, [])

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
      <Box minHeight="100vh">
        <Container maxW="container.xxl">
        <Grid templateColumns="repeat(12, 1fr)" gap={{base: 0, lg: 6}}>
          <SideNavContainer
            display={{ base: "none", lg: "block" }}
            as={GridItem}
            colSpan={{ base: 0, lg: 3 }}
            pl={{base: 0, lg: 4}}
            py={10}
          >
            <SubjectTree tree={tree} />
          </SideNavContainer>

          <Box
            mx="auto"
            px={{ base: 0, md: 4, lg: 4 }}
            pt={20}
            pb={20}
            as={GridItem}
            colSpan={{ base: 12, lg: 6 }}
          >
            <Box maxW={{ md: "650px" }}>
              <Heading mt={6} mb={4} as="h1" size="xl">
                {title}
              </Heading>
              <BreadCrumbGroup pathArr={["note", title]} />
              <Text fontSize="xs" mb={0} varinat="sec">Date Created: {node.frontmatter.date_created}</Text>
              <Text fontSize="xs" varinat="sec">Last Update: {node.frontmatter.last_modified}</Text>
              <Flex flexWrap="wrap" py={6}>
                {node.frontmatter.categories &&
                  node.frontmatter.categories.map((cat, i) => (
                    <Tag mr={1} mb={1} variant="sec" key={generate()}>
                      #{cat}
                    </Tag>
                  ))}
              </Flex>
              <Box display={{ base: "block", xl: "none" }}>
                <MdxTOC tableOfContents={tableOfContents} pagePath={path} />
              </Box>
              <MDXLayout>
                <Box py={10}>{children}</Box>
              </MDXLayout>
            </Box>
          </Box>
          <Box
            as={GridItem}
            display={{ base: "none", xl: "block" }}
            colSpan={{ base: 0, lg: 3 }}
          >
            <MdxTOC tableOfContents={tableOfContents} pagePath={path} />
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

export const query = graphql`
  query {
    recentNotes: allMdx(
      filter: { frontmatter: { type: { eq: "note" }, isdraft: { eq: false } } }
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
