import React, { Children } from "react"
import { Flex, Box, useColorMode, useToast, Tooltip, IconButton, } from "@chakra-ui/react"
import { CopyIcon } from "@chakra-ui/icons"
import { LightenDarkenColor } from "lighten-darken-color"
import Highlight, { defaultProps } from "prism-react-renderer"
import useClipboard from "react-use-clipboard"
import Prism from "prism-react-renderer/prism"
import dracula from "prism-react-renderer/themes/dracula"
import duotoneLight from "prism-react-renderer/themes/duotoneLight"

const FileName = ({ theme, fileName }) => {
  const bg = LightenDarkenColor(theme.plain.backgroundColor, -10)

  return (
    <Box borderTopRadius="md" p={2} mb={0} bg={bg}>
      {fileName}
    </Box>
  )
}

const CopyCode = ({code, ...rest}) => {
  const [isCopied, setCopied] = useClipboard(code, {
    successDuration: 1000,
  })
  const toast = useToast()

  return (
    <Box {...rest}>
    <Tooltip
      
      label={isCopied ? "Copied" : "copy to clipboard"}
      aria-label="copy to clipboard"
      placement="right"
    >
      <IconButton
        variant="none"
        aria-label="copy to clipboard"
        icon={<CopyIcon opacity="0.5" />}
        m={0}
        onClick={() => {
          setCopied()
          return toast({
            title: "Copied to Clipboard",
            description: `${code} copied to clipboard`,
            status: "info",
            variant: "top-accent",
            duration: 1000,
            isClosable: true,
          })
        }}
      />
    </Tooltip>
    </Box>
  )
}

export const CodeBlockMdx = ({ children }) => {
  const { colorMode } = useColorMode()
  const className = children.props.className || ""
  
  const [language = "", fileName = ""] = className.split(/[ :]/)
  // console.log("Children")
  // console.log(children)
  // console.log(className)

  const matches = language.match(/language-(?<lang>.*)/)
  const lang = language?.replace("language-", "")
  const file = fileName?.replace("title=", "")
  /**
   * handle if the code block is empty
   */
  if(!children.props.children ) return <></>

  const rawCode = children.props.children.trim()
  const theme = colorMode === "dark" ? dracula : duotoneLight
  return (
    <Box mb={4} >
      {fileName.length > 0 ? <FileName theme={theme} fileName={file} /> : <></>}
      <Highlight
        {...defaultProps}
        code={rawCode}
        language={lang || ""}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          // console.log(style)
          // console.log(children)
          const Code = () => tokens.map((line, i) => (
            <Box key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </Box>
          ))
          return (
            <Box
              borderRadius="md"
              color={style.color}
              overflow="auto"
              bg={style.backgroundColor}
              mt={fileName.length > 0 ? 0 : 2}
              as="pre"
              className={className}
              px={2}
              py={4}
              position="relative"
            >              
              <CopyCode position="absolute" top={1} right={1} code={rawCode} /> 
              <Code/>
            </Box>
          )
        }}
      </Highlight>
    </Box>
  )
}
