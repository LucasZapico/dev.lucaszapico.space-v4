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

const LinkStyles = () => (
  <Box>
    <Heading as="h4" variant="sec" size="lg" color={styleGuideHeaderColors.sec}>
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
