import { useState } from 'react'
import { ClipboardText } from '@phosphor-icons/react'
import { generators } from '../generators'

const BULK_OPTIONS = [
  {
    group: 'People & Contact',
    options: [
      { value: 'names', label: 'Full Name' },
      { value: 'jobTitle', label: 'Job Title' },
      { value: 'funJobTitle', label: 'Fun Job Title' },
      { value: 'username', label: 'Username' },
      { value: 'personalEmails', label: 'Personal Email' },
      { value: 'workEmails', label: 'Work Email' },
      { value: 'phones', label: 'Phone Number' },
      { value: 'addresses', label: 'Full Address' },
    ],
  },
  {
    group: 'Business & Apps',
    options: [
      { value: 'organizations', label: 'Organization Name' },
      { value: 'apps', label: 'App Name' },
      { value: 'statusLabel', label: 'Status Label' },
      { value: 'url', label: 'URL' },
    ],
  },
  {
    group: 'Laptops & Assets',
    options: [
      { value: 'mac', label: 'Mac Device' },
      { value: 'windows', label: 'Windows Device' },
      { value: 'assets', label: 'Asset Name' },
      { value: 'serials', label: 'Serial #' },
      { value: 'ups', label: 'UPS Tracking #' },
      { value: 'fedex', label: 'FedEx Tracking #' },
    ],
  },
  {
    group: 'Dates & Times',
    options: [
      { value: 'shortDate', label: 'Short Date (MM/DD/YYYY)' },
      { value: 'abbrDate', label: 'Abbr Date (Jan 1, 2026)' },
      { value: 'longDate', label: 'Long Date' },
    ],
  },
  {
    group: 'Payment & Numbers',
    options: [
      { value: 'creditCard', label: 'Credit Card' },
      { value: 'cardExpiryCvv', label: 'Expiry + CVV' },
      { value: 'orderId', label: 'Order / Transaction ID' },
    ],
  },
  {
    group: 'Network',
    options: [
      { value: 'ipv4', label: 'IPv4 Address' },
      { value: 'ipv6', label: 'IPv6 Address' },
      { value: 'macAddress', label: 'MAC Address' },
      { value: 'uuid', label: 'UUID (v4)' },
    ],
  },
]

const MAX_COUNT = 500

export default function BulkGenerator() {
  const [type, setType] = useState('names')
  const [count, setCount] = useState(10)
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  // NaN (empty field) compares false, so a cleared input reads as neutral, not invalid.
  const outOfRange = count > MAX_COUNT || count < 1

  function generateBulk() {
    const fn = generators[type]
    if (!fn) return
    // Empty field falls back to the default; any real number clamps into 1–MAX_COUNT.
    const n = Number.isNaN(count) ? 10 : Math.min(MAX_COUNT, Math.max(1, count))
    const lines = Array.from({ length: n }, () => fn())
    setOutput(lines.join('\n'))
    setCopied(false)
  }

  function copyBulk() {
    if (!output || output === '') return
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div
      className="px-8 py-8"
      style={{ background: 'var(--panel)', borderBottom: '1px solid var(--border)', '--accent': 'var(--purple)' }}
    >
      <div className="text-xl font-extrabold mb-5 flex items-center gap-3 display" style={{ color: 'var(--ink)' }}>
        <span className="icon-chip"><ClipboardText size={22} weight="bold" /></span>
        <span>
          Bulk Generator{' '}
          <span className="text-sm font-bold opacity-55">(max {MAX_COUNT})</span>
        </span>
      </div>

      <div className="flex gap-4 items-center mb-5 flex-wrap">
        <select
          className="field bulk-select"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          {BULK_OPTIONS.map(group => (
            <optgroup key={group.group} label={group.group}>
              {group.options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </optgroup>
          ))}
        </select>

        <input
          type="number"
          value={Number.isNaN(count) ? '' : count}
          onChange={e => setCount(parseInt(e.target.value, 10))}
          min="1"
          max={MAX_COUNT}
          placeholder="Count"
          aria-invalid={outOfRange}
          className={`field px-4 py-2.5 text-base w-24 ${outOfRange ? 'invalid' : ''}`}
        />

        <button onClick={generateBulk} className="btn-chunky px-6 py-3 text-base">
          Generate Bulk
        </button>

        <button onClick={copyBulk} className="btn-chunky px-6 py-3 text-base" style={{ '--accent': 'var(--lime)' }}>
          Copy All
        </button>
      </div>

      <div
        className={`bulk-output output-box px-5 py-5 text-base min-h-[150px] max-h-[300px] ${output ? 'has-value' : ''} ${copied ? 'copied' : ''}`}
        onClick={copyBulk}
      >
        {output || 'Select a type and count, then click Generate Bulk'}
      </div>

      {output && (
        <div className={`copy-hint ${copied ? 'done' : ''}`}>
          {copied ? '✓ Copied all!' : 'Click box to copy all'}
        </div>
      )}
    </div>
  )
}
