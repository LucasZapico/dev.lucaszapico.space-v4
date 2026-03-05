import React from "react"
import { LinkOne } from "components"
import { Link as GatsbyLink } from "gatsby"
import {
  Heading,
  Box,
  Container,
  VStack,
  HStack,
  Divider,
  Text,
} from "@chakra-ui/react"
import { ColorSection } from "./color-section"
import { ButtonSection } from "./buttons-links"
import { ContentSection } from "./typography"
import ElementsSection from "./ui-elements"
import { SpacingSection } from "./spacing-section"
import { ShadowsSection } from "./shadows-section"
import { RadiiSection } from "./radii-section"
import { BreakpointsSection } from "./breakpoints-section"
import { ZIndexSection } from "./zindex-section"
import { TransitionsSection } from "./transitions-section"
import { GradientsSection } from "./gradients-section"

export const styleGuideHeaderColors = {
  pri: "gray.500",
  sec: "gray.700",
}

const styleGuideSections = [
  {
    name: "Color",
    link: "color",
  },
  {
    name: "Buttons and Links",
    link: "buttons-links",
  },
  {
    name: "Typography",
    link: "typography",
    children: [
      {
        name: "Type Family",
        link: "type-family",
      },
      {
        name: "Type Sizes",
        link: "type-sizes",
      },
      {
        name: "Type Composistions",
        link: "type-composistions",
      },
    ],
  },
  {
    name: "UI Elements",
    link: "ui-elements",
  },
  {
    name: "Spacing Scale",
    link: "spacing",
  },
  {
    name: "Shadows",
    link: "shadows",
  },
  {
    name: "Border Radius",
    link: "radii",
  },
  {
    name: "Breakpoints",
    link: "breakpoints",
  },
  {
    name: "Z-Index",
    link: "zindex",
  },
  {
    name: "Transitions",
    link: "transitions",
  },
  {
    name: "Gradients",
    link: "gradients",
  },
]

const MobileNav = () => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      overflowX="auto"
      py={4}
      mx={-4}
      px={4}
      css={{
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
      }}
    >
      <HStack spacing={3} minW="max-content">
        {styleGuideSections.map((s) => (
          <LinkOne
            key={s.link}
            as={GatsbyLink}
            fontSize="sm"
            fontWeight="700"
            whiteSpace="nowrap"
            _hover={{ cursor: "pointer" }}
            to={`/styleguide#${s.link}`}
          >
            {s.name}
          </LinkOne>
        ))}
      </HStack>
    </Box>
  )
}

const SideNav = () => {
  return (
    <Box
      overflowY="auto"
      maxH="calc(100vh - 10rem)"
      pl={4}
      py={10}
      display={{ base: "none", md: "flex" }}
      top={40}
      left={0}
      flexBasis={{ md: "30%", lg: "25%" }}
      flexShrink={0}
    >
      <VStack position="fixed" alignItems="flex-start" spacing={4}>
        {styleGuideSections.map((s) => (
          <Box key={s.link}>
            <LinkOne
              as={GatsbyLink}
              mb={1}
              fontWeight="800"
              _hover={{ cursor: "pointer" }}
              display="flex"
              alignItems="center"
              to={`/styleguide#${s.link}`}
            >
              {s.name}
            </LinkOne>
            {s.children && (
              <VStack alignItems="flex-start" spacing={1} pl={4} mt={1}>
                {s.children.map((child) => (
                  <LinkOne
                    key={child.link}
                    as={GatsbyLink}
                    fontSize="sm"
                    _hover={{ cursor: "pointer" }}
                    to={`/styleguide#${child.link}`}
                  >
                    {child.name}
                  </LinkOne>
                ))}
              </VStack>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

const Styleguide = () => {
  return (
    <Box minH="100vh" py={{ base: 10, md: 20 }}>
      <Container
        maxW="container.xl"
        display="flex"
        position="relative"
        px={{ base: 4, md: 6 }}
      >
        <SideNav />
        <Box ml={{ base: 0, md: 4 }} minW={0} flex={1}>
          <Heading
            as="h1"
            size={{ base: "2xl", md: "3xl" }}
            color={styleGuideHeaderColors.pri}
          >
            Design Language
          </Heading>
          <Heading
            as="h2"
            size={{ base: "lg", md: "xl" }}
            className="readable"
            color={styleGuideHeaderColors.sec}
          >
            Collections of common styles used throughout the project
          </Heading>
          <MobileNav />
          <ColorSection />
          <ButtonSection />
          <ContentSection />
          <ElementsSection />
          <SpacingSection />
          <ShadowsSection />
          <RadiiSection />
          <BreakpointsSection />
          <ZIndexSection />
          <TransitionsSection />
          <GradientsSection />
        </Box>
      </Container>
    </Box>
  )
}

export default Styleguide
