import React from "react"
import {
  Flex,
  Text,
  Heading,
  Box,
  Container,
  Divider,
  VStack,
} from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"

const SetOne = () => {
  return (
    <Box>
      <Heading as="div" size="2xl" mb={0}>
        Some amazing Header
      </Heading>
      <Heading as="div" size="lg" mt={0}>
        Some impressive subheader
      </Heading>
    </Box>
  )
}

const SetTwo = () => {
  return (
    <Box>
      <Heading as="div" size="2xl" mb={0}>
        Some amazing Header
      </Heading>
      <Heading as="div" size="lg" variant="sec" mt={0}>
        Some impressive subheader
      </Heading>
    </Box>
  )
}

const SetThree = () => {
  return (
    <Box>
      <Heading as="div" size="2xl" mb={0}>
        Some amazing Header
      </Heading>
      <Heading as="div" size="lg" variant="tri" mt={0}>
        Some impressive subheader
      </Heading>
    </Box>
  )
}

const HeaderSets = () => {
  return (
    <>
      <VStack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SetOne />
        <SetTwo />
        <SetThree />
      </VStack>
    </>
  )
}

const TypeCompositions = () => {
  return (
    <Box>
      <Heading
        as="h3"
        size="xl"
        id="type-composistions"
        color={styleGuideHeaderColors.sec}
      >
        Typogrpahy Composistions
      </Heading>
      <HeaderSets />
    </Box>
  )
}

export default TypeCompositions

/**
 * <Heading as="div" size="3xl" color="yellow.200" mb={0}>
          Some amazing Header - 3xl
        </Heading>
        <Heading as="div" size="2xl" >
          Some impressive subheader -2xl
        </Heading>
        <Heading as="div" size="2xl" color="yellow.200" mb={0}>
          Some amazing Header - 2xl
        </Heading>
        <Heading as="div" size="xl" >
          Some impressive subheader - xl 
        </Heading>
 */
