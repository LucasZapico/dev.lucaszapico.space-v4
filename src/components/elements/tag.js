import React from "react"
import { Box } from "@chakra-ui/react"

/**
 * TODO: add is clickable flag
 * TODO: add hover
 */

export const Tag = ({ hasBorder = true, hasBG = false, children, ...rest }) => {
  const value = children.toLowerCase().replaceAll(" ", "-")
  
  // const color = colorMode === "light" || hasBG ? "gray.300" : "brand.one"
  // const borderColor = colorMode === "light" ? "brand.two" : "brand.one"
  // const backgroundColor = colorMode === "light" ? "brand.three" : "brand.one"
  return (
    <Box
      {...rest}
      border="2px"
      px={2}
      py={1}
      display="inline"
      mr={1}
      mb={2}
      // color={color}
      // borderColor={hasBorder ? borderColor : ""}
      // backgroundColor={hasBG ? backgroundColor : ""}
    >
      #{value}
    </Box>
  )
}
