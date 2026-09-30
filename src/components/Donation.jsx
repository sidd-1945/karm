import { useState } from 'react'
import Modal from './Modal'
import './Donation.css'

const Donation = () => {
  const presets = [500, 1000, 2000, 5000]
  const [selectedAmount, setSelectedAmount] = useState(500)
  const [isCustom, setIsCustom] = useState(false)
  const [customValue, setCustomValue] = useState('')

  const [method, setMethod] = useState('upi')

  const [confirmOpen, setConfirmOpen] = useState(false)

  const methods = [
    {
      id: 'upi',
      label: 'UPI',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 1.5L7 22.5"></path>
          <path d="M3 8h18"></path>
          <path d="M3 16h18"></path>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
    },
    {
      id: 'card',
      label: 'Card',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      ),
    },
    {
      id: 'netbanking',
      label: 'Net Banking',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18"></path>
          <path d="M5 21V10l7-6 7 6v11"></path>
          <path d="M8 21v-6"></path>
          <path d="M12 21v-6"></path>
          <path d="M16 21v-6"></path>
        </svg>
      ),
    },
    {
      id: 'wallet',
      label: 'Wallet',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
          <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"></path>
        </svg>
      ),
    },
  ]

  const handlePreset = (val) => {
    setSelectedAmount(val)
    setIsCustom(false)
    setCustomValue('')
  }

  const handleCustom = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '')
    setCustomValue(val)
    setIsCustom(true)
    setSelectedAmount(val ? Number(val) : 0)
  }

  const displayAmount = () => {
    if (isCustom && customValue) return Number(customValue).toLocaleString('en-IN')
    if (!isCustom) return selectedAmount.toLocaleString('en-IN')
    return '0'
  }

  const canDonate = isCustom ? customValue && Number(customValue) > 0 : true

  const handleDonate = () => {
    if (!canDonate) return
    setConfirmOpen(true)
  }

  return (
    <section id="donation" className="section-alt donation-section">
      <div className="container">
        <div className="donation-section__header">
          <span className="section-label">Make an Impact</span>
          <h2 className="donation-section__title">Make an Impact</h2>
          <p className="donation-section__subtitle">Help us create meaningful change.</p>
        </div>

        <div className="donation-card">
          <div className="donation-card__left">
            <div className="donation-step">
              <span className="donation-step__num">1</span>
              <h4 className="donation-step__title">Choose an amount</h4>
            </div>

            <div className="amount-grid">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`amount-chip ${!isCustom && selectedAmount === p ? 'is-selected' : ''}`}
                  onClick={() => handlePreset(p)}
                >
                  ₹{p.toLocaleString('en-IN')}
                </button>
              ))}
              <button
                type="button"
                className={`amount-chip amount-chip--custom ${isCustom ? 'is-selected' : ''}`}
                onClick={() => {
                  setIsCustom(true)
                  setSelectedAmount(0)
                }}
              >
                Custom
              </button>
            </div>

            {isCustom && (
              <div className="custom-input">
                <span className="custom-input__prefix">₹</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter custom amount"
                  value={customValue}
                  onChange={handleCustom}
                  autoFocus
                />
              </div>
            )}

            <div className="donation-step donation-step--2">
              <span className="donation-step__num">2</span>
              <h4 className="donation-step__title">Choose a payment method</h4>
            </div>

            <div className="method-grid">
              {methods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={`method-card ${method === m.id ? 'is-selected' : ''}`}
                  onClick={() => setMethod(m.id)}
                >
                  <span className="method-card__icon">{m.icon}</span>
                  <span className="method-card__label">{m.label}</span>
                </button>
              ))}
            </div>

            {method === 'upi' && (
              <div className="upi-hint" role="note">
                <div className="upi-hint__row upi-hint__row--head">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                  Pay easily using your preferred UPI app
                </div>
                <div className="upi-hint__row upi-hint__row--sub">
                  Google Pay / PhonePe / Paytm / BHIM / etc.
                </div>
              </div>
            )}
          </div>

          <div className="donation-card__right">
            <div className="summary-card">
              <h4 className="summary-card__title">Your Donation</h4>
              <div className="summary-card__amount-row">
                <span>Amount</span>
                <span className="summary-card__amount">₹{displayAmount()}</span>
              </div>
              <div className="summary-card__method-row">
                <span>Method</span>
                <span className="summary-card__method">
                  {methods.find((m) => m.id === method)?.label ?? method}
                </span>
              </div>
              <div className="summary-card__divider" aria-hidden="true"></div>
              <div className="summary-card__total-row">
                <span>Total</span>
                <span className="summary-card__total">₹{displayAmount()}</span>
              </div>

              <p className="summary-card__note">
                Demo payment interface — no real transaction is processed.
              </p>

              <button
                type="button"
                className="btn btn-primary btn-lg donate-btn"
                onClick={handleDonate}
                disabled={!canDonate}
              >
                Donate Now →
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Thank you for your donation"
        accent="primary"
        size="sm"
      >
        <div className="donate-confirm">
          <div className="donate-confirm__icon" aria-hidden="true">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <p className="donate-confirm__amount">
            Amount: <strong>₹{displayAmount()}</strong> via{' '}
            <strong>{methods.find((m) => m.id === method)?.label ?? method}</strong>
          </p>
          <p className="donate-confirm__line donate-confirm__line--primary">
            This is a demonstration website. No real payment has been processed.
          </p>
          <p className="donate-confirm__line donate-confirm__line--sub">
            Demo payment interface — no real transaction is processed.
          </p>
          <button
            type="button"
            className="btn btn-primary donate-confirm__btn"
            onClick={() => setConfirmOpen(false)}
          >
            Got it
          </button>
        </div>
      </Modal>
    </section>
  )
}

export default Donation
