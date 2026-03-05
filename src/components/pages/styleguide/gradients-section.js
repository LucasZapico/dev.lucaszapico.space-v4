import React from "react"
import {
  Heading,
  Box,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"
import { Gradients } from "theme/gradients"

const gradientEntries = Object.entries(Gradients).map(([key, value]) => {
  const isTextGradient = key.startsWith("hero")
  return { name: key, value, textClip: isTextGradient }
})

export const GradientsSection = () => (
  <Box py={16} id="gradients">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size={{ base: "xl", md: "2xl" }} color={styleGuideHeaderColors.pri}>
        Gradients
      </Heading>
      <Text color={styleGuideHeaderColors.sec} mb={2}>
        Import from <code>theme/gradients</code> and use with the{" "}
        <code>bgGradient</code> prop.
      </Text>
      <Text fontFamily="mono" fontSize="xs" color={styleGuideHeaderColors.sec} mb={6}>
        {`import { Gradients } from "theme/gradients"`}
      </Text>
      <Flex flexDirection="column" gap={6}>
        {gradientEntries.map((g) => (
          <Box key={g.name}>
            <Flex
              gap={{ base: 3, md: 4 }}
              alignItems={{ base: "flex-start", sm: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              {g.textClip ? (
                <Heading
                  size="lg"
                  bgGradient={g.value}
                  bgClip="text"
                  flexShrink={0}
                  w={{ base: "100%", sm: "200px" }}
                  h="60px"
                  display="flex"
                  alignItems="center"
                >
                  Aa Bb Cc
                </Heading>
              ) : (
                <Box
                  w={{ base: "100%", sm: "200px" }}
                  h="60px"
                  bgGradient={g.value}
                  borderRadius="sm"
                  flexShrink={0}
                />
              )}
              <Box>
                <Text fontWeight="bold" fontSize="sm">
                  Gradients.{g.name}
                </Text>
                <Text fontFamily="mono" fontSize="xs" color={styleGuideHeaderColors.sec}>
                  {g.value}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  </Box>
)
