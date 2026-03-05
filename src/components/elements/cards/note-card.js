import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { capitalizeCase } from "utils/font-util"
import { Text, Box, Flex, Heading, Tag } from "@chakra-ui/react"
import { CardOne } from "components"
import { generate } from "shortid"

const NoteCard = ({ note }) => {
  const {
    title,
    categories,
    date_created: dateCreated,
    last_modified: lastModified,
  } = note.node.frontmatter
  const noteTitle = capitalizeCase(title)

  return (
    <CardOne
      as={GatsbyLink}
      to={`/${note.node.fields.path}`}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minH="15rem"
    >
      <Box>
        <Heading variant="tri" as="h4" size="md" mb={2}>
          {noteTitle}
        </Heading>
        <Text noOfLines={4} fontSize="sm">
          {note.node.excerpt}
        </Text>
        <Box>
          <Text variant="sec" mb={0} fontSize="xs">
            published: {dateCreated ? dateCreated.slice(0, 10) : "N/A"}
          </Text>
          <Text variant="sec" mb={0} fontSize="xs">
            updated: {lastModified ? lastModified.slice(0, 10) : "N/A"}
          </Text>
        </Box>
      </Box>
      <Flex flexWrap="wrap" mt={4}>
        {categories &&
          categories.map((c) => {
            if (c !== "notes") {
              return (
                <Tag size="sm" mb={2} mr={1} variant="sec" key={generate()}>
                  #{c}
                </Tag>
              )
            }
            return null
          })}
      </Flex>
    </CardOne>
  )
}

export default NoteCard
