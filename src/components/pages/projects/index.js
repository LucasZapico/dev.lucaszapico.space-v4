import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import { SearchIcon } from '@chakra-ui/icons'

import {
  Box,
  Heading,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { generate } from 'shortid'
import { generateImageData } from 'gatsby-plugin-image'
import ProjectCard from './project-card'
import { ProjectSection } from '../../_index'

const Projects = () => {
  // const { recentProjects } = useStaticQuery(query)

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="4xl">
          Work
        </Heading>

        {/* <ProjectSection recentProjects={recentProjects} /> */}
      </Container>
    </>
  )
}

// export const query = graphql`
//   query {
//     recentProjects: allMarkdownRemark(
//       filter: {
//         frontmatter: { isdraft: { eq: false }, type: { eq: "project" } }
//       }
//       sort: { fields: frontmatter___date_created, order: DESC }
//     ) {
//       edges {
//         node {
//           id
//           fields {
//             path
//           }
//           frontmatter {
//             title
//             subHeader
//             categories
//             description
//             tags
//             featuredImage {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default Projects
