// TODO: sort out type error with MDX JSX.Element
// 👇️ ts-nocheck ignores all ts errors in the file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Layout from "./layout"
import { MDXProvider } from "@mdx-js/react"
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
import {
  HeadingOneMDX,
  HeadingTwoMDX,
  HeadingThreeMDX,
  HeadingFourMDX,
  HeadingFiveMDX,
  HeadingSixMDX,
  BlockQuoteMDX,
  LinkMDX,
  ResponsiveImageMDX,
} from "components"

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

const MdxComponents = {
  h1: HeadingOneMDX,
  h2: HeadingTwoMDX,
  h3: HeadingThreeMDX,
  h4: HeadingFourMDX,
  h5: HeadingFiveMDX,
  h6: HeadingSixMDX,
  p: TextMDX,
  ul: UnorderedList,
  li: ListItem,
  ol: OrderedList,
  blockquote: BlockQuoteMDX,
  // a: LinkMDX,
  // img: ResponsiveImageMDX,
}

const MDXLayout = ({ children }) => {
  return (
    <MDXProvider components={MdxComponents}>
      <Box as="main" minH="90vh">
        {children}
      </Box>
    </MDXProvider>
  )
}

export default MDXLayout
