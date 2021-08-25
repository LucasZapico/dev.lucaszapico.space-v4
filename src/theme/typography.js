export const Fonts = {
  heading: "'Montserrat', sans-serif",
  body: 'Montserrat, sans-serif',
};

// Heading
export const Headings = {
  baseStyle: {
    fontWeight: 700,
    color: 'brand.five',
    marginBottom: '6',
    lineHeight: 'lineHeights.taller',
    letterSpacing: '0.02rem',
  },
  // Styles for the size variations
  sizes: {
    '4xl': {
      fontSize: ['4xl', null, '9xl'],
      lineHeight: 1.5,
    },
    '3xl': {
      fontSize: ['4xl', null, '7xl'],
      lineHeight: 1.5,
    },
    '2xl': {
      lineHeight: 1.5,
    },
    xl: {
      lineHeight: 1.5,
    },
    lg: {
      lineHeight: 1.5,
    },
  },
  // Styles for the visual style variations
  variants: {
    sec: {
      color: 'brand.four',
      fontWeight: 500,
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

export const Texts = {
  baseStyle: {
    color: 'brand.three',
    fontWeight: 600,
    letterSpacing: '0.1rem',
    lineHeight: 1.5,
    marginBottom: '6',
  },
};
