/** @type {import('tailwindcss').Config} */

// Open Props supplies the VALUES behind Tailwind's scales; you keep writing
// normal utility classes (px-8, gap-4, rounded-2xl) in JSX. postcss-jit-props
// (see postcss.config.js) injects :root definitions for only the props that
// actually get referenced.
//
// Everything mapped below is an EXACT match to Tailwind's own default, so this
// changes where a value comes from, not what it computes to:
//   --size-1 .25rem = spacing 1      --size-6 1.75rem = spacing 7
//   --size-2  .5rem = spacing 2      --size-7    2rem = spacing 8
//   --size-3   1rem = spacing 4      --size-8    3rem = spacing 12
//   --size-4 1.25rem = spacing 5     --size-9    4rem = spacing 16
//   --size-5  1.5rem = spacing 6     --size-10   5rem = spacing 20
//
// Tailwind keys with no Open Props equivalent (3, 9, 10, 14, 24, …) are left
// alone and keep their Tailwind defaults — `extend` merges rather than replaces.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        1: 'var(--size-1)',
        2: 'var(--size-2)',
        4: 'var(--size-3)',
        5: 'var(--size-4)',
        6: 'var(--size-5)',
        7: 'var(--size-6)',
        8: 'var(--size-7)',
        12: 'var(--size-8)',
        16: 'var(--size-9)',
        20: 'var(--size-10)',
      },

      borderRadius: {
        // 1rem — exact match for Tailwind's rounded-2xl
        '2xl': 'var(--radius-3)',
        // Open Props' remaining radii, as additive keys (rounded-op-1 …)
        'op-1': 'var(--radius-1)',
        'op-2': 'var(--radius-2)',
        'op-3': 'var(--radius-3)',
        'op-4': 'var(--radius-4)',
        'op-5': 'var(--radius-5)',
        'op-6': 'var(--radius-6)',
      },

      // Open Props easings have no Tailwind equivalent — purely additive
      // (ease-op-2 … ease-op-5). Nothing existing changes.
      transitionTimingFunction: {
        'op-2': 'var(--ease-2)',
        'op-3': 'var(--ease-3)',
        'op-4': 'var(--ease-4)',
        'op-5': 'var(--ease-5)',
      },
    },
  },
  plugins: [],
}

// Deliberately NOT remapped: fontSize. Tailwind's fontSize entries are
// [size, lineHeight] tuples (text-sm pairs .875rem with 1.25rem, not 1.5×).
// Replacing them with a bare var() silently drops the paired line-height and
// shifts text metrics across the app. If you want Open Props font sizes later,
// they have to be written as tuples: ['var(--font-size-1)', '1.5rem'].
