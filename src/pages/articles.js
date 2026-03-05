import { Box, Container } from "@chakra-ui/react"
import React from "react"
import { Articles, BreadCrumbGroup } from "components"

const ArticlesPage = () => {
  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <BreadCrumbGroup pathArr={["articles"]} />
      </Container>
      <Articles />
    </Box>
  )
}

export default ArticlesPage
