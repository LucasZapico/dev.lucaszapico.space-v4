import React from 'react'
import {
  List,
  Box,
  Heading,
  Text,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  MdCheckCircle,
} from '@chakra-ui/react'
import { generate } from 'shortid'
import { LinkOne } from '../_index'

const used = [
  {
    name: 'Gatsby',
    link: 'https://www.gatsbyjs.com/',
    icon: '',
    category: 'development',
    for: 'Blazing fast React Frontend Framework',
  },
  {
    name: 'React Spring',
    link: 'https://react-spring.io/',
    icon: '',
    category: 'development',
    for: ' Simple spring animation primitives for React',
  },
]

const SiteCredits = () => {
  return (
    <Box>
      <List spacing={3}>
        {used.map((el, i) => (
          <ListItem key={generate()}>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <LinkOne isExternal variant="LinkOne" href={el.link}>
              <Heading as="h6">{el.name}</Heading>
            </LinkOne>
            <Text size="md">{el.for}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default SiteCredits
