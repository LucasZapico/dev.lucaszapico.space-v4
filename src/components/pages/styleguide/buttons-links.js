import React from "react"
import { styleGuideHeaderColors } from "components/pages/styleguide"
import {
  Text,
  Heading,
  Box,
  Button,
  Link,
  Flex,
  Divider,
  VStack,
} from "@chakra-ui/react"
import { generate } from "shortid"

const ButtonVariants = () => (
  <Box mb={8}>
    <Heading as="h4" variant="sec" size="lg" color={styleGuideHeaderColors.sec} mb={4}>
      Variants
    </Heading>
    <Flex flexWrap="wrap" gap={3} alignItems="center">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </Flex>
  </Box>
)

const ButtonSizes = () => (
  <Box mb={8}>
    <Heading as="h4" variant="sec" size="lg" color={styleGuideHeaderColors.sec} mb={4}>
      Sizes
    </Heading>
    <Flex flexWrap="wrap" gap={3} alignItems="center" mb={4}>
      <Button variant="secondary" size="xs">Extra Small</Button>
      <Button variant="secondary" size="sm">Small</Button>
      <Button variant="secondary" size="md">Medium</Button>
      <Button variant="secondary" size="lg">Large</Button>
    </Flex>
    <Box overflowX="auto">
      <Flex as="table" flexDir="column" fontSize="sm" fontFamily="mono">
        <Flex as="tr" color={styleGuideHeaderColors.sec} borderBottom="1px" borderColor="gray.700" pb={2} mb={2}>
          <Text as="th" w="80px" textAlign="left" fontWeight="bold">Size</Text>
          <Text as="th" w="80px" textAlign="left" fontWeight="bold">Height</Text>
          <Text as="th" w="80px" textAlign="left" fontWeight="bold">px</Text>
          <Text as="th" w="80px" textAlign="left" fontWeight="bold">Font</Text>
        </Flex>
        {[
          { size: "xs", h: "1.5rem", px: "0.5rem", font: "xs" },
          { size: "sm", h: "2rem", px: "0.75rem", font: "sm" },
          { size: "md", h: "2.25rem", px: "1rem", font: "sm" },
          { size: "lg", h: "2.5rem", px: "1.5rem", font: "sm" },
        ].map((row) => (
          <Flex as="tr" key={row.size} mb={1}>
            <Text as="td" w="80px" fontWeight="bold">{row.size}</Text>
            <Text as="td" w="80px">{row.h}</Text>
            <Text as="td" w="80px">{row.px}</Text>
            <Text as="td" w="80px">{row.font}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  </Box>
)

const ButtonVariantSizes = () => (
  <Box mb={8}>
    <Heading as="h4" variant="sec" size="lg" color={styleGuideHeaderColors.sec} mb={4}>
      Variants at Each Size
    </Heading>
    <VStack alignItems="flex-start" spacing={4}>
      {["xs", "sm", "md", "lg"].map((size) => (
        <Box key={size}>
          <Text fontFamily="mono" fontSize="xs" color={styleGuideHeaderColors.sec} mb={2}>
            size="{size}"
          </Text>
          <Flex flexWrap="wrap" gap={3} alignItems="center">
            <Button size={size}>Default</Button>
            <Button size={size} variant="primary">Primary</Button>
            <Button size={size} variant="secondary">Secondary</Button>
            <Button size={size} variant="outline">Outline</Button>
          </Flex>
        </Box>
      ))}
    </VStack>
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
        mb={4}
      >
        Links
      </Heading>
      <Flex flexWrap="wrap" gap={4} mb={6}>
        <Link href="/">default Link</Link>
        <Link to="/styleguide" variant="linkOne">Link One</Link>
      </Flex>
      <Box py={6}>
        <Text>
          Quick: do{" "}
          <Link to="/" variant="linkInLine">
            inline link
          </Link>{" "}
          you have a plan to become customized. Have you ever needed to
        </Text>
        <Text>
          Quick: do{" "}
          <Link to="/" variant="linkInLine">
            you have a plan to become customized.
          </Link>{" "}
          Culpa sunt cillum nulla qui non nulla sunt excepteur est laboris
          laboris dolore aliqua tempor. Have you ever needed to
        </Text>
        <Heading
          as="div"
          variant="sec"
          size="md"
          color={styleGuideHeaderColors.sec}
          mt={6}
        >
          Side Nav Links
        </Heading>
        <Flex flexDir="column">
          <Heading as="div" size="sm" variant="sideNavHeader">Side Nav Header</Heading>
          {sideNavLinks.map((l) => (
            <Link key={generate()} variant="sideNavLink" to="/#">
              {l}
            </Link>
          ))}
        </Flex>
        <Heading
          as="div"
          variant="sec"
          size="md"
          color={styleGuideHeaderColors.sec}
          mt={6}
        >
          Nav Links
        </Heading>
        <Flex flexDir={{ base: "column", md: "row" }}>
          {topNavLinks.map((l) => (
            <Link key={generate()} variant="navLink" to="/#">
              {l}
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export const ButtonSection = () => (
  <Box py={16} id="buttons-links">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size={{ base: "xl", md: "2xl" }} color={styleGuideHeaderColors.pri}>
        Buttons and Links
      </Heading>
      <ButtonVariants />
      <ButtonSizes />
      <ButtonVariantSizes />
      <LinkStyles />
    </Box>
  </Box>
)
