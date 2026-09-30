import './About.css'

const About = () => {
  const values = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      ),
      title: 'Empathy',
      description: 'We listen deeply and act with compassion for every community we serve.',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg>
      ),
      title: 'Action',
      description: 'We turn ideas into measurable outcomes with urgency and dedication.',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      ),
      title: 'Sustainability',
      description: 'We build lasting solutions that empower communities for generations.',
    },
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-label">About KARM</span>
            <h2 className="section-title about__title">
              Building Bridges to a Brighter Future
            </h2>
            <p className="about__lead">
              KARM is a grassroots social impact platform dedicated to creating equitable opportunities across education, healthcare, environment, and community development.
            </p>
            <p className="about__text">
              We believe meaningful change starts at the community level. Through collaborative programs and local partnerships, we work alongside volunteers, donors, and stakeholders to deliver tangible, sustainable impact where it matters most.
            </p>

            <div className="about__values">
              {values.map((v, i) => (
                <div key={i} className="about__value">
                  <div className="about__value-icon">{v.icon}</div>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__visual">
            <div className="about__image-wrap about__image-primary">
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Group%20of%20happy%20young%20Indian%20school%20children%20in%20colorful%20uniforms%20reading%20books%20together%20in%20a%20bright%20cheerful%20classroom%2C%20caring%20teacher%2C%20education%20and%20hope%20theme%2C%20natural%20lighting%2C%20professional%20documentary%20photography&image_size=portrait_4_3"
                alt="Children learning in classroom"
                loading="lazy"
              />
            </div>
            <div className="about__image-wrap about__image-secondary">
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Diverse%20group%20of%20volunteers%20planting%20young%20saplings%20in%20an%20urban%20community%20garden%2C%20hands%20in%20soil%2C%20lush%20green%20environment%2C%20environmental%20conservation%2C%20warm%20morning%20sunlight%2C%20professional%20photography&image_size=square"
                alt="Volunteers planting trees"
                loading="lazy"
              />
            </div>
            <div className="about__badge">
              <div className="about__badge-num">6+</div>
              <div className="about__badge-label">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
