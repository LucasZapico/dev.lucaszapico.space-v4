import React from "react"
import { Heading, Box, Flex, Text, Divider } from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"

const spaceTokens = [
  { key: "0", value: "0", rem: 0 },
  { key: "px", value: "1px", rem: 0.0625 },
  { key: "1", value: "0.25rem", rem: 0.25 },
  { key: "2", value: "0.5rem", rem: 0.5 },
  { key: "3", value: "0.75rem", rem: 0.75 },
  { key: "4", value: "1rem", rem: 1 },
  { key: "5", value: "1.25rem", rem: 1.25 },
  { key: "6", value: "1.5rem", rem: 1.5 },
  { key: "7", value: "1.75rem", rem: 1.75 },
  { key: "8", value: "2rem", rem: 2 },
  { key: "9", value: "2.25rem", rem: 2.25 },
  { key: "10", value: "2.5rem", rem: 2.5 },
  { key: "12", value: "3rem", rem: 3 },
  { key: "14", value: "3.5rem", rem: 3.5 },
  { key: "16", value: "4rem", rem: 4 },
  { key: "20", value: "5rem", rem: 5 },
  { key: "24", value: "6rem", rem: 6 },
  { key: "28", value: "7rem", rem: 7 },
  { key: "32", value: "8rem", rem: 8 },
  { key: "36", value: "9rem", rem: 9 },
  { key: "40", value: "10rem", rem: 10 },
  { key: "44", value: "11rem", rem: 11 },
  { key: "48", value: "12rem", rem: 12 },
  { key: "52", value: "13rem", rem: 13 },
  { key: "56", value: "14rem", rem: 14 },
  { key: "60", value: "15rem", rem: 15 },
  { key: "64", value: "16rem", rem: 16 },
  { key: "72", value: "18rem", rem: 18 },
  { key: "80", value: "20rem", rem: 20 },
  { key: "96", value: "24rem", rem: 24 },
]

const maxRem = 24

export const SpacingSection = () => (
  <Box py={16} id="spacing">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size={{ base: "xl", md: "2xl" }} color={styleGuideHeaderColors.pri}>
        Spacing Scale
      </Heading>
      <Text color={styleGuideHeaderColors.sec} mb={6}>
        Used for margin, padding, gap, and positioning values.
      </Text>
      {spaceTokens.map((token) => (
        <Flex key={token.key} alignItems="center" mb={2}>
          <Text
            fontFamily="mono"
            fontSize={{ base: "xs", md: "sm" }}
            w={{ base: "36px", md: "60px" }}
            flexShrink={0}
            color={styleGuideHeaderColors.sec}
          >
            {token.key}
          </Text>
          <Text
            fontFamily="mono"
            fontSize={{ base: "xs", md: "sm" }}
            w={{ base: "56px", md: "80px" }}
            flexShrink={0}
            color={styleGuideHeaderColors.sec}
            display={{ base: "none", sm: "block" }}
          >
            {token.value}
          </Text>
          <Box flex={1} minW={0}>
            <Box
              height="16px"
              width={`${(token.rem / maxRem) * 100}%`}
              bg="yellow.500"
              borderRadius="sm"
              minW={token.key === "0" ? "2px" : "4px"}
            />
          </Box>
        </Flex>
      ))}
    </Box>
  </Box>
)
