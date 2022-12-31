import React, { useState, useEffect, memo } from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import { SearchIcon } from "@chakra-ui/icons"
import { capitalizeCase } from "utils/font-util"
import {
  Text,
  Box,
  Flex,
  Heading,
  Container,
  GridItem,
  Grid,
  Tag,
} from "@chakra-ui/react"
import { ArticleCard, CardOne } from "components"
import { generate } from "shortid"

const NoteCard = ({ note }) => {
  const {
    title,
    categories,
    tags,
    date_created: dateCreated,
    last_modified: lastModified,
  } = note.node.frontmatter
  const noteTitle = capitalizeCase(title)

  return (
    <CardOne key={generate()} colSpan={{ base: 6, lg: 3 }} as={GridItem}>
      <Flex
        height="100%"
        justifyContent="space-between"
        direction="column"
        as={GatsbyLink}
        to={`/${note.node.fields.path}`}
      >
        <Flex flexGrow="1" justifyContent="space-between" direction="column">
          <Heading variant="tri" as="h4" size="md" mb={2}>
            {noteTitle}
          </Heading>
          <Text noOfLines={4} fontSize="sm">
            {note.node.excerpt}
          </Text>
          <Box opacity="0.8">
            <Text variant="sec" mb={0} fontSize="xs">
              published: {dateCreated.slice(0, 10)}
            </Text>
            <Text variant="sec" mb={4} fontSize="xs">
              last updated: {lastModified.slice(0, 10)}
            </Text>
          </Box>
        </Flex>
        <Flex flexWrap="wrap">
          {categories &&
            categories.map((c) => {
              if (c !== "notes") {
                return (
                  <Tag size="sm" mb={2} mr={1} variant="sec" key={generate()}>
                    #{c}
                  </Tag>
                )
              }
              return <div />
            })}
        </Flex>
      </Flex>
    </CardOne>
  )
}

export default NoteCard
