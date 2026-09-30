import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img
          src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Diverse%20community%20volunteers%20of%20all%20ages%20working%20together%20in%20a%20sunlit%20urban%20garden%2C%20planting%20trees%2C%20children%20learning%2C%20caring%20warm%20atmosphere%2C%20professional%20documentary%20photography%2C%20golden%20hour%20sunlight%2C%20hope%20and%20unity%20theme&image_size=landscape_16_9"
          alt=""
        />
        <div className="hero__overlay"></div>
        <div className="hero__pattern" aria-hidden="true"></div>
      </div>
      <div className="container hero__content">
        <div className="hero__inner">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot"></span>
            NGO &amp; Social Impact Platform
          </span>
          <h1 className="hero__title">
            Small Actions.<br />
            <span className="hero__title-accent">Meaningful Change.</span>
          </h1>
          <p className="hero__description">
            Together, we can create opportunities, strengthen communities, and build a more sustainable future.
          </p>
          <div className="hero__actions">
            <a href="#donation" className="btn btn-primary btn-lg hero__cta-main">
              Donate Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </a>
            <a href="#get-involved" className="btn btn-secondary btn-lg hero__cta-alt">
              Get Involved
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">6</span>
              <span className="hero__stat-label">Focus Areas</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">50+</span>
              <span className="hero__stat-label">Activities</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">1.2K+</span>
              <span className="hero__stat-label">Members</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">25+</span>
              <span className="hero__stat-label">Initiatives</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-wheel">
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
