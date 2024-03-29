import React from "react"
import { Heading, Box, Container, Grid } from "@chakra-ui/react"
import { generate } from "shortid"
import { ProjectCard } from "components"

const ProjectSections = ({ recentProjects }) => {
  return (
    <Box py={20}>
      <Grid templateColumns="repeat(6, 1fr)" gap={10}>
        {recentProjects.edges.map((project, i) => (
          <ProjectCard i={i} key={generate()} project={project} />
        ))}
      </Grid>
    </Box>
  )
}

export default ProjectSections
