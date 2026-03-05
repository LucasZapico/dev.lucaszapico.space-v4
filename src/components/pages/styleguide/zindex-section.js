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

const zIndexTokens = [
  { key: "hide", value: -1 },
  { key: "auto", value: "auto" },
  { key: "base", value: 0 },
  { key: "docked", value: 10 },
  { key: "dropdown", value: 1000 },
  { key: "sticky", value: 1100 },
  { key: "banner", value: 1200 },
  { key: "overlay", value: 1300 },
  { key: "modal", value: 1400 },
  { key: "popover", value: 1500 },
  { key: "skipLink", value: 1600 },
  { key: "toast", value: 1700 },
  { key: "tooltip", value: 1800 },
]

export const ZIndexSection = () => (
  <Box py={16} id="zindex">
    <Divider />
    <Box py={10}>
      <Heading as="h3" size={{ base: "xl", md: "2xl" }} color={styleGuideHeaderColors.pri}>
        Z-Index
      </Heading>
      <Text color={styleGuideHeaderColors.sec} mb={6}>
        Z-index tokens for layering elements. Available via the{" "}
        <code>zIndex</code> prop.
      </Text>
      <Box overflowX="auto">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Token</Th>
              <Th>Value</Th>
              <Th display={{ base: "none", sm: "table-cell" }}>Use case</Th>
            </Tr>
          </Thead>
          <Tbody>
            {zIndexTokens.map((token) => (
              <Tr key={token.key}>
                <Td fontFamily="mono" fontWeight="bold">{token.key}</Td>
                <Td fontFamily="mono">{token.value}</Td>
                <Td display={{ base: "none", sm: "table-cell" }} textTransform="capitalize">{token.key}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  </Box>
)
