import React from "react"

import { Box, useColorMode } from "@chakra-ui/react"

export const CardOne = ({ content, children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      className={colorMode === "dark" ? "glass dark" : "glass light"}
      p={6}
      borderRadius="sm"
      backgroundColor={colorMode === "dark" ? "gray.900" : "gray.50"}
      _hover={{
        bg: colorMode === "dark" ? "gray.800" : "gray.100",
      }}
      _active={{
        bg: colorMode === "dark" ? "gray.700" : "gray.200",
      }}
      _focusVisible={{
        bg: colorMode === "dark" ? "gray.800" : "gray.100",
        outline: "2px solid",
        outlineColor: colorMode === "dark" ? "gray.400" : "gray.600",
        outlineOffset: "2px",
      }}
      transition="all 0.2s ease-out"
      {...rest}
    >
      {children || content}
    </Box>
  )
}
