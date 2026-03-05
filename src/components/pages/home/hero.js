import React from "react"
import { Container, Heading, Box, useColorMode } from "@chakra-ui/react"
import { Gradients } from "theme/gradients"

const HomeHero = () => {
  const { colorMode } = useColorMode()

  const content = {
    header: "Hello, I am Lucas. Thanks for stopping by.",
    subHeader: "I'm a developer who enjoys building beautiful and functional web sites and web apps. ",
  }
  return (
    <Box py={16} px={{ base: 4, md: 6 }}>
      <Container className={colorMode === "dark" ? "glass dark" : "glass light"} maxW="container.xl">
        <Box maxW="850px">
          <Heading
            bgGradient={colorMode === "light" ? Gradients.heroLight : Gradients.heroDark}
            bgClip="text"
            as="h2"
            size="2xl"
          >
            {content.header}
          </Heading>
          <Heading as="h1" size="xl" variant="sec">
            {content.subHeader}
          </Heading>
        </Box>
      </Container>
    </Box>
  )
}
export default HomeHero
