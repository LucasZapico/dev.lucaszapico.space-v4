import React from "react"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorMode,
} from "@chakra-ui/react"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import { capitalizeCase } from "utils/font-util"
import { generate } from "shortid"

const BreadCrumbGroup = ({ pathArr }) => {
  const {colorMode } = useColorMode()
  return (
    <Box mt={6} mb={10}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink color={colorMode === "dark" ? "gray.400" : "gray.600"} to="/" as={GatsbyLink}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathArr.map((b) => {
          let title = ""
          title = b === "note" ? "notes" : b
          return (
            <BreadcrumbItem key={generate()}>
              <BreadcrumbLink color={colorMode === "dark" ? "gray.400" : "gray.600"} to={`/${title}`} as={GatsbyLink}>
                {capitalizeCase(title)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumb>
    </Box>
  )
}

export default BreadCrumbGroup
 