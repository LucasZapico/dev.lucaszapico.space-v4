import { tagAnatomy } from "@chakra-ui/anatomy"

export const TagStyles = {
  parts: ["container", "label", "closeButton"],
  baseStyle: ({ colorMode }) => ({
    container: {
      bg: colorMode === "dark" ? "gray.800" : "gray.200",
      color: colorMode === "dark" ? "gray.300" : "gray.700",
      variant: "default",
    },
  }),
  defaultProps: {
    size: "md",
    variant: "default",
  },
  variants: {
    sec: ({ colorMode }) => ({
      container: {
        // bg: "yellow.200",
        // color: "yellow.400",
        bg: colorMode === "dark" ? "gray.900" : "gray.50",
        color: colorMode === "dark" ? "gray.600" : "gray.300",
        borderColor: colorMode === "dark" ? "gray.600" : "gray.300",
        border: "1px",
        borderRadius: "0px",
      },
    }),
  },
}
