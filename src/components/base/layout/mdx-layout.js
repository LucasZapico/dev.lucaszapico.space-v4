// TODO: sort out type error with MDX JSX.Element
// 👇️ ts-nocheck ignores all ts errors in the file
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
  Code, 
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
  TextMDX,
  UnorderedListMdx,
} from "components"
import { CodeBlockMdx } from "components/elements/Mdx/mdx-code-block"

/**
 * TODO: add support for definition md syntax
 */

const MdxComponents = {
  h1: HeadingOneMDX,
  h2: HeadingTwoMDX,
  h3: HeadingThreeMDX,
  h4: HeadingFourMDX,
  h5: HeadingFiveMDX,
  h6: HeadingSixMDX,
  p: TextMDX,
  ul: UnorderedListMdx,
  li: ListItem,
  ol: OrderedList,
  blockquote: BlockQuoteMDX,
  a: LinkMDX,
  code: Code,
  pre: CodeBlockMdx
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
