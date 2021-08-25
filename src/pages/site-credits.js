import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { SiteCredits } from '../components/_index'

const SiteCreditPage = () => {
  return (
    <Box minH="100vh">
      <Container maxW="container.md">
        <Heading as="h1" size="3xl">
          Site Credits
        </Heading>
        <Heading as="h2" size="" variant="sec">
          Shout out to all of the amazing folks, projects, etc that enable me to
          build
        </Heading>
        <SiteCredits />
      </Container>
    </Box>
  )
}

export default SiteCreditPage
