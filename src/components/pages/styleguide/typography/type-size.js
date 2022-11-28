import React from "react"
import { Heading, Box } from "@chakra-ui/react"

const TypographySizes = () => {
  return (
    <Box>
      <Heading as="div" size="4xl">
        Size One - 4xl
      </Heading>
      <Heading as="div" size="3xl">
        Size Two - 3xl
      </Heading>
      <Heading as="div" size="2xl">
        Size Three - 2xl
      </Heading>
      <Heading as="div" size="xl">
        Size Four - xl
      </Heading>
      <Heading as="div" size="lg">
        Size Five - lg
      </Heading>
      <Heading as="div" size="md">
        Size Six - md
      </Heading>
      <Heading as="div" size="sm">
        Size Sev - sm
      </Heading>
      <Heading as="div" size="xs">
        Size eight - xs
      </Heading>
    </Box>
  )
}

export default TypographySizes
