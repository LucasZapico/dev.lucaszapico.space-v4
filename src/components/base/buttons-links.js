import { CopyIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons"
import {
  Box,
  Center,
  Link,
  Flex,
  IconButton,
  Tooltip,
  useToast,
} from "@chakra-ui/react"
import React, { useState } from "react"

import useClipboard from "react-use-clipboard"

export const formatePhone = (phoneNumberString) => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, "")

  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return null
}

export const formatePhoneBot = (phoneNumberString) => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`
  }
  return null
}

export const LinkOne = ({ children, content, icon, ...rest }) => (
  <Link {...rest}>
    {children || content}

    {icon}
  </Link>
)

// export const LinkOne = ({
//   children,
//   content,
//   to = '',
//   href = '',
//   icon,
//   fontSize = 'xl',
//   ...rest
// }) => (
//   <Box {...rest}>
//     {href !== '' ? (
//       <ChLink href={href}>
//         <Box
//           transition="all 0.4s ease-in-out"
//           display="flex"
//           alignItems="center"
//           fontSize={fontSize}
//         >
//           {children || content}

//           {icon}
//         </Box>
//       </ChLink>
//     ) : (
//       <Link to={to}>
//         <Box
//           display="flex"
//           alignItems="center"
//           transition="all 0.4s ease-in-out"
//           fontSize={fontSize}
//         >
//           {children || content}

//           {icon}
//         </Box>
//       </Link>
//     )}
//   </Box>
// );

export const LinkPhone = (props) => {
  const { children, color } = props
  const formatedPhone = formatePhone(children)
  const formatedPhoneBot = formatePhoneBot(children)
  const [isCopied, setCopied] = useClipboard(children, {
    successDuration: 1000,
  })
  const toast = useToast()

  return (
    <>
      {formatedPhone ? (
        <Flex
          {...props}
          display="inline"
          alignItems="center"
          justifyContent="space-between"
          minWidth="180px"
          wrap="nowrap"
        >
          <Link
            color={color}
            fontWeight="semibold"
            transition="all 0.4s ease-in-out"
            _hover={{ color: "brand.two" }}
            href={`tel:+1${formatedPhoneBot}`}
          >
            <PhoneIcon />
            &nbsp;
            {formatedPhone}
          </Link>
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
                  description: `${children} copied to clipboard`,
                  status: "info",
                  variant: "top-accent",
                  duration: 2000,
                  isClosable: true,
                })
              }}
            />
          </Tooltip>
        </Flex>
      ) : (
        <div />
      )}
    </>
  )
}

export const LinkEmail = (props) => {
  const { children, color } = props

  const [isCopied, setCopied] = useClipboard(children, {
    successDuration: 1000,
  })

  const toast = useToast()
  return (
    <Flex
      {...props}
      display="inline"
      alignItems="center"
      justifyContent="space-between"
      minWidth="180px"
      wrap="nowrap"
    >
      <Link
        transition="all 0.4s ease-in-out"
        _hover={{ color: "brand.two" }}
        color={color}
        href={`mailto:${children}`}
      >
        <EmailIcon />
        &nbsp;
        {children}
      </Link>
      <Tooltip
        label={isCopied ? "Copied" : "copy to clipboard"}
        aria-label="copy to clipboard"
        placement="right"
      >
        <IconButton
          m={0}
          variant="none"
          aria-label="copy to clipboard"
          icon={<CopyIcon opacity="0.5" />}
          onClick={() => {
            setCopied()
            return toast({
              title: "Copied to Clipboard",
              description: `${children} copied to clipboard`,
              status: "info",
              variant: "top-accent",
              duration: 2000,
              isClosable: true,
            })
          }}
        />
      </Tooltip>
    </Flex>
  )
}
