import React from "react"
import { Box, useColorMode } from "@chakra-ui/react"
import Nav from "components/base/nav/nav"

const MemoNav = Nav

const Header = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      zIndex={10}
      as="header"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg={colorMode === "dark" ? "gray.900" : "white"}
    >
      <MemoNav />
    </Box>
  )
}

export default Header
