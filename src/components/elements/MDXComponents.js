import {
  Heading,
  Text,
  Box,
  Link,
  useColorMode,
  UnorderedList,
} from "@chakra-ui/react"
import React from "react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Link as GatsbyLink } from "gatsby"

function makeAnchor(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-")
}

function getAnchor(el) {
  if (typeof el === "object" && el.length > 1) {
    const arr = el.map((e) => {
      if (!!e.props) {
        return e.props.children
      } else {
        return e
      }
    })
    const anchor = arr.join("-")
    return makeAnchor(anchor)
  } else if (typeof el !== "string") {
    return makeAnchor(el.props.children)
  } else {
    return makeAnchor(el)
  }
}

/**
 * Headings — use theme colors (gray.100 dark / gray.900 light) via defaults.
 * H3+ use "sec" tint (gray.400 dark / gray.700 light) for visual hierarchy.
 */

export const HeadingOneMDX = ({ children, ...rest }) => {
  const anchor = getAnchor(children)
  return (
    <Heading {...rest} size="2xl" id={anchor}>
      {children}
    </Heading>
  )
}

export const HeadingTwoMDX = ({ children, ...rest }) => {
  const anchor = getAnchor(children)
  return (
    <Heading {...rest} size="xl" id={anchor}>
      {children}
    </Heading>
  )
}

export const HeadingThreeMDX = ({ children, ...rest }) => {
  const anchor = getAnchor(children)
  return (
    <Heading {...rest} size="lg" variant="sec" id={anchor}>
      {children}
    </Heading>
  )
}

export const HeadingFourMDX = ({ children, ...rest }) => {
  const anchor = getAnchor(children)
  return (
    <Heading {...rest} size="md" variant="sec" id={anchor}>
      {children}
    </Heading>
  )
}

export const HeadingFiveMDX = ({ children, ...rest }) => {
  const anchor = getAnchor(children)
  return (
    <Heading {...rest} size="sm" variant="sec" id={anchor}>
      {children}
    </Heading>
  )
}

export const HeadingSixMDX = ({ children, ...rest }) => {
  return (
    <Heading {...rest} size="xs" variant="sec">
      {children}
    </Heading>
  )
}

/**
 * Content
 */

export const TextMDX = ({ children, ...rest }) => {
  return (
    <Text {...rest}>
      {children}
    </Text>
  )
}

export const BlockQuoteMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === "dark" ? "gray.800" : "gray.100"}
      borderLeftWidth="2px"
      pl={4}
      py={2}
      mb={4}
    >
      {children}
    </Box>
  )
}

export const UnorderedListMdx = ({ children, ...rest }) => {
  return <UnorderedList mb={4}>{children}</UnorderedList>
}

export const LinkMDX = ({ children, href, isExternal = false, ...rest }) => {
  return href.includes("http") ? (
    <Box mb={4}>
      <Link {...rest} href={href} target="_blank">
        {children}
        <ExternalLinkIcon mx={2} mb={1} />
      </Link>
    </Box>
  ) : (
    <Link variant="linkOne" as={GatsbyLink} {...rest} to={href}>
      {children}
    </Link>
  )
}
