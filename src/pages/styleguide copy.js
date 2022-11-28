import React from "react"
import {
  Text,
  Heading,
  Box,
  Container,
  Button,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react"
import { CardOne } from "components"

const ColorPrimary = () => (
  <Flex flexWrap="wrap">
    <Box height="200px" width="200px" bg="brand.zero" />
    <Box height="200px" width="200px" bg="brand.one" />
    <Box height="200px" width="200px" bg="brand.two" />
    <Box height="200px" width="200px" bg="brand.three" />
    <Box height="200px" width="200px" bg="brand.four" />
    <Box height="200px" width="200px" bg="brand.five" />
  </Flex>
)

const ColorGrey = () => (
  <Flex flexWrap="wrap">
    <Box height="200px" width="200px" bg="brand.zero" />
    <Box height="200px" width="200px" bg="brand.one" />
    <Box height="200px" width="200px" bg="mode.brand.two" />
    <Box height="200px" width="200px" bg="brand.three" />
    <Box height="200px" width="200px" bg="brand.four" />
    <Box height="200px" width="200px" bg="brand.five" />
  </Flex>
)
const ColorSection = () => (
  <Box py={20}>
    <Divider />
    <Box py={10}>
      <Heading as="h3" size="2xl">
        Color Palette
      </Heading>
      <Heading as="h4" variant="sec" size="lg">
        Primary
      </Heading>
      <ColorPrimary />
    </Box>
  </Box>
)

const ButtonStyles = () => (
  <Box>
    <Heading as="h4" variant="sec" size="lg">
      Buttons
    </Heading>
    <Box py={10}>
      <Button ml={4}>Default</Button>
      <Button ml={4} variant="btnCTA">
        Button CTA
      </Button>
      <Button ml={4} variant="btnOne">
        Button One
      </Button>
      <Button ml={4} variant="btnTwo">
        Button Two
      </Button>
    </Box>
    <Box py={10}>
      <Heading as="h5" variant="sec" size="md">
        Sizes
      </Heading>
      <Box>
        <Button ml={4} variant="btnOne" size="lg">
          Button One
        </Button>
        <Button ml={4} variant="btnOne" size="md">
          Button One
        </Button>
        <Button ml={4} variant="btnOne" size="sm">
          Button One
        </Button>
      </Box>
    </Box>
  </Box>
)

const LinkStyles = () => (
  <Box>
    <Heading as="h4" variant="sec" size="lg">
      Links
    </Heading>
    <Link href="/" ml={4}>
      Link
    </Link>
    <Link to="/styleguide" ml={4} variant="linkOne">
      Link One
    </Link>
    <Box py={6}>
      <Text>
        Quick: do{" "}
        <Link to="/" variant="linkInline">
          {" "}
          inline link
        </Link>
        you have a plan to become customized. Have you ever needed to
      </Text>
    </Box>
  </Box>
)

const ButtonSection = () => (
  <Box py={20}>
    <Divider />
    <Box py={10}>
      <Heading as="h3" size="2xl">
        Buttons and Links
      </Heading>
      <ButtonStyles />
      <LinkStyles />
    </Box>
  </Box>
)

const ContentSection = () => (
  <Box py={20}>
    <Container maxW="container.md">
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
      <Box py={10}>
        <CardOne py={6}>
          <Heading as="h4">Card</Heading>
          <Heading as="h5">Sub header</Heading>
        </CardOne>
      </Box>
    </Container>
  </Box>
)

const Styleguide = () => {
  return (
    <Box mheight="100vh" py={20}>
      <Container maxW="container.xl">
        <Heading as="h1" size="4xl">
          StyleGuide
        </Heading>
        <Heading as="h2" variant="sec" size="2xl">
          Collections of common styles used throughout the project
        </Heading>

        <ColorSection />
        <ButtonSection />
        <ContentSection />
      </Container>
    </Box>
  )
}

export default Styleguide
