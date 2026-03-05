import React from "react"
import { Box } from "@chakra-ui/react"

export const Tag = ({ children, ...rest }) => {
  const value = children.toLowerCase().replaceAll(" ", "-")

  return (
    <Box
      {...rest}
      border="2px"
      px={2}
      py={1}
      display="inline"
      mr={1}
      mb={2}
    >
      #{value}
    </Box>
  )
}
