import React from "react"
import {
  Heading,
  Box,
  Text,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"
import { styleGuideHeaderColors } from "components/pages/styleguide"

const breakpointTokens = [
  { key: "base", em: "0em", px: "0px", label: "Mobile (portrait)" },
  { key: "sm", em: "30em", px: "480px", label: "Mobile (landscape)" },
  { key: "md", em: "48em", px: "768px", label: "Tablet" },
  { key: "lg", em: "62em", px: "992px", label: "Desktop" },
  { key: "xl", em: "80em", px: "1280px", label: "Wide desktop" },
  { key: "2xl", em: "96em", px: "1536px", label: "Ultra-wide" },
]

const containerSizes = [
  { key: "sm", value: "640px" },
  { key: "md", value: "768px" },
  { key: "lg", value: "1024px" },
  { key: "xl", value: "1280px" },
  { key: "xxl", value: "1440px" },
]

export const BreakpointsSection = () => (
  <Box py={16} id="breakpoints">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size={{ base: "xl", md: "2xl" }} color={styleGuideHeaderColors.pri}>
        Breakpoints
      </Heading>
      <Text color={styleGuideHeaderColors.sec} mb={6}>
        Responsive breakpoint tokens used in responsive prop arrays and objects.
      </Text>
      <Box overflowX="auto" mb={10}>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Token</Th>
              <Th>em</Th>
              <Th>px</Th>
              <Th display={{ base: "none", sm: "table-cell" }}>Typical use</Th>
            </Tr>
          </Thead>
          <Tbody>
            {breakpointTokens.map((bp) => (
              <Tr key={bp.key}>
                <Td fontFamily="mono" fontWeight="bold">{bp.key}</Td>
                <Td fontFamily="mono">{bp.em}</Td>
                <Td fontFamily="mono">{bp.px}</Td>
                <Td display={{ base: "none", sm: "table-cell" }}>{bp.label}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Heading as="h4" size="lg" color={styleGuideHeaderColors.sec} mb={4}>
        Container Sizes
      </Heading>
      <Box overflowX="auto">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Token</Th>
              <Th>Max Width</Th>
            </Tr>
          </Thead>
          <Tbody>
            {containerSizes.map((cs) => (
              <Tr key={cs.key}>
                <Td fontFamily="mono" fontWeight="bold">container.{cs.key}</Td>
                <Td fontFamily="mono">{cs.value}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  </Box>
)
