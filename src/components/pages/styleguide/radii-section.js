import React from "react"
import { Heading, Box, Flex, Text, Divider } from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"

const radiiTokens = [
  { key: "none", value: "0" },
  { key: "sm", value: "0.125rem" },
  { key: "base", value: "0.25rem" },
  { key: "md", value: "0.375rem" },
  { key: "lg", value: "0.5rem" },
  { key: "xl", value: "0.75rem" },
  { key: "2xl", value: "1rem" },
  { key: "3xl", value: "1.5rem" },
  { key: "full", value: "9999px" },
]

export const RadiiSection = () => (
  <Box py={16} id="radii">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size={{ base: "xl", md: "2xl" }} color={styleGuideHeaderColors.pri}>
        Border Radius
      </Heading>
      <Text color={styleGuideHeaderColors.sec} mb={6}>
        Border radius tokens available via the <code>borderRadius</code> prop.
      </Text>
      <Flex flexWrap="wrap" gap={{ base: 4, md: 6 }} justifyContent={{ base: "center", sm: "flex-start" }}>
        {radiiTokens.map((token) => (
          <Box key={token.key} textAlign="center">
            <Box
              w={{ base: "64px", md: "80px" }}
              h={{ base: "64px", md: "80px" }}
              bg="yellow.500"
              borderRadius={token.key}
              mb={2}
            />
            <Text fontFamily="mono" fontSize="sm" fontWeight="bold">
              {token.key}
            </Text>
            <Text fontFamily="mono" fontSize="xs" color={styleGuideHeaderColors.sec}>
              {token.value}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  </Box>
)
