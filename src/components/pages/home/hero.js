import React from "react"
import { Container, Heading, Box, useColorMode } from "@chakra-ui/react"

const HomeHero = () => {
  const { colorMode } = useColorMode()

  const color = colorMode === "light" ? "#38383a" : "#f9f6f2"

  const content = {
    header: "Hello, I am Lucas. Thanks for stopping by.",
    subHeader: "I'm a developer who enjoys building beutiful and functional web sites and web apps. ",
  }
  return (
    <Box py={20} >
      <Container  className={colorMode === "dark" ? "glass dark" : "glass light"}  maxW="container.xl">
        <Box maxW="850px">
          {colorMode === "light " ? (
            <Heading
              bgGradient={`linear(to-r, ${color} ,#B72525)`}
              bgClip="text"
              as="h2"
              size="3xl"
            >
              {content.header}
            </Heading>
          ) : (
            <Heading
              bgGradient={`linear(to-r, ${color} ,#B72525)`}
              bgClip="text"
              as="h2"
              size="3xl"
            >
              {content.header}
            </Heading>
          )}

          <Heading as="h1" size="2xl" variant="sec">
            {content.subHeader}
          </Heading>
        </Box>
      </Container>
    </Box>
  )
}
export default HomeHero
