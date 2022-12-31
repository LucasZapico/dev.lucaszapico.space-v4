import React, { useEffect, useState } from "react"
import {
  Heading,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"
import useWindowSize from "hooks/use-window-size"
import theme from "theme"
import {generate} from 'shortid'

const BreakPointTable = ({ breakpoints }) => {
  return (
    <TableContainer>
      <Table size="sm" variant="simple">
        {Object.keys(breakpoints).map((b) => {
          return (
            <Tr key={generate()}>
              <Td>{b}</Td>
              <Td>{parseInt(breakpoints[b].replace("em", "")) * 16}px</Td>
            </Tr>
          )
        })}
      </Table>
    </TableContainer>
  )
}

const ResponsiveHeightWidhtTable = ({ width, height }) => {
  return (
    <TableContainer>
      <Table size="sm" variant="simple">
        <Tr>
          <Td>width</Td>
          <Td>{width}px</Td>
        </Tr>
        <Tr>
          <Td>height</Td>
          <Td>{height}px</Td>
        </Tr>
      </Table>
    </TableContainer>
  )
}

const ResponsiveHelper = () => {
  const [currentSize, setCurrentSize ] = useState('')
  const { width, height } = useWindowSize()
  const { breakpoints } = theme

  const fontColor = {
    base: "gray.900",
    sm: "gray.800",
    md: "gray.800",
    lg: "gray.300",
    xl: "gray.100",
  }

  const currentSizeArr = Object.keys(breakpoints).map((b) => {
    const tmp = breakpoints[b].replace("em", "")
    const px = parseInt(tmp) * 16
    return {
      [px]: b,
    }
  })

  useEffect(() => {
    currentSizeArr.forEach((el) => {
      const key = Object.keys(el)
      // console.log(parseInt(key[0]))
      // console.log(parseInt(key[0]) > width)
      if(parseInt(key[0]) < width ){
        setCurrentSize(el[key[0]])
      }
    })
  }, [width])

  return process.env.GATSBY_ENV !== "production" ? (
    <Box
    // display="flex"
      display="none"
      justifyContent="space-between"
      opacity=".8"
      borderColor="gray.300"
      border="2px"
      pos="fixed"
      bottom={6}
      left={6}
      zIndex="100"
      borderRadius="md"
      p={4}
      color={fontColor}
      bg={{
        base: "gray.100",
        sm: "gray.300",
        md: "gray.500",
        lg: "gray.700",
        xl: "gray.900",
      }}
    >
      <Box mr={6}>
      <Heading color={fontColor} as="div" size="sm">Current Size: {currentSize}</Heading>
      </Box>
      <Box mr={6}>
      <Heading color={fontColor} as="div" size="sm">Chakra BreakPoints</Heading>
      <BreakPointTable breakpoints={breakpoints} />
      </Box>
      <Box mr={6}>
      <Heading color={fontColor} as="div" size="sm">Current Height:Width</Heading>
      <ResponsiveHeightWidhtTable height={height} width={width} />
      </Box>
    </Box>
  ) : (
    <></>
  )
}

export default ResponsiveHelper
