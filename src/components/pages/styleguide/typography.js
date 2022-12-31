import React from "react"
import { Flex, Text, Heading, Box, Container, Divider } from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"
import TypographySizes from "components/pages/styleguide/typography/type-size"
import TypeFamily from "components/pages/styleguide/typography/type-family"
import TypeCompositions from "components/pages/styleguide/typography/type-compositions"
import { TypeVariantSection } from "components/pages/styleguide/typography/type-variants"

/**
 * TODO: [x] Dynamiclly set the type name
 *
 * Typography StyleGuide
 * - size
 * - family type
 * - color/variants
 * - compositions
 */

const TypographySection = () => {
  return (
    <Box id="typography">
      <Divider mb={6} />
      <Heading as="h3" size="2xl" color={styleGuideHeaderColors.pri}>
        Typography
      </Heading>
      <Heading as="div" size="xl" color={styleGuideHeaderColors.sec}>
        Font Family
      </Heading>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <TypeFamily />
      </Flex>

      <Heading as="h4" size="xl" color={styleGuideHeaderColors.sec}>
        Sizes
      </Heading>
      <TypographySizes />
      <Text className="readable">
        All sizes are responsive and resize accordingly to best practices for
        various screen widths.
      </Text>
      <TypeVariantSection />
    </Box>
  )
}

export const ContentSection = () => (
  <Box py={20}>
    <TypographySection />
    <TypeCompositions />
    {/* TODO: 👇 this doesn't make sense becuase I handle this with mdx so I would have to import all of the mdx element to style this correctly */}
    {/* <Box maxW="605px" mx="auto" >
      <Heading as="div" size="2xl">
        Content
      </Heading>
      <Text>
        It's often said that the internet has democratized education: the sum of
        human knowledge is only a Google search away! And yet, having access to
        information is only half of the story; you also need to be able to
        convert raw information into usable skills.
      </Text>
      <Heading as="div" size="xl">
        Header 2
      </Heading>
      <Text>
        For a lot of us, the gap between the two can lead to things like
        tutorial hell—getting stuck doing tutorial after tutorial without ever
        feeling like you're making substantive progress.
      </Text>
      
      <Text>
        Learning how to learn effectively is super important, especially as a
        software developer; learning new things is practically the whole gig! If
        you can learn to quickly pick up new languages/frameworks/tools, you'll
        be able to be way more productive than the average developer. It's sort
        of a superpower.
      </Text>
      <Text>
        In this blog post, I'll share what I've learned about learning, and show
        you how I pick up new skills lickety-split!
      </Text>
      <Box py={10}>
        <CardOne py={6}>
          <Heading as="h4">Card</Heading>
          <Heading as="h5">Sub header</Heading>
        </CardOne>
      </Box>
    </Box> */}
  </Box>
)
