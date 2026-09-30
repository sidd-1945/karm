import './Impact.css'

const Impact = () => {
  const stats = [
    {
      number: '2,500+',
      label: 'Learning Resources',
      description: 'Books, digital content, and teaching aids distributed.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      ),
    },
    {
      number: '1,200+',
      label: 'Community Members',
      description: 'Active volunteers, beneficiaries, and supporters.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      ),
    },
    {
      number: '50+',
      label: 'Community Activities',
      description: 'Drives, workshops, and events organized this year.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      ),
    },
    {
      number: '25+',
      label: 'Local Initiatives',
      description: 'Grassroots programs running across communities.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
      ),
    },
  ]

  return (
    <section id="impact" className="section section-alt impact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Impact</span>
          <h2 className="section-title">Numbers That Speak</h2>
          <p className="section-subtitle">
            Every figure represents a life touched, a community strengthened, and a step closer to a better world.
          </p>
        </div>

        <div className="grid grid-4 impact__grid">
          {stats.map((stat, i) => (
            <div key={i} className="impact-card">
              <div className="impact-card__icon">{stat.icon}</div>
              <div className="impact-card__number">{stat.number}</div>
              <div className="impact-card__label">{stat.label}</div>
              <p className="impact-card__desc">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="impact__note">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          Sample figures for demonstration purposes.
        </div>
      </div>
    </section>
  )
}

export default Impact
