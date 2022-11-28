import React, { useEffect } from "react"
import { LinkOne } from "components"
import { Link as GatsbyLink } from "gatsby"
import {
  Heading,
  Box,
  Container,
  Tag,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react"
import { ColorSection } from "./color-section"
import { ButtonSection } from "./buttons-links"
import { ContentSection } from "./typography"
import ElementsSection from "./ui-elements"

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
]

const SideNav = () => {
  return (
    <Box
      // overflow="scroll"

      pl={4}
      py={10}
      display={{ base: "none", md: "flex" }}
      top={40}
      left={0}
      flexBasis={{ base: "0%", md: "30%", lg: "25%" }}
    >
      <VStack position="fixed" alignItems="flex-start" spacing={6}>
        {styleGuideSections.map((s) => {
          return (
            <LinkOne
              as="div"
              mb={1}
              as={GatsbyLink}
              fontWeight="800"
              _hover={{ cursor: "pointer" }}
              display="flex"
              alignItems="center"
              to={`/styleguide#${s.link}`}
            >
              {s.name}
            </LinkOne>
          )
        })}
      </VStack>
    </Box>
  )
}

const Styleguide = () => {
  return (
    <Box mheight="100vh" py={20}>
      <Container maxW="container.xl" display="flex" position="relative">
        <SideNav />
        <Box ml={4}>
          <Heading as="h1" size="3xl" color={styleGuideHeaderColors.pri}>
            StyleGuide
          </Heading>
          <Heading
            as="h2"
            size="xl"
            className="readable"
            color={styleGuideHeaderColors.sec}
          >
            Collections of common styles used throughout the project
          </Heading>
          <ColorSection />
          <ButtonSection />
          <ContentSection />
          <ElementsSection />
        </Box>
      </Container>
    </Box>
  )
}

export default Styleguide
