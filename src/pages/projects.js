import { Box, Container } from "@chakra-ui/react"
import React from "react"
import { Projects, BreadCrumbGroup } from "components"

const Cases = () => {
  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <BreadCrumbGroup pathArr={["projects"]} />
      </Container>
      <Projects />
    </Box>
  )
}

export default Cases
