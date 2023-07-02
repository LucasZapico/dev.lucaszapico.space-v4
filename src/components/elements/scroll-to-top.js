import React from "react"
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons"
import { Box, useTheme, useColorMode } from "@chakra-ui/react"

export const ScrollToTop = () => (
  <Box
    pos="fixed"
    cursor="pointer"
    backgroundColor="gray.300"
    opacity=".7"
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    bottom="2rem"
    borderRadius="md"
    right="2rem"
    width="50px"
  >
    <ArrowUpIcon
      onClick={() => {
        window.scrollTo(0, 0)
      }}
      style={{ height: "2rem", width: "2rem" }}
    />
    <ArrowDownIcon
      onClick={() => {
        window.scrollTo(0, 9999)
      }}
      style={{ height: "2rem", width: "2rem" }}
    />
  </Box>
)
