import { mode } from "@chakra-ui/theme-tools"

export const TagStyles = {
  parts: ["container", "label", "closeButton"],
  baseStyle: (props) => ({
    container: {
      bg: mode("gray.200", "gray.800")(props),
      color: mode("gray.700", "gray.300")(props),
      fontFamily: "mono",
    },
  }),
  defaultProps: {
    size: "md",
    variant: "default",
  },
  variants: {
    sec: (props) => ({
      container: {
        bg: mode("gray.50", "gray.900")(props),
        color: mode("gray.300", "gray.600")(props),
        borderColor: mode("gray.300", "gray.600")(props),
        border: "1px",
        borderRadius: "none",
      },
    }),
  },
}
