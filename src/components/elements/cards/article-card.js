import React from "react"
import { CardOne } from "components"
import { Link as GatsbyLink } from "gatsby"
import { Heading, Text, Box, Tag, VStack } from "@chakra-ui/react"
import { generate } from "shortid"

const ArticleCard = ({ article { node }, dummy = {} }) => {
  const {frontmatter, fields } = node
  const { title = '', description = '', categories = [], tags = [] } = frontmatter || dummy
  const { path } =  fields || ''
  return (
    <CardOne
      key={generate()}
      className="link"
      mt={6}
      to={`/${path}`}
      as={GatsbyLink}
      width={{ base: "100%", md: "45%", lg: "30%" }}
      minH="15rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex flewDir="column" justContent="space-between">
      <Box>
        <Heading as="h4" size="md" variant="sec">
          {title}
        </Heading>
        <Text as="h5" variant="sec" size="md" noOfLines={3}>
          {description}
        </Text>
      </Box>
      <Flex flexWrap="wrap">
        {categories && categories.map((cat, i) => (
          <Tag mb={2} mr={1} variant="sec" key={generate()}>
          #{cat}
        </Tag>
        ))}
      </Flex>
      </Flex>
    </CardOne>
  )
}

export default ArticleCard
