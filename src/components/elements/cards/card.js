import React from "react"

import { Box, useColorMode } from "@chakra-ui/react"

export const CardOne = ({ content, children, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      className={colorMode === "dark" ? "glass dark" : "glass light"}
      p={6}
      borderRadius="md"
      backgroundColor={colorMode === "dark" ? "gray.900" : "gray.50"}
      // boxShadow={`10px -10px ${colorMode === "light" ? "#38383a" : "#dbe3df"}`}
      _hover={{
        bg: colorMode === "dark" ? "gray.800" : "gray.100",
      }}
      _active={{
        bg: colorMode === "dark" ? "gray.700" : "gray.200",
      }}
      _focus={{
        bg: colorMode === "dark" ? "gray.600" : "gray.300",
      }}
      transition="all 0.2s ease-in-out"
      {...rest}
    >
      {children || content}
    </Box>
  )
}
