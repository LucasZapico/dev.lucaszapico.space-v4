import React from "react"
import {
  Link,
  Box,
  Container,
  Tag,
  Heading,
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { navigate, Link as GatsbyLink } from "gatsby"
import { generate } from "shortid"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { CardOne } from "components"

SwiperCore.use([Navigation, Scrollbar, A11y])

const ArticleSection = ({ recentArticles }) => (
  <Box py={16}>
    <Container maxW="container.xl" mb={10}>
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Heading as="h3" size="3xl">
          Recent Activity
        </Heading>
        <Box>
          <Link as={GatsbyLink} to="/articles" variant="linkOne" mr={4}>
            All Articles
          </Link>
          <Link as={GatsbyLink} to="/notes" variant="linkOne">
            All Notes
          </Link>
        </Box>
      </Flex>
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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {recentArticles.edges.map((article, i) => {
          const { title, description, categories, tags } =
            article.node.frontmatter
          /**
           * NOTE: the card below is custum becuase of the nature of swiper
           */
          return (
            <SwiperSlide key={generate()}>
              <CardOne
                className="link"
                minH="15rem"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                onClick={() => {
                  navigate(`/${article.node.fields.path}`)
                }}
              >
                <Box>
                  <Heading as="h4" size="md" variant="tri">
                    {title}
                  </Heading>
                  <Text variant="sec" size="md" noOfLines={3}>
                    {description}
                  </Text>
                </Box>
                <Flex flexWrap="wrap" mt={4}>
                  {categories.map((cat) => (
                    <Tag size="sm" mb={2} mr={1} variant="sec" key={generate()}>
                      #{cat}
                    </Tag>
                  ))}
                </Flex>
              </CardOne>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  </Box>
)

export default ArticleSection
