import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import { Heading, Box, Text, Flex, Tag, useColorMode } from "@chakra-ui/react"
import { CardOne } from "components"
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
    <CardOne
      to={`/${path}`}
      as={GatsbyLink}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minH="15rem"
    >
      {image && (
        <Box
          filter={colorMode === "dark" ? "saturate(0.4)" : "saturate(0.6)"}
          mb={4}
        >
          <GatsbyImage image={image} alt={`${title} featured Image`} />
        </Box>
      )}
      <Box flex="1" display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <Heading as="h4" size="md" variant="tri">
            {title}
          </Heading>
          <Text variant="sec" size="md" noOfLines={3}>
            {subHeader}
          </Text>
        </Box>
        <Flex flexWrap="wrap" mt={4}>
          {categories &&
            categories.map((cat) => {
              if (cat !== "project") {
                return (
                  <Tag size="sm" mb={2} mr={1} variant="sec" key={generate()}>
                    #{cat}
                  </Tag>
                )
              }
              return null
            })}
        </Flex>
      </Box>
    </CardOne>
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
