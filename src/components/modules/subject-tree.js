import { Box, Text } from "@chakra-ui/react"
import React, { useState, useEffect, memo } from "react"
import { generate } from "shortid"
import { FiChevronRight, FiChevronDown } from "react-icons/fi"
import { LinkOne } from "components"
import { Link as GatsbyLink } from "gatsby"

const Subject = ({ t, depth }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {}, [show, setShow])
  return (
    <Box>
      <LinkOne
        ml={depth * 2}
        as="div"
        mb={1}
        fontWeight="800"
        _hover={{ cursor: "pointer" }}
        display="flex"
        alignItems="center"
        onClick={() => setShow(!show)}
      >
        {!show ? <FiChevronRight /> : <FiChevronDown />}
        {t.name}
      </LinkOne>
      {show ? (
        <Box>
          {t.children.map((c) => {
            if (c.children.length > 0) {
              return <Subject depth={depth + 1} key={generate()} t={c} />
            } else if (c.link) {
              const name = c.name.replace(".md", "")
              return (
                <Box
                  to={`/${c.link}`}
                  as={GatsbyLink}
                  key={generate()}
                  mb={4}
                  display="block"
                >
                  <Text
                    mb={0}
                    display="block"
                    key={generate()}
                    fontSize="sm"
                    ml={depth * 6}
                  >
                    <span>&#8226;</span> {name}
                  </Text>
                </Box>
              )
            } else {
              return (
                <Text
                  key={generate()}
                  fontSize="sm"
                  as="div"
                  mb={4}
                  ml={depth * 6}
                >
                  <span>&#8226;</span> {name}
                </Text>
              )
            }
          })}
        </Box>
      ) : (
        <div />
      )}
    </Box>
  )
}

const SubjectTree = ({ tree }) => {
  const depth = 0
  return (
    <Box>
      {tree &&
        tree.map((t) => {
          if (t.children.length > 0) {
            return <Subject depth={depth + 1} key={generate()} t={t} />
          }
          return (
            <Text key={generate()} fontSize="sm" as="div" mb={4} ml={depth * 4}>
              {t.name}
            </Text>
          )
        })}
    </Box>
  )
}

export default SubjectTree
