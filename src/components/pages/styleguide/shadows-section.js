import React from "react"
import { Heading, Box, Flex, Text, Divider } from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"

const shadowTokens = [
  { key: "xs", value: "0 0 0 1px rgba(0, 0, 0, 0.05)" },
  { key: "sm", value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
  { key: "base", value: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)" },
  { key: "md", value: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
  { key: "lg", value: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
  { key: "xl", value: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" },
  { key: "2xl", value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" },
  { key: "inner", value: "inset 0 2px 4px 0 rgba(0,0,0,0.06)" },
  { key: "outline", value: "0 0 0 3px rgba(66, 153, 225, 0.6)" },
  { key: "dark-lg", value: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px" },
]

export const ShadowsSection = () => (
  <Box py={16} id="shadows">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size={{ base: "xl", md: "2xl" }} color={styleGuideHeaderColors.pri}>
        Shadows
      </Heading>
      <Text color={styleGuideHeaderColors.sec} mb={6}>
        Box shadow tokens available via the <code>boxShadow</code> prop.
      </Text>
      <Flex flexWrap="wrap" gap={{ base: 4, md: 6 }} justifyContent={{ base: "center", sm: "flex-start" }}>
        {shadowTokens.map((token) => (
          <Box
            key={token.key}
            w={{ base: "calc(50% - 0.5rem)", sm: "160px" }}
            h="120px"
            bg="gray.800"
            borderRadius="sm"
            boxShadow={token.key}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={3}
          >
            <Text fontFamily="mono" fontSize="sm" fontWeight="bold">
              {token.key}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  </Box>
)
