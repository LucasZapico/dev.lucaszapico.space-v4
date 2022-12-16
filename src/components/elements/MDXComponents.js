
import {
  Heading,
  Text,
  Box,
  Link,
  useColorMode,
  UnorderedList,
  OrderedList,
  ListItem,
} from "@chakra-ui/react"
import React from "react"
import { Link as GatsbyLink } from "gatsby"

function getAnchor(text) {
  console.log(text)
  return text
    .trim()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-")
    .toLowerCase()
}

/**
 * Headings
 */
export const HeadingOneMDX = ({ children, ...rest }) => {
  // const anchor = getAnchor(children)
  // const link = `${anchor}`
  return (
    <Heading
      {...rest}
      size="2xl"
      fontWeight="800"
      // color={colorMode === 'dark' ? 'gray.400' : 'gray.800'}
      colorScheme="red"
      // id={link}
    >
      {children}
    </Heading>
  )
}

export const HeadingTwoMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  // const anchor = getAnchor(children)
  // const link = `${anchor}`
  return (
    <Heading
      {...rest}
      size="xl"
      fontWeight="800"
      color={colorMode === "dark" ? "gray.400" : "gray.800"}
      // id={link}
    >
      {children}
    </Heading>
  )
}

export const HeadingThreeMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  // const anchor = getAnchor(children)
  // const link = `${anchor}`
  return (
    <Heading
      {...rest}
      size="lg"
      fontWeight="800"
      color={colorMode === "dark" ? "gray.400" : "gray.800"}
      // id={link}
    >
      {children}
    </Heading>
  )
}

export const HeadingFourMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  // const anchor = getAnchor(children)
  // const link = `${anchor}`
  return (
    <Heading
      {...rest}
      size="md"
      fontWeight="800"
      color={colorMode === "dark" ? "gray.400" : "gray.800"}
      // id={link}
    >
      {children}
    </Heading>
  )
}

export const HeadingFiveMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  // const anchor = getAnchor(children)
  // const link = `${anchor}`
  return (
    <Heading
      {...rest}
      size="sm"
      fontWeight="800"
      color={colorMode === "dark" ? "gray.400" : "gray.800"}
      // id={link}
    >
      {children}
    </Heading>
  )
}

export const HeadingSixMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Heading
      {...rest}
      size="xs"
      fontWeight="800"
      color={colorMode === "dark" ? "gray.400" : "gray.800"}
    >
      {children}
    </Heading>
  )
}

/***
 * Content
 */

export const TextMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Text
      {...rest}
      fontWeight={colorMode === "dark" ? "500" : "300"}
      color={colorMode === "dark" ? "gray.100" : "gray.700"}
    >
      {children}
    </Text>
  )
}

export const BlockQuoteMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === "dark" ? "gray.800" : "gray.200"}
      borderLeftWidth="2px"
      paddingLeft={4}
      paddingTop={2}
      paddingBottom={2}
      mb={6}
    >
      {children}
    </Box>
  )
}

export const UnorderedListMdx = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <UnorderedList mb={4}
    >
      {children}
    </UnorderedList>
  )
}

export const LinkMDX = ({
  children,
  ...rest
}) => {
  const { colorMode } = useColorMode()
  return (
    <Link variant="linkInLine" as={GatsbyLink} {...rest} >
      {children}
    </Link>
  )
}

// export const ResponsiveImageMDX = ({
//   alt,
//   ...rest
// }: {
//   alt: string
// }) => <Image src="" alt={alt} layout="responsive" {...rest} />
