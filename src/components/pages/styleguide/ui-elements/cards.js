import React from "react"
import {
  Flex,
  Text,
  Heading,
  Box,
  Container,
  Divider,
  VStack,
} from "@chakra-ui/react"
import { CardOne, ArticleCard, ProjectCard, NoteCard } from "components"
import { styleGuideHeaderColors } from "components/pages/styleguide"

const CardSection = () => {
  return (
    <Flex py={10} flexDir="column">
      <Heading as="div" size="xl" color={styleGuideHeaderColors.sec}>
        Cards
      </Heading>
      <Box>
        <CardOne height="200px" width="400px" />
      </Box>
      <Box>
        <Heading as="div" size="lg" color={styleGuideHeaderColors.sec}>
          Article Card
        </Heading>
        <ArticleCard
          cardObj={{
            title: "Article Card",
            description: "I'm a description",
            categories: [],
            path: "",
          }}
        />
        <Heading as="div" size="lg" color={styleGuideHeaderColors.sec}>
          Project Card
        </Heading>
        <ProjectCard
          cardObj={{
            title: "Project Card",
            subHeader: "Some amazing subheader",
            categories: [],
            path: "",
          }}
        />
        {/* <NoteCard/> */}
      </Box>
    </Flex>
  )
}

export default CardSection
