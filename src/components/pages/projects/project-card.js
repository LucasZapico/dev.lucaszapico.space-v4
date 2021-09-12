import React from 'react'
import { CardOne, Tag } from '../../_index'
import { Link as GatsbyLink } from 'gatsby'
import { Gatsbyimage } from 'gatsby-plugin-image'
import { Heading, Text, Box } from '@chakra-ui/react'
import { generate } from 'shortid'

const ProjectCard = ({ project }) => {
  const { title, description, categories, tags } = project.node.frontmatter
  return (
    <CardOne
      key={generate()}
      className="link"
      mt={6}
      to={`/${project.node.fields.path}`}
      as={GatsbyLink}
      width={{ base: '100%', md: '45%', lg: '30%' }}
      minH="15rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box width={{ base: '100%', lg: '40%' }} pr={{ base: 'auto', md: 4 }}>
        <Heading as="h4" size="lg">
          {title}
        </Heading>
        <Heading as="h5" variant="sec" size="md">
          {subHeader}
        </Heading>
        <Box>
          {categories.map((cat, i) => (
            <Tag key={generate()}>{cat}</Tag>
          ))}
        </Box>
      </Box>

      <Box width={{ base: '100%', lg: '60%' }}>
        <GatsbyImage image={image} alt={`${title} featured Image`} />
      </Box>
    </CardOne>
  )
}

export default ProjectCard
