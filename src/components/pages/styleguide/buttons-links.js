import React from "react"
import { styleGuideHeaderColors } from "components/pages/styleguide"
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
import { generate } from "shortid"

const ButtonStyles = () => (
  <Box>
    <Heading as="h4" variant="sec" size="lg" color={styleGuideHeaderColors.sec}>
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

const LinkStyles = () => {
  const sideNavLinks = ["JavaScript", "Python", "GoLang", "Evil Rust"]
  const topNavLinks = ["Home", "About", "Contact", "Articles"]
  return (
    <Box maxW="650">
      <Heading
        as="h4"
        variant="sec"
        size="lg"
        color={styleGuideHeaderColors.sec}
      >
        Links
      </Heading>
      <Link href="/" ml={4}>
        default Link
      </Link>
      <Link to="/styleguide" ml={4} variant="linkOne">
        Link One
      </Link>
      <Box py={6}>
        <Text>
          Quick: do{" "}
          <Link to="/" variant="linkInLine">
            inline link
          </Link>
          you have a plan to become customized. Have you ever needed to
        </Text>
        <Text>
          Quick: do{" "}
          <Link to="/" variant="linkInLine">
            you have a plan to become customized.
          </Link>
          Culpa sunt cillum nulla qui non nulla sunt excepteur est laboris
          laboris dolore aliqua tempor. Have you ever needed to
        </Text>
        <Heading
          as="div"
          variant="sec"
          size="md"
          color={styleGuideHeaderColors.sec}
        >
          Side Nav Links
        </Heading>
        <Flex flexDir={{ base: "column" }}>
          <Heading as="div" size="sm" variant="sideNavHeader">Side Nav Header</Heading>
          {sideNavLinks.map((l) => {
            return (
              <Link key={generate()} variant="sideNavLink" to="/#">
                {l}
              </Link>
            )
          })}
        </Flex>
        <Heading
          as="div"
          variant="sec"
          size="md"
          color={styleGuideHeaderColors.sec}
        >
          Nav Links
        </Heading>
        <Flex flexDir={{ base: "column", md: "row" }}>
          {topNavLinks.map((l) => {
            return (
              <Link key={generate()} variant="navLink" to="/#">
                {l}
              </Link>
            )
          })}
        </Flex>
      </Box>
    </Box>
  )
}

export const ButtonSection = () => (
  <Box py={20} id="buttons-links">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size="2xl" color={styleGuideHeaderColors.pri}>
        Buttons and Links
      </Heading>
      <ButtonStyles />
      <LinkStyles />
    </Box>
  </Box>
)
