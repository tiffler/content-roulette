import { useState, useEffect } from 'react'
import Header from './components/Header'
import BulkGenerator from './components/BulkGenerator'
import GeneratorGrid from './components/GeneratorGrid'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(t => t === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="max-w-[1200px] mx-auto rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]" style={{ background: 'var(--card-bg)' }}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <BulkGenerator />
      <GeneratorGrid />
    </div>
  )
}
