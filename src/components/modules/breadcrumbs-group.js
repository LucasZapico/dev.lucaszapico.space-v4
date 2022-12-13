import React from "react"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby"
import { capitalizeCase } from "utils/font-util"

const BreadCrumbGroup = ({ pathArr }) => {
  return (
    <Box mt={6} mb={10}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink to="/" as={GatsbyLink}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathArr.map((b) => {
          let title = ""
          
          title = b === "note" ? "notes" : b
          return (
            <BreadcrumbItem>
              <BreadcrumbLink to={`/${title}`} as={GatsbyLink}>
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
