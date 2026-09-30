import './QuickActions.css'

const QuickActions = () => {
  const actions = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      ),
      title: 'Make a Donation',
      description: 'Support our mission with a secure contribution.',
      href: '#donation',
      accent: true,
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      ),
      title: 'Become a Volunteer',
      description: 'Join hands and make a direct impact.',
      href: '#get-involved',
      accent: false,
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      ),
      title: 'Our Programs',
      description: 'Explore our 6 key cause areas.',
      href: '#causes',
      accent: false,
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      ),
      title: 'Contact Us',
      description: 'Reach out for partnerships or queries.',
      href: '#contact',
      accent: false,
    },
  ]

  return (
    <section className="quick-actions">
      <div className="container">
        <div className="grid grid-4 quick-actions__grid">
          {actions.map((action, i) => (
            <a key={i} href={action.href} className={`quick-action ${action.accent ? 'quick-action--accent' : ''}`}>
              <div className="quick-action__icon">{action.icon}</div>
              <h3 className="quick-action__title">{action.title}</h3>
              <p className="quick-action__desc">{action.description}</p>
              <span className="quick-action__arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickActions
