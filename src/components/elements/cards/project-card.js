import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import { GridItem, Heading, Box, Text, useColorMode } from "@chakra-ui/react"
import { CardOne, Tag } from "components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { generate } from "shortid"

const ProjectCard = ({ cardObj }) => {
  const { colorMode } = useColorMode()
  const { defaultImage } = useStaticQuery(query)
  const {
    title = "",
    subHeader = "",
    featuredImage = "",
    categories = [],
    path = "",
  } = cardObj

  const image =
    featuredImage !== "" ? getImage(featuredImage) : getImage(defaultImage)
  return (
    <GridItem colSpan={{ base: 6, md: 3 }}>
      <CardOne to={`/${path}`} as={GatsbyLink} display="flex" flexWrap="wrap">
        <Box
          display="flex"
          justifyContent="space-between"
          flexDir="column"
          width={{ base: "100%", lg: "40%" }}
          pr={{ base: "auto", md: 4 }}
        >
          <Box>
            <Heading as="h4" size="md" variant="tri">
              {title}
            </Heading>
            {/* <Heading as="div" variant="sec" size="sm" noOfLines={2}></Heading> */}
            <Text as="div" size="md" noOfLines={3}>
              {subHeader}
            </Text>
          </Box>
          <Box mb={4} color={colorMode === "dark" ? "brand.300" : "yellow.600"}>
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
        <Box
          filter={colorMode === "dark" ? "saturate(0.4)" : "saturate(0.6)"}
          width={{ base: "100%", lg: "60%" }}
        >
          <GatsbyImage image={image} alt={`${title} featured Image`} />
        </Box>
      </CardOne>
    </GridItem>
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

export default ProjectCard
