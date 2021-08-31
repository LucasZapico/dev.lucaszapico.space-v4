import React from 'react'
import {
  Text,
  Heading,
  Box,
  Container,
  Button,
  Link,
  Flex,
  Divider,
} from '@chakra-ui/react'

export const ColorPrimary = () => (
  <Flex flexWrap="wrap">
    <Box height="200px" width="200px" bg="brand.zero" />
    <Box height="200px" width="200px" bg="brand.one" />
    <Box height="200px" width="200px" bg="brand.two" />
    <Box height="200px" width="200px" bg="brand.three" />
    <Box height="200px" width="200px" bg="brand.four" />
    <Box height="200px" width="200px" bg="brand.five" />
  </Flex>
)

export const ColorGrey = () => (
  <Flex flexWrap="wrap">
    <Box height="200px" width="200px" bg="brand.zero" />
    <Box height="200px" width="200px" bg="brand.one" />
    <Box height="200px" width="200px" bg="mode.brand.two" />
    <Box height="200px" width="200px" bg="brand.three" />
    <Box height="200px" width="200px" bg="brand.four" />
    <Box height="200px" width="200px" bg="brand.five" />
  </Flex>
)
export const ColorSection = () => (
  <Box py={20}>
    <Divider />
    <Box py={10}>
      <Heading as="h3" size="2xl">
        Color Palette
      </Heading>
      <Heading as="h4" variant="sec" size="lg">
        Primary
      </Heading>
      <ColorPrimary />
    </Box>
  </Box>
)
