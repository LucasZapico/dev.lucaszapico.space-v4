import React from "react"
import { Heading, Box, Container, Grid } from "@chakra-ui/react"
import { generate } from "shortid"
import { ProjectCard } from "components"

const ProjectSections = ({ recentProjects }) => {
  if (recentProjects === undefined) {
    console.log("tets")
  }
  return (
    <Box py={20}>
      <Grid templateColumns="repeat(6, 1fr)" gap={10}>
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
                key={generate()}
                cardObj={cardObj}
              />
            )
          })}
      </Grid>
    </Box>
  )
}

export default ProjectSections
