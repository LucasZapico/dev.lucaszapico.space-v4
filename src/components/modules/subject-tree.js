import { Link, Heading, Box, Text, useColorMode } from "@chakra-ui/react"
import React, { useState, useEffect, memo, useRef } from "react"
import { generate } from "shortid"
import { FiChevronRight, FiChevronDown } from "react-icons/fi"

import { Link as GatsbyLink, navigate } from "gatsby"
import { treeAtom } from "store"
import { useAtom } from "jotai"

const Subject = ({ t, depth }) => {
  const { colorMode } = useColorMode()
  const [show, setShow] = useState(false)
  const [treeState, setTreeState] = useAtom(treeAtom)
  useEffect(() => {
    console.log("subject")
    // remove last page from active tree state
    if (treeState.length > 0) {
      const matches = treeState.filter((treeEl) => /\.mdx/.test(treeEl))
      console.log(matches)
      if (matches.length < 1) {
        // navigate("/notes")
      } else if (matches.length > 1) {
        const index = treeState.indexOf(matches[0])
        setTreeState((prev) => {
          prev.splice(index, 1)
          return prev
        })
      }
    }
  }, [treeState, setTreeState])
  return (
    <Box>
      <Heading 
        as="div"
        ml={depth * 2}
        variant="sideNavHeader"
        _hover={{ cursor: "pointer" }}        
        aria-expanded={treeState.includes(t.name) ? true : false}
        display="flex"
        alignItems="center"
        size="xs"
        onClick={() => {
          setTreeState((prev) =>
            prev.includes(t.name)
              ? prev.filter((el) => el !== t.name)
              : [...prev, t.name]
          )
        }}
      >
        {t.name}{" "}
        {!treeState.includes(t.name) ? <FiChevronRight /> : <FiChevronDown />}
      </Heading>
      {treeState.includes(t.name) ? (
        <Box mb={2}>
          {t.children.map((c) => {
            if (c.children.length > 0) {
              return <Subject depth={depth + 1} key={generate()} t={c} />
            } else if (c.link) {
              const title = c.name.replace(".mdx", "")
              return (
                <Box
                  display="flex"
                  alignItems="center"
                  to={`/${c.link}`}
                  as={GatsbyLink}
                  key={generate()}
                  onClick={() =>
                    setTreeState((prev) =>
                      prev.includes(c.name)
                        ? prev.filter((el) => el !== c.name)
                        : [...prev, c.name]
                    )
                  }
                >
                  <Heading
                    pb={4}
                    variant="sideNavLink"
                    aria-selected={treeState.includes(c.name) ? true : false}
                    borderLeft="1px"
                    borderColor={colorMode === "dark" ? "gray.700" : "gray.300"}                    
                    color="inherit"
                    mb={0}
                    display="block"
                    key={generate()}
                    fontSize="sm"
                    ml={depth * 4}
                    pl={2}
                  >
                    {/* <span>&#8226;</span>  */}
                    {title}
                  </Heading>
                </Box>
              )
            } else {
              const title = c.name.replace(".mdx", "")
              return (
                <Text
                  key={generate()}
                  fontSize="sm"
                  as="div"
                  mb={4}
                  ml={depth * 6}
                >
                  {/* <span>&#8226;</span>  */}
                  {title}
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
  const [treeState, setTreeState] = useAtom(treeAtom)
  return (
    <Box top={20} left="0px" minHeight="100vh">
      <Heading variant="tri" size="md">
        Subjects
      </Heading>
      <Box pb={6}>
        {tree &&
          tree.map((t) => {
            if (t.children.length > 0) {
              return <Subject depth={depth + 1} key={generate()} t={t} />
            }
            return (
              <Text
                key={generate()}
                fontSize="xs"
                as="div"
                mb={4}
                ml={depth * 4}
              >
                {t.name}
              </Text>
            )
          })}
      </Box>
    </Box>
  )
}

export default SubjectTree
