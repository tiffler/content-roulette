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
      { value: 'shortYearDate', label: 'Short Year (MM/DD/YY)' },
      { value: 'abbrDate', label: 'Abbr Date (Jan 1, 2026)' },
      { value: 'longDate', label: 'Long Date' },
      { value: 'timeValue', label: 'Time' },
    ],
  },
  {
    group: 'Payment & Numbers',
    options: [
      { value: 'creditCard', label: 'Credit Card' },
      { value: 'currency', label: 'Currency' },
      { value: 'percentage', label: 'Percentage' },
    ],
  },
  {
    group: 'Network',
    options: [
      { value: 'ipv4', label: 'IPv4 Address' },
      { value: 'ipv6', label: 'IPv6 Address' },
      { value: 'macAddress', label: 'MAC Address' },
    ],
  },
]

export default function BulkGenerator() {
  const [type, setType] = useState('names')
  const [count, setCount] = useState(10)
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  function generateBulk() {
    const fn = generators[type]
    if (!fn) return
    const lines = Array.from({ length: Math.max(1, count || 10) }, () => fn())
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
    <div className="px-8 py-8 border-b-4" style={{ background: 'var(--bulk-bg)', borderColor: 'var(--border-color)' }}>
      <div className="text-lg font-semibold mb-4 flex items-center gap-2.5" style={{ color: 'var(--text-color)' }}>
        <ClipboardText size={22} className="flex-shrink-0" style={{ color: 'var(--text-color)' }} />
        Bulk Generator
      </div>

      <div className="flex gap-4 items-center mb-5 flex-wrap">
        <select
          className="bulk-select"
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
          value={count}
          onChange={e => setCount(parseInt(e.target.value, 10))}
          min="1"
          max="100"
          placeholder="Count"
          className="px-4 py-2.5 rounded-md text-base w-24"
          style={{
            border: '2px solid var(--border-light)',
            background: 'var(--card-bg)',
            color: 'var(--text-color)',
          }}
        />

        <button
          onClick={generateBulk}
          className="px-6 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-colors duration-200"
          style={{ background: 'var(--btn-bg)', color: '#e8e0f5', border: 'none' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--btn-bg-hover)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--btn-bg)'}
        >
          Generate Bulk
        </button>

        <button
          onClick={copyBulk}
          className="px-6 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-colors duration-200 bg-green-600 hover:bg-green-700 text-white border-none"
        >
          Copy All
        </button>
      </div>

      <div
        className={`bulk-output px-5 py-5 rounded-lg font-mono text-base min-h-[150px] max-h-[300px] border-2 border-dashed ${copied ? 'border-emerald-500' : ''}`}
        style={{
          background: copied ? 'var(--output-success-bg)' : 'var(--input-field-bg)',
          borderColor: copied ? 'var(--output-success-border)' : 'var(--border-color)',
          color: copied ? 'var(--output-success-text)' : 'var(--text-secondary)',
        }}
        onClick={copyBulk}
      >
        {output || 'Select a type and count, then click Generate Bulk'}
      </div>
    </div>
  )
}
