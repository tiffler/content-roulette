import { useState } from 'react'
import { generators } from '../generators'

export default function GeneratorCard({ type, title, icon, label, subtitle, accent }) {
  const [output, setOutput] = useState(null)
  const [copied, setCopied] = useState(false)

  function generate() {
    setOutput(generators[type]())
    setCopied(false)
  }

  function copy() {
    if (!output) return
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div className="sticker p-5 flex flex-col" style={{ '--accent': accent }}>
      <div className="text-base font-extrabold mb-4 flex items-center gap-3 display" style={{ color: 'var(--ink)' }}>
        <span className="icon-chip">{icon}</span>
        <span className="leading-tight">
          {title}
          {subtitle && <small className="block text-[0.62em] font-bold opacity-55 tracking-wide -mt-0.5">{subtitle}</small>}
        </span>
      </div>

      <button onClick={generate} className="btn-chunky w-full py-3 px-5 text-base mb-4">
        {label}
      </button>

      <div
        className={`output-box px-4 py-4 text-sm min-h-[58px] flex items-center cursor-pointer break-all ${output ? 'has-value' : ''} ${copied ? 'copied' : ''}`}
        onClick={copy}
      >
        {output || 'Click Generate…'}
      </div>

      {output && (
        <div className={`copy-hint ${copied ? 'done' : ''}`}>
          {copied ? '✓ Copied!' : 'Click box to copy'}
        </div>
      )}
    </div>
  )
}
