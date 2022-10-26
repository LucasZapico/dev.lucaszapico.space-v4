import React from 'react'
import { Flex, Text, Heading, Box, Container, Divider } from '@chakra-ui/react'

const TypographySection = () => {
  const TypeOne = () => (
    <Box flexBasis={[100, 50]} py={10}>
      <Heading as="h3" size="2xl">
        Montserrat
      </Heading>
      <Heading as="h4" size="lg" variant="" mb={0}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </Heading>
      <Heading as="h4" size="lg" variant="" mb={0}>
        abcdefghijklmnopqrstuvwxyz
      </Heading>
    </Box>
  )
  const TypeTwo = () => (
    <Box flexBasis={[100, 50]} py={10}>
      <Heading as="h3" size="2xl" variant="sec">
        Montserrat
      </Heading>
      <Heading as="h4" size="lg" variant="sec" mb={0}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </Heading>
      <Heading as="h4" size="lg" variant="sec" mb={0}>
        abcdefghijklmnopqrstuvwxyz
      </Heading>
    </Box>
  )
  const TypeThree = () => (
    <Box flexBasis={[100, 50]} py={10}>
      <Heading as="h3" size="2xl" variant="ogg">
        Ogg
      </Heading>
      <Heading as="h4" size="lg" variant="ogg" mb={0}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </Heading>
      <Heading as="h4" size="lg" variant="ogg" mb={0}>
        abcdefghijklmnopqrstuvwxyz
      </Heading>
    </Box>
  )
  return (
    <>
      <Heading as="h3" size="2xl" variant="Alice">
        Typography
      </Heading>
      <Heading as="h4" size="xl" variant="Alice">
        Font Family
      </Heading>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <TypeOne />
        <TypeTwo />
        {/* <TypeThree /> */}
      </Flex>
      <Divider />
      <Heading as="h4" size="xl" variant="Alice">
        Sizes
      </Heading>
      <Text className="readable">
        All sizes are responsive and resize accordingly to best practices for
        various screen widths.
      </Text>
      <Heading as="h4" size="4xl">
        Size One
      </Heading>
      <Heading as="h4" size="3xl">
        Size Two
      </Heading>
      <Heading as="h4" size="2xl">
        Size Three
      </Heading>
      <Heading as="h4" size="xl">
        Size Four
      </Heading>
      <Heading as="h4" size="lg">
        Size Five
      </Heading>
      <Heading as="h4" size="md">
        Size Six
      </Heading>
    </>
  )
}

const HeaderSets = () => {
  return (
    <>
      <Box py={10}>
        <Heading as="h4" size="2xl" mb={0}>
          Some amazing Header
        </Heading>
        <Heading as="h4" size="lg">
          Some impressive subheader
        </Heading>
      </Box>
      <Box py={10}>
        <Heading as="h4" size="lg" marginBottom="-30px" variant="ogg">
          Some impressive superheader
        </Heading>
        <Heading as="h4" size="3xl">
          Some amazing Header
        </Heading>
      </Box>
      <Box py={10}>
        <Heading as="h4" size="2xl" variant="alice" mb={0}>
          Some amazing Header
        </Heading>
        <Heading as="h4" size="lg">
          Some impressive subheader
        </Heading>
      </Box>
      <Box py={10}>
        <Heading as="h4" size="3xl" variant="ogg" mb={0}>
          Some amazing Header
        </Heading>
        <Heading as="h4" size="lg">
          Some impressive subheader
        </Heading>
      </Box>
    </>
  )
}

export const ContentSection = () => (
  <Box py={20}>
    <TypographySection />

    <Container maxW="container.md">
      <HeaderSets />
      <Heading as="h3" size="2xl">
        Content
      </Heading>
      <Text>
        It's often said that the internet has democratized education: the sum of
        human knowledge is only a Google search away! And yet, having access to
        information is only half of the story; you also need to be able to
        convert raw information into usable skills.
      </Text>
      <Text>
        For a lot of us, the gap between the two can lead to things like
        tutorial hell—getting stuck doing tutorial after tutorial without ever
        feeling like you're making substantive progress.
      </Text>
      <Text>
        Learning how to learn effectively is super important, especially as a
        software developer; learning new things is practically the whole gig! If
        you can learn to quickly pick up new languages/frameworks/tools, you'll
        be able to be way more productive than the average developer. It's sort
        of a superpower.
      </Text>
      <Text>
        In this blog post, I'll share what I've learned about learning, and show
        you how I pick up new skills lickety-split!
      </Text>
      {/* <Box py={10}>
        <CardOne py={6}>
          <Heading as="h4">Card</Heading>
          <Heading as="h5">Sub header</Heading>
        </CardOne>
      </Box> */}
    </Container>
  </Box>
)
