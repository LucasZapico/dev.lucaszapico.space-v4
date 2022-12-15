import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect, memo } from "react"
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
  HStack,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import pathToJsonTree from "utils/path-to-json-tree"
import { generate } from "shortid"
import { HalfByHalfSection, LinkOne } from "components"
import SubjectTree from "components/modules/subject-tree"

export default function NoteTemplate({
  children,
  path,
  pageContext,
  location,
}) {
  const { next, previous, node, title } = pageContext
  const { tableOfContents, fields } = node
  const { path } = fields

  // const { recentNotes } = useStaticQuery(query)
  // const [notes, setNotes] = useState(recentNotes.edges)
  const [tree, setTree] = useState()

  // const makeDirTree = (edges) => {
  //   let jsonTree = []
  //   /* eslint-disable  */
  //   for (const e of edges) {
  //     const path = e.node.parent.relativePath
  //     const link = e.node.fields.path
  //     const i = path.replace("notes/", "").split("/")
  //     jsonTree = pathToJsonTree(i, link, jsonTree)
  //   }
  //   return jsonTree
  // }

  // useEffect(() => {
  //   if (recentNotes.edges.length > 0) {
  //     const newTree = makeDirTree(recentNotes.edges)

  //     setTree(newTree)
  //   }
  // }, [])

  /**
   * Memo functions
   */
  // const MemoSubjectTree = memo(SubjectTree)

  // const NextArticle = () => (
  //   <Box key={generate()}>
  //     <Box to={`/${next.fields.path}`} as={GatsbyLink}>
  //       {/* <Box>
  //           <GatsbyImage
  //             alt=""
  //             image={
  //               next.featuredImage.node.localFile.childImageSharp
  //                 .gatsbyImageData
  //             }
  //           />
  //         </Box> */}
  //       <Box p={{ base: 5, md: 10 }}>
  //         <Heading as="h4" size="lg">
  //           {next.frontmatter.title}
  //         </Heading>
  //         {/* <Text as="lg" dangerouslySetInnerHTML={{ __html: next.excerpt }} /> */}
  //       </Box>
  //     </Box>
  //   </Box>
  // )

  // const PrevArticle = () => (
  //   <Box key={generate()}>
  //     <Box as={GatsbyLink} to={`/${previous.fields.path}`}>
  //       {/* <Box>
  //           <GatsbyImage
  //             alt=""
  //             image={
  //               previous.featuredImage.node.localFile.childImageSharp
  //                 .gatsbyImageData
  //             }
  //           />
  //         </Box> */}
  //       <Box p={{ base: 5, md: 10 }}>
  //         <Heading as="h4" size="lg">
  //           {previous.frontmatter.title}
  //         </Heading>
  //         {/* <Text
  //           as="lg"
  //           dangerouslySetInnerHTML={{
  //             __html: previous.excerpt,
  //           }}
  //         /> */}
  //       </Box>
  //     </Box>
  //   </Box>
  // )

  const BreadCrumbs = () => (
    <Box mt={6} mb={10}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink to="/" as={GatsbyLink}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink to="/notes" as={GatsbyLink}>
            Notes
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
        <Box py={10} display="flex" flexWrap="wrap">
          <Box
            overflow="scroll"
            // backgroundColor="gray.800"
            pl={4}
            py={10}
            display={{ base: "none", md: "block" }}
            flexBasis={{ base: "0%", md: "30%", lg: "25%" }}
          >
            <Heading variant="tri">Subjects</Heading>
            {/* <MemoSubjectTree tree={tree} /> */}
          </Box>
          <Box
            flexBasis={{ base: "100%", md: "60%", lg: "75%" }}
            py={10}
            px={10}
          >
            <Heading mt={6} mb={4} as="h1" size="2xl">
              {title}
            </Heading>
            <BreadCrumbs />
            <HStack flexWrap="wrap" py={6}>
              {node.frontmatter.categories &&
                node.frontmatter.categories.map((cat, i) => (
                  <Tag variant="sec" key={generate()}>
                    #{cat}
                  </Tag>
                ))}
            </HStack>
            <Box
              display="flex"
              flexDirection={{ base: "column-reverse", lg: "row" }}
              justifyContent="space-between"
              as="main"
              className="article-wrapper"
            >
              {/* <TOC width="20%" /> */}
            </Box>
          </Box>
        </Box>

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

// export const query = graphql`
//   query {
//     recentNotes: allMdx(
//       filter: { frontmatter: { isdraft: { eq: false }, type: { eq: "note" } } }
//       sort: { fields: frontmatter___date_created, order: DESC }
//     ) {
//       edges {
//         node {
//           # parent {
//           #   id
//           #   ... on File {
//           #     id
//           #     name
//           #     dir
//           #     relativeDirectory
//           #     relativePath
//           #   }
//           # }
//           excerpt
//           id
//           fields {
//             path
//           }
//           frontmatter {
//             title
//             categories
//             description
//             tags
//             date_created
//             last_modified
//             type
//           }
//         }
//       }
//     }
//   }
// `
