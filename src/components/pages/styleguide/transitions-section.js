import React, { useState } from "react"
import {
  Heading,
  Box,
  Flex,
  Text,
  Divider,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"

const durationTokens = [
  { key: "ultra-fast", value: "50ms" },
  { key: "faster", value: "100ms" },
  { key: "fast", value: "150ms" },
  { key: "normal", value: "200ms" },
  { key: "slow", value: "300ms" },
  { key: "slower", value: "400ms" },
  { key: "ultra-slow", value: "500ms" },
]

const easingTokens = [
  { key: "ease-in", value: "cubic-bezier(0.4, 0, 1, 1)" },
  { key: "ease-out", value: "cubic-bezier(0, 0, 0.2, 1)" },
  { key: "ease-in-out", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
]

const propertyTokens = [
  { key: "common", value: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform" },
  { key: "colors", value: "background-color, border-color, color, fill, stroke" },
  { key: "dimensions", value: "width, height" },
  { key: "position", value: "left, right, top, bottom" },
  { key: "background", value: "background-color, background-image, background-position" },
]

export const TransitionsSection = () => {
  const [animate, setAnimate] = useState(false)

  return (
    <Box py={16} id="transitions">
      <Divider />
      <Box py={10}>
        <Heading as="h3" size={{ base: "xl", md: "2xl" }} color={styleGuideHeaderColors.pri}>
          Transitions
        </Heading>
        <Text color={styleGuideHeaderColors.sec} mb={6}>
          Transition duration, easing, and property group tokens.
        </Text>

        <Heading as="h4" size="lg" color={styleGuideHeaderColors.sec} mb={4}>
          Durations
        </Heading>
        <Button
          variant="secondary"
          size="sm"
          mb={4}
          onClick={() => setAnimate((prev) => !prev)}
        >
          {animate ? "Reset" : "Animate"}
        </Button>
        <Box mb={10}>
          {durationTokens.map((token) => (
            <Flex key={token.key} alignItems="center" mb={3} flexWrap={{ base: "wrap", sm: "nowrap" }}>
              <Text
                fontFamily="mono"
                fontSize={{ base: "xs", md: "sm" }}
                w={{ base: "70px", md: "100px" }}
                flexShrink={0}
                fontWeight="bold"
              >
                {token.key}
              </Text>
              <Text
                fontFamily="mono"
                fontSize={{ base: "xs", md: "sm" }}
                w={{ base: "44px", md: "60px" }}
                flexShrink={0}
                color={styleGuideHeaderColors.sec}
              >
                {token.value}
              </Text>
              <Box flex={1} position="relative" h="24px" minW={{ base: "100%", sm: "0" }}>
                <Box
                  position="absolute"
                  left={0}
                  top={0}
                  h="24px"
                  w="24px"
                  bg="yellow.500"
                  borderRadius="sm"
                  transform={animate ? "translateX(calc(min(200px, 60vw)))" : "translateX(0)"}
                  transition={`transform ${token.value} ease-in-out`}
                />
              </Box>
            </Flex>
          ))}
        </Box>

        <Heading as="h4" size="lg" color={styleGuideHeaderColors.sec} mb={4}>
          Easing
        </Heading>
        <Box overflowX="auto" mb={10}>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Token</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {easingTokens.map((token) => (
                <Tr key={token.key}>
                  <Td fontFamily="mono" fontWeight="bold">{token.key}</Td>
                  <Td fontFamily="mono" fontSize={{ base: "xs", md: "sm" }}>{token.value}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Heading as="h4" size="lg" color={styleGuideHeaderColors.sec} mb={4}>
          Property Groups
        </Heading>
        <Box overflowX="auto">
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Token</Th>
                <Th>Properties</Th>
              </Tr>
            </Thead>
            <Tbody>
              {propertyTokens.map((token) => (
                <Tr key={token.key}>
                  <Td fontFamily="mono" fontWeight="bold" whiteSpace="nowrap">{token.key}</Td>
                  <Td fontFamily="mono" fontSize="xs">{token.value}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  )
}
