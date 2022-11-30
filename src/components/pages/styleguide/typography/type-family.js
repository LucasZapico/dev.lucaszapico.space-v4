import React from "react"
import { Heading, Box } from "@chakra-ui/react"
import { HeadingStyles, TextStyles, Fonts } from "theme/typographyStyles"

const TypeFamily = () => {
  const fams = Object.keys(Fonts)
  console.log(fams)
  const TypeSet = ({ type }) => (
    <Box flexBasis={[100, 50]} py={10}>
      <Heading as="div" size="xl">
        {type} - {Fonts[type]}
      </Heading>
      <Heading as="div" size="lg" variant="" mb={0}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </Heading>
      <Heading as="div" size="lg" variant="" mb={0}>
        abcdefghijklmnopqrstuvwxyz
      </Heading>
    </Box>
  )

  return (
    <Box>
      {fams.map((f) => {
        return <TypeSet type={f} />
      })}
    </Box>
  )
}

export default TypeFamily
