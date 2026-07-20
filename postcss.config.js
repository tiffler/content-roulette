import tailwindcss from 'tailwindcss'
import jitProps from 'postcss-jit-props'
import OpenProps from 'open-props'
import autoprefixer from 'autoprefixer'

// Order matters. Tailwind runs first and emits utilities whose values are
// var(--size-3) etc (see the theme mapping in tailwind.config.js). Then
// postcss-jit-props scans that output and injects :root definitions for only
// the Open Props actually referenced — so we get Open Props' scale without
// shipping the whole library.
export default {
  plugins: [
    tailwindcss,
    jitProps(OpenProps),
    autoprefixer,
  ],
}
