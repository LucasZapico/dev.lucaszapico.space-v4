import React from 'react'
import { GridItem, Heading, Box } from '@chakra-ui/react'
import { CardOne, Tag } from '../../_index'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectCard = ({ project, i }) => {
  const { title, subHeader, featuredImage, categories } =
    project.node.frontmatter
  const image = getImage(featuredImage)
  return (
    <GridItem colSpan={{ base: 6, md: 3 }}>
      <CardOne display="flex" flexWrap="wrap">
        <Box
          display="flex"
          justifyContent="space-between"
          flexDir="column"
          width={{ base: '100%', lg: '40%' }}
          pr={{ base: 'auto', md: 4 }}
        >
          <Box>
            <Heading as="h4" size="md" color="gray.200">
              {title}
            </Heading>
            <Heading as="div" variant="sec" size="sm">
              {subHeader}
            </Heading>
          </Box>
          <Box color="brand.four">
            {categories.map((c, p) => {
              if (c !== 'project') {
                return p > categories.length - 1 ? (
                  `${c}`
                ) : (
                  <span> {c} &#8226; </span>
                )
              }
            })}
          </Box>
        </Box>
        <Box width={{ base: '100%', lg: '60%' }}>
          <GatsbyImage image={image} alt={`${title} featured Image`} />
        </Box>
      </CardOne>
    </GridItem>
  )
}
export default ProjectCard
