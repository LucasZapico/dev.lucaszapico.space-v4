import React from "react"
import {
  Text,
  Heading,
  Box,
  Container,
  Button,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"
import {
  HeadingStyles,
  TextStyles,
  Fonts,
  FontSizeScale,
} from "theme/typographyStyles"


export const TypeVariantSection = () => (
  <Box py={20} id="type-variants">
    <Box py={10}>
      <Heading as="h3" size="2xl" color={styleGuideHeaderColors.pri}>
        Typogrpahy Variants
      </Heading>
      {Object.keys(HeadingStyles.variants).map((v) => {
        const title = `${v.slice(0, 1).toUpperCase()}${v.slice(1)}`
        // Enterprise
        return (
          <>
            <Heading as="div" size="lg" color={styleGuideHeaderColors.sec}>
              {title} Variant
            </Heading>
            <Heading as="div" size="xl" variant={v}>
              I'm an example of {title} heading variant
            </Heading>
          </>
        )
      })}
    </Box>
  </Box>
)
