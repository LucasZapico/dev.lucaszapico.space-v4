import { Heading, Box, Container, GridItem, Grid, Flex } from '@chakra-ui/react'
import * as React from 'react'
import { graphql } from 'gatsby'
import { CardOne } from '../components/_index'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { generate } from 'shortid'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  BlurBlobOne,
  BlurBlobTwo,
  BlurBlobThree,
} from '../components/flare/blur-blobs'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const HomeHero = () => {
  const colorMode = 'dark'

  const color = colorMode === 'light' ? '#38383a' : '#f9f6f2'

  const content = {
    header: 'Hello, I am Lucas. Thanks for stopping by.',
    subHeader: 'Mostly a Frontend developer focusing on Reactjs.',
  }
  return (
    <Box py={20}>
      <Container maxW="container.xl">
        {colorMode === 'light ' ? (
          <Heading
            // bgGradient="linear(to-r, #38383a ,#B72525)"
            // bgClip="text"
            as="h2"
            size="3xl"
          >
            {content.header}
          </Heading>
        ) : (
          <Heading
            // bgGradient="linear(to-r, #f9f6f2 ,#B72525)"
            // bgClip="text"
            as="h2"
            size="3xl"
          >
            {content.header}
          </Heading>
        )}

        <Heading as="h1" size="2xl" variant="sec">
          {content.subHeader}
        </Heading>
      </Container>
    </Box>
  )
}

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

const ArticleSections = ({ recentArticles }) => (
  <Box py={20}>
    <Container maxW="container.xl">
      <Heading as="h3" size="3xl">
        Recent Articles
      </Heading>
    </Container>
    <Box ml={{ base: 0, md: 20, lg: 40 }}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          840: { slidesPerView: 3, spaceBetween: 50 },
          1040: { slidesPerView: 4, spaceBetween: 50 },
          1400: { slidesPerView: 4, spaceBetween: 50 },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {recentArticles.edges.map((article, i) => (
          <SwiperSlide key={generate()}>
            <CardOne mt={6} minH="20rem" minW="20rem">
              <Heading as="h4" size="xl" variant="sec">
                {article.node.frontmatter.title}
              </Heading>
              <Heading as="h5" variant="sec" size="md">
                {article.node.frontmatter.description}
              </Heading>
            </CardOne>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  </Box>
)

const Flare = () => (
  <Box
    position="absolute"
    top="0%"
    zIndex="-1"
    left="0%"
    height="100%"
    width="100%"
    overflow="hidden"
    // bgGradient="linear(to-br, brand.zero, brand.two)"
  >
    <Box position="relative" height="100%" width="100%" opacity="0.7">
      <Box pos="absolute" className="home-blob-one" right="0px" top="0px">
        <BlurBlobOne />
      </Box>{' '}
      <Box pos="absolute" left="0px" bottom="0px" className="home-blob-two">
        <BlurBlobTwo />
      </Box>{' '}
      <Box pos="absolute" left="0px" top="0px" className="home-blob-two">
        <BlurBlobThree />
      </Box>
    </Box>
  </Box>
)

const IndexPage = ({ data }) => {
  const { recentArticles, recentProjects } = data
  return (
    <Box position="relative" zIndex="0">
      <HomeHero />
      <ProjectSections recentProjects={recentProjects} />
      <ArticleSections recentArticles={recentArticles} />
      <Flare />
    </Box>
  )
}

export const query = graphql`
  query {
    recentArticles: allMarkdownRemark(
      filter: { frontmatter: { isdraft: { eq: false }, type: { eq: "post" } } }
      sort: { fields: frontmatter___date_created, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            categories
            description
            tags
          }
        }
      }
    }

    recentProjects: allMarkdownRemark(
      filter: {
        frontmatter: { isdraft: { eq: false }, type: { eq: "project" } }
      }
      sort: { fields: frontmatter___date_created, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            subHeader
            categories
            description
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
