import React from 'react'
import { Link, Flex, Box, Text } from '@chakra-ui/react'
import moment from 'moment'
import { Link as GatsbyLink } from 'gatsby'

const SubFooter = () => {
  return (
    <Flex alignContent="center" justifyContent="flex-start" p={1}>
      <Text fontSize="xs" mb={0}>
        &copy;Blue Monkey Makes {moment().format('YYYY')}
      </Text>

      <Link ml={2} fontSize="xs" to="/privacy" as={GatsbyLink}>
        Privacy Policy
      </Link>
    </Flex>
  )
}

export default SubFooter
