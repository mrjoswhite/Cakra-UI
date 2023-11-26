import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        md: {
          fontSize: "16px",
          px: "24px",
          py: "12px",
        },
      },
      variants: {
        primary: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: "brand.500",
            _hover: {
              borderColor: "brand.600",
            },
            _focus: {
              borderColor: "brand.600",
              boxShadow: "0 0 0 1px #CBD5E0",
            },
          },
        },
      },
    },
  },
});

export default theme;