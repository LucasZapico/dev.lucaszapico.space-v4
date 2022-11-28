import React from "react"
import {
  Flex,
  Text,
  Heading,
  Box,
  Container,
  Divider,
  VStack,
  HStack,
  Tag,
} from "@chakra-ui/react"
import CardSection from "./cards"
import { styleGuideHeaderColors } from "components/pages/styleguide"

const TagsSection = () => (
  <Box>
    <Heading as="div" size="xl" color={styleGuideHeaderColors.sec}>
      Tags
    </Heading>
    <HStack spacing="1rem">
      <Tag>#Category Two</Tag>
      <Tag variant="sec">#Category Three</Tag>
    </HStack>
  </Box>
)

const ElementsSection = () => (
  <Box py={20} id="ui-elements">
    <Divider mb={6} />
    <Heading as="h3" size="2xl" color={styleGuideHeaderColors.pri}>
      UI elements
    </Heading>
    <TagsSection />
    <CardSection />
  </Box>
)

export default ElementsSection
