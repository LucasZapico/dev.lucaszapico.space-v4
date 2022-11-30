import React from "react"

import { Box, useColorMode } from "@chakra-ui/react"

export const CardOne = ({ content, children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      p={6}
      backgroundColor={colorMode === "dark" ? "gray.900" : "gray.50"}
      boxShadow={`10px -10px ${colorMode === "light" ? "#38383a" : "#dbe3df"}`}
      {...rest}
    >
      {children || content}
    </Box>
  )
}
