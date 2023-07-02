import React from "react"

import { graphql, Link as GatsbyLink } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Box,
  Container,
  Button,
  Link,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Portrait } from "components/flare/portrait"
import { SEO } from "components"

const AboutPage = ({ location }) => (
  <>
    <SEO title="About" location={location} />
    <Container maxW="container.md" py={20}>
      <Portrait />
      <Heading as="h1" size="2xl">
        About my development journey
      </Heading>
      <Heading as="h2" size="xl">
        The Method
      </Heading>
      <Text>
        Hi 👋, My name is Lucas Zapico a developer from USA who enjoys figuring how to make things for the web. I build websites, web app, chrome extensions,API's and custom business integrations. In my off time I enjoy the outdoors fishing 🎣, hiking 🥾.
      </Text>

      {/* <Heading as="h3" size="xl">
        The Objective
      </Heading>
      <Text>
        I enjoy nothing more than building something efficient and competitive!
        The process itself is an addiction. I am energized by democratizing the
        creative process and exploring the unique, clever, strange, and
        sometimes hilarious solutions that open collaboration fosters.
      </Text> */}
      <Heading as="h4" size="xl">
        The Stack
      </Heading>
      <Text>
        I am a full stack developer working primaryily with JavaScript/Node and their frameworks, React.js, Next.js, Gatsby.js, and Express.js. I enjoy working with Python and have been learning Golang in my free time. 
      </Text>

      <Box my={6}>
        <img src="https://skillicons.dev/icons?i=nextjs,gatsbyjs,react,javascript,angular,nodejs,express,python,flask,django,bash,mongodb,mysql,postgres,electron,graphql,git,docker,webpack,vercel,netlify,firebase,azure,heroku,vim,linux,tailwind,md,css,sass,html&perline=10" />
      </Box>
      <Heading as="h4" size="xl">
        The Tool Chain
      </Heading>
      <Box my={6}>
        <img src="https://skillicons.dev/icons?i=codepen,github,gitlab,vscode,figma&perline=10" />
      </Box>
      <Flex flexwrap="wrap" my={6}>
        <img
          alt="Faizan's GitHub stats"
          width="406"
          src="https://github-readme-stats.vercel.app/api?username=LucasZapico&custom_title=Github+Stats&bg_color=00000000&hide_border=true&show_icons=true&text_color=667799&title_color=ffe7a9&icon_color=ffe7a9"
        />
        <img
          alt="Top Langs"
          width="350"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=LucasZapico&layout=compact&hide_border=true&bg_color=00000000&text_color=667799&custom_title=Top+Languages&title_color=ffe7a9"
        />
      </Flex>
      <Link as={GatsbyLink} to="/projects" variant="linkOne">
        Projects <ArrowForwardIcon />
      </Link>
    </Container>
  </>
)

export default AboutPage
