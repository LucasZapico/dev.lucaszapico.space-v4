import React from "react"
import {
  Text,
  Heading,
  Box,
  Container,
  Button,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"
import { Color } from "theme/colorStyles"

/**
 * TODO: enhance brand color handling
 **/

export const ColorPrimary = () => (
  <Flex flexWrap="wrap">
    {Object.keys(Color.yellow).map((g) => {
      return <Box height="80px" width="80px" bg={Color.yellow[g]} />
    })}
  </Flex>
)

export const ColorGrey = () => (
  <Flex flexWrap="wrap">
    {Object.keys(Color.gray).map((g) => {
      return <Box height="80px" width="80px" bg={Color.gray[g]} />
    })}
  </Flex>
)
export const ColorSection = () => (
  <Box py={20} id="color">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size="2xl" color={styleGuideHeaderColors.pri}>
        Color Palette
      </Heading>
      <Heading as="h4" size="lg" color={styleGuideHeaderColors.sec}>
        Primary
      </Heading>
      {Object.keys(Color).map((color) => {
        return (
          <Box>
            <Heading as="div" size="lg" color={styleGuideHeaderColors.sec}>
              {color}
            </Heading>
            <Flex flexWrap="wrap">
              {Object.keys(Color[color]).map((c) => {
                return <Box height="80px" width="80px" bg={Color[color][c]} />
              })}
            </Flex>
          </Box>
        )
      })}
      {/* <ColorPrimary />
      <ColorGrey /> */}
    </Box>
  </Box>
)
