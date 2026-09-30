import './Updates.css'

const Updates = () => {
  const articles = [
    {
      tag: 'Community',
      date: 'September 15, 2026',
      title: 'KARM Launches 50th Community Kitchen Across Districts',
      excerpt: 'Our latest community kitchen was inaugurated last week, serving nutritious meals to over 400 low-income families each day with the help of local volunteers.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Inauguration%20ceremony%20of%20community%20kitchen%20with%20volunteers%20beneficiaries%2C%20ribbon%20cutting%2C%20Seva%20program%2C%20happy%20crowd%2C%20event%20photography&image_size=landscape_4_3',
      author: 'KARM Team',
      readTime: '4 min read',
    },
    {
      tag: 'Environment',
      date: 'August 28, 2026',
      title: 'Green Steps Initiative Plants 15,000th Sapling in Urban Drive',
      excerpt: 'This month we crossed a major milestone as volunteers from 20 schools and 15 RWAs came together to plant saplings across 12 city neighborhoods.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Aerial%20shot%20of%20hundreds%20of%20volunteers%20planting%20rows%20of%20saplings%20in%20large%20open%20urban%20ground%2C%20Prakriti%20environment%20drive%2C%20green%20lush%20landscape%2C%20drone%20view&image_size=landscape_4_3',
      author: 'Priya Sharma',
      readTime: '5 min read',
    },
    {
      tag: 'Education',
      date: 'August 10, 2026',
      title: 'Learn Forward Centers Now Benefit 800+ Students Weekly',
      excerpt: 'Our after-school learning hubs continue to grow, with new digital literacy modules and scholarships bridging learning gaps for students in classes 6 through 12.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Rows%20of%20focused%20students%20in%20bright%20computer%20learning%20center%2C%20BachpanShala%20education%20initiative%2C%20laptops%20books%2C%20digital%20literacy%20class%2C%20cheerful&image_size=landscape_4_3',
      author: 'Arjun Mehta',
      readTime: '3 min read',
    },
  ]

  return (
    <section id="updates" className="section updates">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Updates & Stories</span>
          <h2 className="section-title">Latest From Our Community</h2>
          <p className="section-subtitle">
            News, milestones, and stories from the ground — stay connected with the impact you help create.
          </p>
        </div>

        <div className="grid grid-3 updates__grid">
          {articles.map((a, i) => (
            <article key={i} className="update-card">
              <a href="#" className="update-card__media">
                <img src={a.image} alt={a.title} loading="lazy" />
                <span className="update-card__tag">{a.tag}</span>
              </a>
              <div className="update-card__body">
                <div className="update-card__meta">
                  <span className="update-card__date">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    {a.date}
                  </span>
                  <span className="update-card__read">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {a.readTime}
                  </span>
                </div>
                <h3 className="update-card__title">
                  <a href="#">{a.title}</a>
                </h3>
                <p className="update-card__excerpt">{a.excerpt}</p>
                <div className="update-card__footer">
                  <span className="update-card__author">By {a.author}</span>
                  <a href="#" className="update-card__more">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Updates
