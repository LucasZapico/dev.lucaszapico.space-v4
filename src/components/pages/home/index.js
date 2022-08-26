import React from 'react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import ArticleSection from './article-section'
import HomeHero from './hero'
import { ProjectSection } from '../../_index'
import { Heading, Link, Container } from '@chakra-ui/react'

const Home = () => {
  // const { recentArticles, recentProjects } = useStaticQuery(query)
  return (
    <>
      <HomeHero />
      <Container maxW="container.xl">
        <Heading as="h3" size="3xl">
          Recent Projects
        </Heading>
        <Link as={GatsbyLink} to="/projects" variant="linkOne">
          See All Project
        </Link>
        {/* {recentProjects && <ProjectSection recentProjects={recentProjects} />} */}
      </Container>
      {/* {recentArticles && <ArticleSection recentArticles={recentArticles} />}  */}
    </>
  )
}

// export const query = graphql`
//   query {
//     recentArticles: allMarkdownRemark(
//       filter: { frontmatter: { isdraft: { eq: false }, type: { eq: "post" } } }
//       sort: { fields: frontmatter___date_created, order: DESC }
//     ) {
//       edges {
//         node {
//           id
//           fields {
//             path
//           }
//           excerpt(format: HTML)
//           frontmatter {
//             title
//             categories
//             description
//             tags
//           }
//         }
//       }
//     }

//     recentProjects: allMarkdownRemark(
//       filter: {
//         frontmatter: { isdraft: { eq: false }, type: { eq: "project" } }
//       }
//       sort: { fields: frontmatter___date_created, order: DESC }
//       limit: 4
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

export default Home
