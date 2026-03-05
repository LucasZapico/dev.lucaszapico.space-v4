import React from "react"
import { CardOne } from "components"
import { Link as GatsbyLink } from "gatsby"
import { Heading, Text, Box, Tag, Flex } from "@chakra-ui/react"
import { generate } from "shortid"

const ArticleCard = ({ cardObj }) => {
  const { title, description, categories, path } = cardObj

  return (
    <CardOne
      to={`/${path}`}
      as={GatsbyLink}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minH="15rem"
    >
      <Box>
        <Heading as="h4" size="md" variant="tri">
          {title}
        </Heading>
        <Text variant="sec" size="md" noOfLines={3}>
          {description}
        </Text>
      </Box>
      <Flex flexWrap="wrap" mt={4}>
        {categories &&
          categories.map((cat) => (
            <Tag size="sm" mb={2} mr={1} variant="sec" key={generate()}>
              #{cat}
            </Tag>
          ))}
      </Flex>
    </CardOne>
  )
}

export default ArticleCard
