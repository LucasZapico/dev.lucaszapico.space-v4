import React from 'react'

import { graphql, Link as GatsbyLink } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Box, Container, Button, Link, Heading, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Portrait } from '../components/flare/portrait'
import { SEO } from '../components/_index'

const AboutPage = ({ location }) => (
  <>
    <SEO title="About" location={location} />
    <Container maxW="container.md" py={20}>
      <Portrait />
      <Heading as="h1" size="2xl">
        I learn, analyze, create, and iterate.
      </Heading>
      <Heading as="h2" size="xl">
        The Method
      </Heading>
      <Text>
        My method is to immerse, discuss, ship, get feedback, and be patient
        because understanding and quality both take time and effort.
      </Text>
      {/* {JSON.stringify(data, null, 4)} */}
      {/* <Img
          fluid={data.profile.childImageSharp.fluid}
          objectFit="contain"
        /> */}
      <Heading as="h3" size="xl">
        The Objective
      </Heading>
      <Text>
        I enjoy nothing more than building something efficient and competitive!
        The process itself is an addiction. I am energized by democratizing the
        creative process and exploring the unique, clever, strange, and
        sometimes hilarious solutions that open collaboration fosters.
      </Text>
      <Heading as="h4" size="xl">
        The Tools
      </Heading>
      <Text>
        I am a React and JavaScript developer with experience and comfort across
        the entire stack. On the backend I prefer Nodejs or Python.
      </Text>

      <Link as={GatsbyLink} to="/projects" variant="linkOne">
        Projects <ArrowForwardIcon />
      </Link>
    </Container>
  </>
)

export default AboutPage
