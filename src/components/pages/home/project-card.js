import React from 'react'
import { GridItem, Heading, Box } from '@chakra-ui/react'
import { CardOne } from '../../_index'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectCard = ({ project, i }) => {
  const { title, subHeader, featuredImage } = project.node.frontmatter
  const image = getImage(featuredImage)
  return (
    <GridItem colSpan={{ base: 6, md: `${i % 3 === 0 ? 6 : 3}` }}>
      <CardOne display="flex" flexWrap="wrap">
        <Box width={{ base: '100%', lg: '40%' }}>
          <Heading as="h4" size="lg">
            {title}
          </Heading>
          <Heading as="h5" variant="sec" size="md">
            {subHeader}
          </Heading>
        </Box>
        <Box width={{ base: '100%', lg: '60%' }}>
          <GatsbyImage image={image} alt={`${title} featured Image`} />
        </Box>
      </CardOne>
    </GridItem>
  )
}
export default ProjectCard
