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
  Link,
  useColorMode,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import React, { useEffect } from "react"
import { generate } from "shortid"
import { HalfByHalfSection, LinkOne, MdxTOC, CardOne } from "components"
import MDXLayout from "components/base/layout/mdx-layout"

export default function CaseTemplate({
  children,
  path,
  pageContext,
  location,
}) {
  const { colorMode } = useColorMode()
  const { defaultImage } = useStaticQuery(query)
  const {
    next,
    previous,
    node: { frontmatter: { categories } = {}, tableOfContents, fields } = {},
    title = "",
  } = pageContext || {}

  const defaultImg = getImage(defaultImage)

  const NextArticle = () => {
    const {
      frontmatter: {
        featuredImage = "",
        subHeader = "",
        title: nextTitle = "",
        categories = [],
      } = {},
      fields: { path: nextPath = "" } = {},
    } = next || {}

    console.log("next")
    console.log(next)

    const nextImage =
      featuredImage !== "" ? getImage(featuredImage) : defaultImg

    return (next === {}) === false ? (
      <CardOne key={generate()}>
        {nextPath && (
          <Box to={`/${nextPath}`} as={GatsbyLink}>
            <Box>{nextImage && <GatsbyImage alt="" image={nextImage} />}</Box>

            <Box p={{ base: 5, md: 10 }}>
              <Heading as="h4" size="sm">
                Next <ArrowForwardIcon boxSize={10} />
              </Heading>
              {nextTitle && (
                <Heading as="h4" size="lg" variant="tri">
                  {nextTitle}
                </Heading>
              )}
              {subHeader && (
                <Text noOfLines={4} fontSize="md">
                  {subHeader}
                </Text>
              )}
            </Box>
            <Box color={colorMode === "dark" ? "brand.300" : "yellow.600"}>
              {categories.map((c, p) => {
                if (c !== "project") {
                  return p > categories.length - 1 ? (
                    `${c}`
                  ) : (
                    <span key={generate()}> #{c} &#8226; </span>
                  )
                }
              })}
            </Box>
          </Box>
        )}
      </CardOne>
    ) : (
      <></>
    )
  }

  const PrevArticle = () => {
    const {
      frontmatter: {
        featuredImage = "",
        subHeader = "",
        title: prevTitle = "",
        categories = [],
      } = {},
      fields: { path: prevPath } = {},
    } = previous || {}

    const prevImage =
      featuredImage !== "" ? getImage(featuredImage) : defaultImg

    console.log("previous")
    console.log(previous)

    return !(previous === {}) ? (
      <CardOne key={generate()}>
        <Box as={GatsbyLink} to={`/${prevPath}`}>
          <Box>
            <GatsbyImage alt="" image={prevImage} />
          </Box>
          <Box p={{ base: 5, md: 10 }}>
            <Heading as="h4" size="sm">
              <ArrowBackIcon boxSize={10} /> Prev
            </Heading>

            <Heading as="h4" size="lg" variant="tri">
              {prevTitle}
            </Heading>

            <Text noOfLines={4} fontSize="md">
              {subHeader}
            </Text>
          </Box>
          <Box color={colorMode === "dark" ? "brand.300" : "yellow.600"}>
            {categories.map((c, p) => {
              if (c !== "project") {
                return p > categories.length - 1 ? (
                  `${c}`
                ) : (
                  <span key={generate()}> #{c} &#8226; </span>
                )
              }
            })}
          </Box>
        </Box>
      </CardOne>
    ) : (
      <></>
    )
  }

  const BreadCrumbs = () => (
    <Box mt={6} mb={10}>
      <Breadcrumb >
        <BreadcrumbItem >
          <BreadcrumbLink size="sm" to="/" as={GatsbyLink}>
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
        <Container maxW="container.xl" py={10}>
          <Box as={Flex} justifyContent="center">
            <Box>
              <Heading mt={6} mb={4} as="h1" size="2xl">
                {title}
              </Heading>
              <BreadCrumbs />
              <Flex flexWrap="wrap" py={6}>
                {categories &&
                  categories.map((cat, i) => (
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
                  <Box width={{ md: "650px" }} py={10} mr={{ baser: 0, lg: 4 }}>
                    {children}
                  </Box>
                </MDXLayout>
                <MdxTOC
                  tableOfContents={tableOfContents}
                  pagePath={path}
                  width="20%"
                />
              </Box>
            </Box>
          </Box>
        </Container>

        <Container maxW="container.xl" my={10}>
          <Box my={10}>
            <Heading as="h3" size="xl">
              More Projects
            </Heading>
            <LinkOne as={GatsbyLink} to="/projects">
              All Projects
            </LinkOne>
          </Box>
          <HalfByHalfSection
            left={previous !== null ? <PrevArticle /> : <></>}
            right={next !== null ? <NextArticle /> : <></>}
          />
        </Container>
      </Box>
    </>
  )
}

export const query = graphql`
  query {
    defaultImage: file(relativePath: { eq: "illustration/6.png" }) {
      name
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
