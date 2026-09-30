import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileOpen) return undefined

    const scrollY = window.scrollY
    document.body.classList.add('no-scroll')
    document.body.style.top = `-${scrollY}px`

    const onKey = (e) => {
      if (e.key === 'Escape') setIsMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      const savedY = parseInt(document.body.style.top || '0', 10) * -1
      document.body.classList.remove('no-scroll')
      document.body.style.top = ''
      window.scrollTo(0, savedY || 0)
      window.removeEventListener('keydown', onKey)
    }
  }, [isMobileOpen])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Causes', href: '#causes' },
    { label: 'Projects', href: '#projects' },
    { label: 'Impact', href: '#impact' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ]

  const smoothGo = (hash) => (e) => {
    e.preventDefault()
    const target = document.querySelector(hash)
    setIsMobileOpen(false)
    if (target) {
      const navH = 78
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' })
      history.replaceState(null, '', hash)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} aria-label="Primary">
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={smoothGo('#home')}
          aria-label="KARM — go to home"
        >
          <span className="navbar__logo-mark" aria-hidden="true">K</span>
          <span className="navbar__logo-text">KARM</span>
        </a>

        <div
          className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}
          id="primary-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              onClick={smoothGo(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donation"
            className="btn btn-primary btn-sm navbar__cta"
            onClick={smoothGo('#donation')}
          >
            Donate
          </a>
        </div>

        <button
          type="button"
          className={`navbar__toggle ${isMobileOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setIsMobileOpen((v) => !v)}
          aria-controls="primary-menu"
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
