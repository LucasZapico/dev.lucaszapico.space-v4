import { Heading, Text, Box, Link, useColorMode } from "@chakra-ui/react"
import React from "react"
import { MagicLink } from "components"

/***
 * Headings
 */
export const HeadingOneMDX = ({ children, ...rest }) => {
  return (
    <Heading
      {...rest}
      size="2xl"
      fontWeight="800"
      // color={colorMode === 'dark' ? 'gray.400' : 'gray.800'}
      colorScheme="red"
    >
      {children}
    </Heading>
  )
}

export const HeadingTwoMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Heading
      {...rest}
      size="xl"
      fontWeight="800"
      color={colorMode === "dark" ? "gray.400" : "gray.800"}
    >
      {children}
    </Heading>
  )
}

export const HeadingThreeMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Heading
      {...rest}
      size="lg"
      fontWeight="800"
      color={colorMode === "dark" ? "gray.400" : "gray.800"}
    >
      {children}
    </Heading>
  )
}

export const HeadingFourMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Heading
      {...rest}
      size="md"
      fontWeight="800"
      color={colorMode === "dark" ? "gray.400" : "gray.800"}
    >
      {children}
    </Heading>
  )
}

export const HeadingFiveMDX = ({ children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Heading
      {...rest}
      size="sm"
      fontWeight="800"
      color={colorMode === "dark" ? "gray.400" : "gray.800"}
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

// export const LinkMDX = ({
//   children,
//   ...rest
// }: {
//   children: ReactNode | string
// }) => {
//   const { colorMode } = useColorMode()
//   return (
//     <MagicLink href="" {...rest} target="_blank">
//       {children}
//     </MagicLink>
//   )
// }

// export const ResponsiveImageMDX = ({
//   alt,
//   ...rest
// }: {
//   alt: string
// }) => <Image src="" alt={alt} layout="responsive" {...rest} />
