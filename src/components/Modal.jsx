import { useEffect } from 'react'
import './Modal.css'

const Modal = ({ isOpen, onClose, title, children, accent = 'primary', size = 'md' }) => {
  useEffect(() => {
    if (!isOpen) return

    const scrollY = window.scrollY
    document.body.classList.add('no-scroll')
    document.body.style.top = `-${scrollY}px`

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      const savedY = parseInt(document.body.style.top || '0', 10) * -1
      document.body.classList.remove('no-scroll')
      document.body.style.top = ''
      window.scrollTo(0, savedY || 0)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className={`modal-backdrop modal-backdrop--${accent}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className={`modal-dialog modal-dialog--${size}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {title && (
          <h3 id="modal-title" className="modal-title">{title}</h3>
        )}

        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
