import React from "react"
import {
  Text,
  Heading,
  Box,
  Flex,
  Divider,
} from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"
import { Color } from "theme/colorStyles"

export const ColorSection = () => (
  <Box py={16} id="color">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size="2xl" color={styleGuideHeaderColors.pri}>
        Color Palette
      </Heading>
      {Object.keys(Color).map((color) => {
        return (
          <Box key={color} mb={6}>
            <Heading as="div" size="lg" color={styleGuideHeaderColors.sec}>
              {color}
            </Heading>
            <Flex flexWrap="wrap" gap={2}>
              {Object.keys(Color[color]).map((c) => {
                return (
                  <Box key={c} textAlign="center">
                    <Box height={{ base: "56px", md: "80px" }} width={{ base: "56px", md: "80px" }} bg={Color[color][c]} borderRadius="sm" />
                    <Text fontFamily="mono" fontSize="xs" mt={1}>
                      {c}
                    </Text>
                    <Text fontFamily="mono" fontSize="xs" color={styleGuideHeaderColors.sec}>
                      {Color[color][c]}
                    </Text>
                  </Box>
                )
              })}
            </Flex>
          </Box>
        )
      })}
    </Box>
  </Box>
)
