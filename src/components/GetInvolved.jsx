import './GetInvolved.css'

const GetInvolved = () => {
  const options = [
    {
      id: 'volunteer',
      title: 'Volunteer',
      subtitle: 'Give Your Time',
      description: 'Join our on-ground and virtual volunteer teams. Lend your skills, passion, and presence to create lasting change.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Smiling%20diverse%20volunteer%20team%20stacking%20hands%20together%2C%20unity%20teamwork%20theme%2C%20outdoor%20community%20service%2C%20warm%20lighting%2C%20professional%20photography&image_size=landscape_4_3',
      benefits: [
        'Flexible on-ground & remote roles',
        'Skill-based volunteer matching',
        'Certificate of appreciation',
        'Community networking events',
      ],
      cta: 'Apply as Volunteer',
      variant: 'primary',
    },
    {
      id: 'partner',
      title: 'Partner',
      subtitle: 'Collaborate With Us',
      description: 'Corporate partners, institutions, and NGOs — let us co-create impactful programs together.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Business%20professionals%20and%20NGO%20team%20shaking%20hands%20at%20partnership%20meeting%20table%2C%20documents%20laptops%2C%20professional%20corporate%20collaboration%2C%20modern%20bright%20office&image_size=landscape_4_3',
      benefits: [
        'CSR alignment & reporting',
        'Co-branded initiatives',
        'Employee engagement programs',
        'Shared impact measurement',
      ],
      cta: 'Become a Partner',
      variant: 'accent',
    },
    {
      id: 'support',
      title: 'Support',
      subtitle: 'Fund Our Mission',
      description: 'From one-time donations to monthly giving and legacy support, every gift fuels transformative programs.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Hands%20gently%20holding%20heart%20shape%20of%20coins%20currency%20notes%2C%20donation%20fundraising%20theme%2C%20soft%20warm%20tones%2C%20charity%20support%20concept%2C%20closeup%20shot&image_size=landscape_4_3',
      benefits: [
        'Secure tax-deductible giving',
        'Choice of cause allocation',
        'Quarterly impact updates',
        'Named recognition options',
      ],
      cta: 'Support Our Work',
      variant: 'secondary',
    },
  ]

  return (
    <section id="get-involved" className="section get-involved">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get Involved</span>
          <h2 className="section-title">Three Ways to Make Your Mark</h2>
          <p className="section-subtitle">
            Whether you give time, resources, or expertise — there is a meaningful role for everyone in the KARM community.
          </p>
        </div>

        <div className="grid grid-3 get-involved__grid">
          {options.map((opt) => (
            <article key={opt.id} className={`involve-card involve-card--${opt.variant}`}>
              <div className="involve-card__media">
                <img src={opt.image} alt={opt.title} loading="lazy" />
                <div className={`involve-card__badge involve-card__badge--${opt.variant}`}>
                  {opt.variant === 'primary' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  )}
                  {opt.variant === 'accent' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  )}
                  {opt.variant === 'secondary' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  )}
                </div>
              </div>
              <div className="involve-card__body">
                <span className={`involve-card__subtitle involve-card__subtitle--${opt.variant}`}>{opt.subtitle}</span>
                <h3 className="involve-card__title">{opt.title}</h3>
                <p className="involve-card__desc">{opt.description}</p>
                <ul className="involve-card__benefits">
                  {opt.benefits.map((b, i) => (
                    <li key={i}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={opt.id === 'support' ? '#donation' : '#contact'}
                  className={`btn involve-card__cta involve-card__cta--${opt.variant}`}
                >
                  {opt.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
