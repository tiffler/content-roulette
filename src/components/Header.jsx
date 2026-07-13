import { Moon, Sun, DiceThree } from '@phosphor-icons/react'

const GITHUB_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const FIGMA_SVG = (
  <svg width="12" height="17" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19 28.5C19 23.5 23.029 19.5 28 19.5C32.971 19.5 37 23.5 37 28.5C37 33.5 32.971 37.5 28 37.5C23.029 37.5 19 33.5 19 28.5Z" fill="#1ABCFE" />
    <path d="M1 47.5C1 42.5 5.029 38.5 10 38.5H19V47.5C19 52.5 14.971 56.5 10 56.5C5.029 56.5 1 52.5 1 47.5Z" fill="#0ACF83" />
    <path d="M19 0.5V19.5H28C32.971 19.5 37 15.5 37 10.5C37 5.5 32.971 1.5 28 1.5L19 0.5Z" fill="#FF7262" />
    <path d="M1 10.5C1 15.5 5.029 19.5 10 19.5H19V1.5H10C5.029 1.5 1 5.5 1 10.5Z" fill="#F24E1E" />
    <path d="M1 28.5C1 33.5 5.029 37.5 10 37.5H19V19.5H10C5.029 19.5 1 23.5 1 28.5Z" fill="#A259FF" />
  </svg>
)

export default function Header({ theme, onToggleTheme }) {
  return (
    <div
      className="text-center px-8 pt-10 pb-9 relative overflow-hidden"
      style={{
        background: 'var(--purple-deep)',
        borderBottom: '4px solid var(--border)',
        backgroundImage:
          'radial-gradient(rgba(255,255,255,0.10) 2px, transparent 2px)',
        backgroundSize: '26px 26px',
      }}
    >
      <button
        onClick={onToggleTheme}
        title="Toggle dark mode"
        aria-label="Toggle dark mode"
        className="hdr-btn absolute top-5 right-5 w-12 h-12 rounded-xl cursor-pointer flex items-center justify-center text-[#171717] text-xl"
        style={{ background: theme === 'dark' ? '#FCC717' : '#FBF3DE' }}
      >
        {theme === 'dark' ? <Sun weight="fill" /> : <Moon weight="fill" />}
      </button>

      <h1
        className="display text-5xl sm:text-6xl font-extrabold mb-3 text-[#FBF3DE] flex items-center justify-center gap-3 leading-none"
        style={{ textShadow: '3px 3px 0 #171717' }}
      >
        <span
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-[#171717]"
          style={{ background: '#FCC717', border: '3px solid #171717' }}
        >
          <DiceThree weight="fill" />
        </span>
        Content Roulette
      </h1>

      <p className="display text-lg font-bold text-[#FBF3DE] mb-3">Stop Lorem'ing your Ipsum</p>

      <p className="text-[#FBF3DE]/90 text-[14pt] font-bold mb-5">
        Randomly generate realistic mock data ·{' '}
        <a href="https://www.tienmedia.com" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-white">
          tiffler
        </a>
        {' '}&amp; her AI sidekick{' '}
        <a href="https://claude.com/product/claude-code" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-white">
          SYNT4X
        </a>
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="https://github.com/tiffler/content-roulette"
          target="_blank"
          rel="noopener"
          className="hdr-pill display inline-flex items-center gap-1.5 no-underline text-sm font-extrabold px-4 py-2 whitespace-nowrap"
        >
          {GITHUB_SVG} View on GitHub
        </a>
        <a
          href="https://www.figma.com/community/plugin/1603319090043870718/content-roulette"
          target="_blank"
          rel="noopener"
          className="hdr-pill display inline-flex items-center gap-1.5 no-underline text-sm font-extrabold px-4 py-2 whitespace-nowrap"
        >
          {FIGMA_SVG} Try the Figma plugin
        </a>
      </div>
    </div>
  )
}
