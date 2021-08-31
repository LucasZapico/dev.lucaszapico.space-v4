import React from 'react'
import { Heading, Box, Container, Grid } from '@chakra-ui/react'
import { generate } from 'shortid'
import ProjectCard from './project-card'

const ProjectSections = ({ recentProjects }) => {
  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Heading as="h3" size="3xl">
          Recent Projects
        </Heading>
        <Grid templateColumns="repeat(6, 1fr)" gap={10}>
          {recentProjects.edges.map((project, i) => (
            <ProjectCard i={i} key={generate()} project={project} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ProjectSections
