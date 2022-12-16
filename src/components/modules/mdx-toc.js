import React from "react"
import { generate } from "shortid"
import { Flex, Box, Heading, Link } from "@chakra-ui/react"
import { Link as GatsbyLink, graphql } from "gatsby"

const TOCChildren = ({ pagePath, items, iterator }) => {
  if (!items) {
    return false
  }
  return (
    <>
      {items.map((t) => {
        console.log(typeof t.title)
        console.log(t)
        if(typeof t.title === "string"){
          const name = `${t.title.slice(0, 1).toUpperCase()}${t.title.slice(1)}`

        if (Object.prototype.hasOwnProperty.call(t, "items")) {
          return (
            <Flex key={generate()} flexDir="column">
              <Link
                variant="aside"
                ml={iterator * 4}
                key={generate()}
                as={GatsbyLink}
                to={`${t.url}`}
                mb={2}
                fontSize="sm"
              >
                <span>&#8226;</span> {name}
              </Link>
              <TOCChildren items={t.items} iterator={iterator + 1} />
            </Flex>
          )
        } else {
          return (
            <Link
              variant="aside"
              ml={iterator * 4}
              key={generate()}
              as={GatsbyLink}
              to={`${t.url}`}
              mb={2}
              fontSize="sm"
            >
              <span>&#8226;</span> {name}
            </Link>
          )
        }
      }
      })
    }
        
    </>
  )
}

const MdxTOC = ({ tableOfContents, pagePath }) => {
  return (
    <Box
      position={{ base: "static", lg: "sticky" }}
      top={20}
      right="2rem"
      py={6}
      px={4}
      as="aside"
      
      // overflowY="scroll"
    >
      <Heading as="div" variant="tri" mb={2} size="md">
        Table of Contents
      </Heading>
      <Box display="flex" flexDir="column" as="nav" >
        <TOCChildren
          items={tableOfContents.items}
          pagePath={pagePath}
          iterator={1}
        />
      </Box>
    </Box>
  )
}

export default MdxTOC
