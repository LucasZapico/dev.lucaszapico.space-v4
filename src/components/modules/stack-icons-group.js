import React from "react"
import { Box, Flex, HStack, useColorMode, Image } from "@chakra-ui/react"
import { generate} from 'shortid'

const StackIconsGroup = ({ iconArr }) => {
  const { colorMode } = useColorMode()
  const color = colorMode === "dark" ? "ffe194" : "ffe7a9"
  return (
    <HStack spacing="1rem">
      {iconArr.map((slug) => {
        return (
          <Image
            key={generate()}
            height="32px"
            width="32px"
            src={`https://cdn.simpleicons.org/${slug}/${color}`}
          />
        )
      })}
    </HStack>
  )
}

export default StackIconsGroup
