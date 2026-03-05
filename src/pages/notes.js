import { Box, Container } from "@chakra-ui/react"
import React from "react"
import { Notes, BreadCrumbGroup } from "components"

const NotesPage = () => {
  return (
    <Box pb={16}>
      <Container maxW="container.xl">
        <BreadCrumbGroup pathArr={["notes"]} />
      </Container>
      <Notes />
    </Box>
  )
}

export default NotesPage
