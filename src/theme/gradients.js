/**
 * Site-wide gradient tokens built from theme color palettes.
 * Use with Chakra's bgGradient prop: bgGradient={Gradients.warm}
 * For text gradients, pair with bgClip="text".
 */

export const Gradients = {
  // Text gradients — use with bgClip="text"
  heroDark: "linear(to-r, gray.50, accent.500)",
  heroLight: "linear(to-r, gray.900, accent.500)",

  // Accent palette
  warm: "linear(to-r, yellow.400, accent.500)",
  ember: "linear(to-r, accent.300, red.600)",
  glow: "linear(to-r, yellow.200, yellow.600)",

  // Gray palette
  surface: "linear(to-b, gray.800, gray.900)",
  fade: "linear(to-b, gray.900, transparent)",
  mist: "linear(to-r, gray.100, gray.300)",

  // Cross-palette
  dusk: "linear(to-r, accent.700, gray.900)",
  sunrise: "linear(to-r, yellow.300, accent.400)",
  earth: "linear(to-r, gray.600, yellow.800)",
}
