import React from 'react'
import { Link, Box, Container, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { navigate, Link as GatsbyLink } from 'gatsby'
import { generate } from 'shortid'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { CardOne } from '../../_index'

SwiperCore.use([Navigation, Scrollbar, A11y])

const ArticleSection = ({ recentArticles }) => (
  <Box py={20}>
    <Container maxW="container.xl" mb={10}>
      <Heading as="h3" size="3xl">
        Recent Articles
      </Heading>
      <Link as={GatsbyLink} to="/articles" variant="linkOne">
        All Articles
      </Link>
    </Container>
    <Box ml={{ base: 0, md: 20, lg: 40 }}>
      <Swiper
        navigation
        preventClicks="false"
        preventClicksPropagation="false"
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        spaceBetween={50}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          840: { slidesPerView: 2, spaceBetween: 50 },
          1040: { slidesPerView: 3, spaceBetween: 50 },
          1400: { slidesPerView: 4, spaceBetween: 50 },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {recentArticles.edges.map((article, i) => (
          <SwiperSlide key={generate()}>
            <CardOne
              className="link"
              mt={6}
              minH="20rem"
              minW="20rem"
              onClick={() => {
                navigate(`/${article.node.fields.path}`)
              }}
            >
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

export default ArticleSection
