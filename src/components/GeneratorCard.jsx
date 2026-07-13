import { useState } from 'react'
import { generators } from '../generators'

export default function GeneratorCard({ type, title, icon, label, subtitle }) {
  const [output, setOutput] = useState(null)
  const [copied, setCopied] = useState(false)

  function generate() {
    setOutput(generators[type]())
  }

  function copy() {
    if (!output) return
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div
      className="p-6"
      style={{
        borderRight: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div
        className="text-lg font-semibold mb-4 flex items-center gap-2.5"
        style={{ color: 'var(--text-color)' }}
      >
        <span className="text-xl flex-shrink-0" style={{ color: 'var(--text-color)' }}>{icon}</span>
        {title}
        {subtitle && <small className="text-[0.68em] font-normal opacity-60">{subtitle}</small>}
      </div>

      <button
        onClick={generate}
        className="w-full py-3 px-6 rounded-lg text-base font-medium cursor-pointer transition-colors duration-200 mb-4 border-none"
        style={{ background: 'var(--btn-bg)', color: '#e8e0f5' }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--btn-bg-hover)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--btn-bg)'}
      >
        {label}
      </button>

      <div
        className="rounded-lg px-4 py-4 font-mono text-base min-h-[60px] flex items-center border-2 border-dashed cursor-pointer break-all"
        style={{
          background: output ? 'var(--output-success-bg)' : 'var(--output-bg)',
          borderColor: output ? 'var(--output-success-border)' : 'var(--border-light)',
          color: output ? 'var(--output-success-text)' : 'var(--text-secondary)',
        }}
        onClick={copy}
      >
        {output || 'Click to generate'}
      </div>

      <div className={`copy-notice ${copied ? 'show' : ''}`}>Copied!</div>
    </div>
  )
}
