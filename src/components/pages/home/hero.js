import React from 'react'
import { Container, Heading, Box } from '@chakra-ui/react'

const HomeHero = () => {
  const colorMode = 'dark'

  const color = colorMode === 'light' ? '#38383a' : '#f9f6f2'

  const content = {
    header: 'Hello, I am Lucas. Thanks for stopping by.',
    subHeader: 'Mostly a Frontend developer focusing on React.js.',
  }
  return (
    <Box py={20}>
      <Container maxW="container.xl">
        {colorMode === 'light ' ? (
          <Heading
            // bgGradient="linear(to-r, #38383a ,#B72525)"
            // bgClip="text"
            as="h2"
            size="3xl"
          >
            {content.header}
          </Heading>
        ) : (
          <Heading
            // bgGradient="linear(to-r, #f9f6f2 ,#B72525)"
            // bgClip="text"
            as="h2"
            size="3xl"
          >
            {content.header}
          </Heading>
        )}

        <Heading as="h1" size="2xl" variant="sec">
          {content.subHeader}
        </Heading>
      </Container>
    </Box>
  )
}
export default HomeHero
