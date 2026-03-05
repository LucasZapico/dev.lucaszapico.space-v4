import React from "react"
import { Heading, Box, Container, SimpleGrid } from "@chakra-ui/react"
import { generate } from "shortid"
import { ProjectCard } from "components"

const ProjectSections = ({ recentProjects }) => {
  if (recentProjects === undefined) {
    return null
  }
  return (
    <Box py={16}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {recentProjects &&
          recentProjects.edges.map((edge, i) => {
            const { frontmatter, fields } = edge.node

            const cardObj = {
              title: frontmatter.title,
              subHeader: frontmatter.subHeader,
              featuredImage: frontmatter.featuredImage,
              categories: frontmatter.categories,
              path: fields.path,
            }
            return (
              <ProjectCard
                key={generate()}
                cardObj={cardObj}
              />
            )
          })}
      </SimpleGrid>
    </Box>
  )
}

export default ProjectSections
