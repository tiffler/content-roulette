import { DATA } from '../data.js'

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)] }
function pad2(n) { return n < 10 ? '0' + n : '' + n }
function randDigits(n) { return Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join('') }
function randAlpha(n) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}
function randLetters(n) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}
function randMixed(n) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

/* ── Checksums ──────────────────────────────────────────────────────────
   Several formats below carry real check digits, so generated values pass
   the same validation a genuine number would. */

// Luhn (ISO/IEC 7812) check digit for a number that does not yet include one.
// The rightmost existing digit sits in the doubled position of the final
// number, so parity is measured against length + 1.
function luhnCheckDigit(digits) {
  let sum = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits[i]
    if ((digits.length - i) % 2 === 1) { d *= 2; if (d > 9) d -= 9 }
    sum += d
  }
  return (10 - (sum % 10)) % 10
}

/* ── Reserved / test-only ranges ────────────────────────────────────────
   These exist so generated values can never collide with something real. */

// Test-only issuer prefixes published by the card networks and payment
// processors. They are not allocated to live issuers, so no real account can
// exist beneath them — the randomised tail stays safe no matter what it lands on.
const TEST_BINS = [
  { prefix: '411111', length: 16 },
  { prefix: '424242', length: 16 },
  { prefix: '400000', length: 16 },
  { prefix: '555555', length: 16 },
  { prefix: '510510', length: 16 },
  { prefix: '222100', length: 16 },
  { prefix: '378282', length: 15 },
  { prefix: '371449', length: 15 },
]

// Toll-free and N11 service codes are not valid geographic area codes.
const TOLL_FREE_AREA = new Set([800, 833, 844, 855, 866, 877, 888])
function areaCode() {
  let a
  do { a = 200 + Math.floor(Math.random() * 800) }
  while (a % 100 === 11 || a === 555 || TOLL_FREE_AREA.has(a))
  return a
}

export const generators = {
  names() {
    return `${pick(DATA.firstNames)} ${pick(DATA.lastNames)}`
  },

  funJobTitle() {
    const r = Math.random()
    if (r < 0.33) return pick(DATA.jobTitleFunnyModifiers) + ' ' + pick(DATA.jobTitleFunnyNouns) + ' ' + pick(DATA.jobTitleFunnyRoles)
    if (r < 0.66) return pick(DATA.jobTitleFunnyNouns) + ' ' + pick(DATA.jobTitleFunnyRoles)
    return pick(DATA.jobTitlePrefixes) + ' ' + pick(DATA.jobTitleFunnyNouns) + ' ' + pick(DATA.jobTitleFunnyRoles)
  },

  jobTitle() {
    const tier = Math.random()
    if (tier < 0.25) {
      const r = Math.random()
      if (r < 0.3) return 'VP of ' + pick(DATA.jobTitleVPDepts)
      if (r < 0.6) return 'Director of ' + pick(DATA.jobTitleDirectorDepts)
      if (r < 0.85) return 'Chief ' + pick(DATA.jobTitleChiefTitles)
      return pick(DATA.jobTitleExecutiveStandalone)
    }
    const parts = []
    const hasPrefix = Math.random() < 0.5
    if (hasPrefix) parts.push(pick(DATA.jobTitlePrefixes))
    parts.push(pick(DATA.jobTitleRoles))
    if (!hasPrefix && Math.random() < 0.25) parts.push(pick(DATA.jobTitleSuffixes))
    return parts.join(' ')
  },

  personalEmails() {
    const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z]/g, '')
    const first = norm(pick(DATA.firstNames))
    const last = norm(pick(DATA.lastNames))
    const sep = Math.random() < 0.5 ? '.' : ''
    const numD = Math.random() < 0.4 ? Math.floor(Math.random() * 4) + 1 : 0
    const suf = numD > 0 ? ('' + Math.floor(Math.random() * Math.pow(10, numD))).slice(0, numD).padStart(numD, '0') : ''
    return `${first}${sep}${last}${suf}@${pick(DATA.personalEmailDomains)}`
  },

  workEmails() {
    const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z]/g, '')
    const first = norm(pick(DATA.firstNames))
    const last = norm(pick(DATA.lastNames))
    const domain = `${pick(DATA.workEmailDomainNames)}.${pick(DATA.workEmailTLDs)}`
    const r = Math.random()
    const local = r < 0.4 ? `${first}.${last}` : r < 0.75 ? `${first}${last}` : `${first[0]}${last}`
    return `${local}@${domain}`
  },

  phones() {
    // NANPA permanently reserves 555-0100 … 555-0199 in every area code for
    // fictional use, and no carrier may assign them. Anything generated here
    // is therefore guaranteed not to reach a real person.
    const line = 100 + Math.floor(Math.random() * 100)
    return `(${areaCode()}) 555-0${line}`
  },

  username() {
    const adj = pick(DATA.usernameAdjectives)
    const noun = pick(DATA.usernameNouns)
    const num = Math.random() < 0.5 ? (Math.floor(Math.random() * 9000) + 10).toString() : ''
    const sr = Math.random()
    const sep = sr < 0.33 ? '_' : sr < 0.66 ? '.' : ''
    const h = `${adj}${sep}${noun}${num}`
    return Math.random() < 0.6 ? `@${h}` : h
  },

  addresses() {
    const digits = Math.floor(Math.random() * 5) + 1
    const min = digits === 1 ? 1 : Math.pow(10, digits - 1)
    const max = Math.pow(10, digits) - 1
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    const street = `${pick(DATA.streets)} ${pick(DATA.streetTypes)}`
    const zip = (Math.floor(Math.random() * 90000) + 10000).toString()
    return `${num} ${street}, ${pick(DATA.cities)}, ${pick(DATA.states)} ${zip}`
  },

  organizations() {
    const cnt = Math.floor(Math.random() * 2) + 1
    const used = new Set()
    const words = []
    while (words.length < cnt) {
      const w = pick(DATA.organizationNames)
      if (!used.has(w)) { used.add(w); words.push(w) }
    }
    words.push(pick(DATA.organizationTypes))
    return words.join(' ')
  },

  apps() {
    const wc = Math.floor(Math.random() * 3) + 2
    const words = []
    for (let i = 0; i < wc - 1; i++) {
      words.push(i === 0 ? pick(DATA.appNameAdjectives) : pick(DATA.appNameModifiers))
    }
    words.push(pick(DATA.appNameNouns))
    return words.join(' ')
  },

  statusLabel() {
    return pick(DATA.statusLabels)
  },

  url() {
    const sub = Math.random() < 0.7 ? pick(DATA.urlSubdomains) + '.' : ''
    const path = Math.random() < 0.75 ? '/' + pick(DATA.urlPaths) : ''
    let query = ''
    if (Math.random() < 0.25) {
      const pool = [
        ...DATA.urlQueryParams,
        'page=' + (Math.floor(Math.random() * 9) + 1),
        'limit=' + String(Math.floor(Math.random() * 90) + 10),
      ]
      const count = Math.random() < 0.5 ? 1 : 2
      const shuffled = pool.slice().sort(() => Math.random() - 0.5)
      query = '?' + shuffled.slice(0, count).join('&')
    }
    return `https://${sub}${pick(DATA.urlDomains)}.${pick(DATA.urlTLDs)}${path}${query}`
  },

  mac() {
    const device = pick(['MacBook', 'Apple MB', 'Apple Macbook', 'MB'])
    const model = pick(['Air', 'Pro'])
    const size = pick(['13"', '14"', '15"', '16"', '13-inch', '14-inch', '15-inch', '16-inch'])
    const cpu = pick(['M3', 'M4', 'M4 Pro', 'M4 Max', 'M3 Ultra', 'M4 Ultra'])
    const year = pick(['2024', '2025', '2026'])
    const storage = pick(['256GB', '512GB', '1TB', '2TB'])
    const ram = pick(['8GB', '16GB', '24GB', '32GB', '64GB', '128GB'])
    const color = pick(['Space Gray', 'Silver', 'Gold', 'Space Black', 'Midnight', 'Starlight'])
    switch (Math.floor(Math.random() * 6)) {
      case 0: return `${device} ${model} ${size}`
      case 1: return `${device} ${model} ${size} - ${cpu}`
      case 2: return `${device} ${model} ${size} - ${cpu} - (${year})`
      case 3: return `${device} ${model} ${size} ${cpu} (${year} - ${ram} RAM - ${storage} SSD)`
      case 4: return `${device} ${model} ${size} - ${cpu} - ${year} - ${ram} RAM - ${storage} SSD`
      case 5: return `${device} ${model} ${size} - ${cpu} - ${year} - ${ram} RAM - ${storage} SSD - ${color}`
      default: return `${device} ${model} ${size}`
    }
  },

  windows() {
    const base = pick(DATA.windowsDeviceBases)
    const size = Math.random() < 0.6 ? ' ' + pick(DATA.windowsDeviceSizes) : ''
    return base + size
  },

  assets() {
    const dc = Math.floor(Math.random() * 3)
    const words = [pick(DATA.assetBrands)]
    for (let i = 0; i < dc; i++) words.push(pick(DATA.assetDescriptors))
    words.push(pick(DATA.assetDeviceNouns))
    let label = words.join(' ')
    if (Math.random() < 0.5) {
      const l = 'ABCDEFGHJKLMNPRSTXZ'
      const ml = l[Math.floor(Math.random() * l.length)] + l[Math.floor(Math.random() * l.length)]
      const md = Math.floor(Math.random() * 9000 + 10) * (Math.random() < 0.5 ? 10 : 100)
      label += ` ${ml}${md}`
    }
    return label
  },

  serials() {
    return randAlpha(Math.floor(Math.random() * 9) + 8)
  },

  ups() {
    return `1Z${randAlpha(6)}${randDigits(8)}${Math.floor(Math.random() * 10)}`
  },

  fedex() {
    return randDigits(Math.random() < 0.5 ? 15 : 12)
  },

  shortDate() {
    const y = Math.floor(Math.random() * 11) + 2018
    const m = Math.floor(Math.random() * 12) + 1
    const d = Math.floor(Math.random() * 28) + 1
    return `${pad2(m)}/${pad2(d)}/${y}`
  },

  abbrDate() {
    const mo = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const y = Math.floor(Math.random() * 11) + 2018
    const m = Math.floor(Math.random() * 12)
    const d = Math.floor(Math.random() * 28) + 1
    return `${mo[m]} ${d}, ${y}`
  },

  longDate() {
    const mo = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const y = Math.floor(Math.random() * 11) + 2018
    const m = Math.floor(Math.random() * 12)
    const d = Math.floor(Math.random() * 28) + 1
    return `${mo[m]} ${d}, ${y}`
  },

  creditCard() {
    const bin = pick(TEST_BINS)
    const digits = bin.prefix.split('').map(Number)
    // Fill up to one short of the full length, then close with a real Luhn digit.
    while (digits.length < bin.length - 1) digits.push(Math.floor(Math.random() * 10))
    digits.push(luhnCheckDigit(digits))
    const s = digits.join('')
    // Amex groups 4-6-5; everyone else groups in fours.
    return s.length === 15
      ? `${s.slice(0, 4)} ${s.slice(4, 10)} ${s.slice(10)}`
      : s.replace(/(\d{4})(?=\d)/g, '$1 ')
  },

  cardExpiryCvv() {
    // Always 1–60 months out, so it never reads as an expired card.
    const d = new Date()
    d.setMonth(d.getMonth() + 1 + Math.floor(Math.random() * 60))
    // Amex uses a 4-digit CID; the other networks use 3.
    const cvv = Math.random() < 0.25 ? randDigits(4) : randDigits(3)
    return `${pad2(d.getMonth() + 1)}/${String(d.getFullYear()).slice(-2)} · ${cvv}`
  },

  orderId() {
    const year = new Date().getFullYear()
    const r = Math.random()
    if (r < 0.3) return `ORD-${year}-${randDigits(5)}`
    if (r < 0.5) return `INV-${year}-${randDigits(4)}`
    if (r < 0.7) return `#${randDigits(7)}`
    if (r < 0.85) return `txn_${randMixed(24)}`
    return `${randLetters(3)}-${randDigits(4)}-${randLetters(3)}`
  },

  ipv4() {
    const o = () => Math.floor(Math.random() * 254) + 1
    return `${o()}.${o()}.${Math.floor(Math.random() * 256)}.${o()}`
  },

  ipv6() {
    const hex = () => {
      let v = Math.floor(Math.random() * 0xffff).toString(16)
      while (v.length < 4) v = '0' + v
      return v
    }
    return Array.from({ length: 8 }, hex).join(':')
  },

  macAddress() {
    const h = () => {
      let v = Math.floor(Math.random() * 256).toString(16).toUpperCase()
      return v.length === 1 ? '0' + v : v
    }
    return Array.from({ length: 6 }, h).join(':')
  },

  uuid() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
    const b = new Uint8Array(16)
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      crypto.getRandomValues(b)
    } else {
      for (let i = 0; i < 16; i++) b[i] = Math.floor(Math.random() * 256)
    }
    b[6] = (b[6] & 0x0f) | 0x40 // version 4
    b[8] = (b[8] & 0x3f) | 0x80 // variant 10xx
    const hex = Array.from(b, v => v.toString(16).padStart(2, '0')).join('')
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
  },
}
