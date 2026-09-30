import { useState } from 'react'
import Modal from './Modal'
import './Causes.css'

const Causes = () => {
  const [openCause, setOpenCause] = useState(null)

  const causes = [
    {
      title: 'Seva',
      category: 'Community Support',
      description:
        'Strengthening local communities through food drives, relief programs, and neighborhood outreach.',
      longDescription:
        'The Seva initiative is KARM’s flagship community-support program, reaching underserved neighborhoods with consistent, compassionate action. Volunteers coordinate with local leaders to deliver essentials where they matter most — whether during a festival, a heatwave, or an ordinary weekday.',
      focus: [
        'Monthly food drives across 18 localities',
        'Emergency relief kits for vulnerable families',
        'Neighborhood outreach and local partnership',
      ],
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Community%20volunteers%20distributing%20food%20and%20supplies%20to%20needy%20families%2C%20warm%20caring%20atmosphere%2C%20diverse%20group%2C%20social%20welfare%2C%20professional%20documentary%20photography%2C%20natural%20light&image_size=landscape_4_3',
    },
    {
      title: 'BachpanShala',
      category: 'Education',
      description:
        'Quality learning resources, scholarships, and school support for underprivileged children.',
      longDescription:
        'BachpanShala believes every child deserves a classroom to call their own. We bridge gaps in access to books, teachers, and technology so that a child’s background does not determine their future.',
      focus: [
        'Free books and stationery kits for students',
        'Merit and needs-based scholarships',
        'After-school tuitions and digital classes',
      ],
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Young%20Indian%20children%20raising%20hands%20eagerly%20in%20a%20colorful%20classroom%2C%20books%20and%20learning%20materials%2C%20happy%20students%2C%20education%20for%20all%2C%20bright%20natural%20lighting&image_size=landscape_4_3',
    },
    {
      title: 'Jeev',
      category: 'Animal Welfare',
      description:
        'Rescuing, rehabilitating, and caring for stray animals with community compassion.',
      longDescription:
        'Jeev stands for every voiceless being on the street. We run rescue and medical camps, foster networks, and awareness drives to build kinder, safer neighborhoods for animals.',
      focus: [
        '24×7 rescue helpline and veterinary care',
        'Foster and adoption matchmaking',
        'Sterilization and vaccination drives',
      ],
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Volunteer%20gently%20caring%20for%20a%20rescued%20street%20dog%20at%20animal%20shelter%2C%20compassion%20and%20care%2C%20warm%20tones%2C%20professional%20animal%20welfare%20photography&image_size=landscape_4_3',
    },
    {
      title: 'Udaan',
      category: 'Women & Youth',
      description:
        'Empowering women and youth through mentorship, leadership, and safe spaces.',
      longDescription:
        'Udaan nurtures the next generation of changemakers — especially young women — through confidence-building, mentorship circles, and safe spaces where aspirations take flight.',
      focus: [
        'Mentorship circles with 120+ active mentors',
        'Life-skill and leadership workshops',
        'Safe-space meetups for girls and young women',
      ],
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Confident%20group%20of%20young%20Indian%20women%20and%20girls%20in%20a%20workshop%2C%20raising%20hands%2C%20leadership%20empowerment%2C%20bright%20hopeful%20atmosphere%2C%20professional%20photography&image_size=landscape_4_3',
    },
    {
      title: 'Prakriti',
      category: 'Environment',
      description:
        'Tree plantation drives, waste management, and ecological awareness for a greener planet.',
      longDescription:
        'Prakriti brings communities closer to nature — one sapling, one clean-up, one conversation at a time. We work with local bodies to make green action a sustained habit.',
      focus: [
        'Mass sapling plantation and native-species drives',
        'Zero-waste and clean-living awareness',
        'Lake and public-space restoration events',
      ],
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Hands%20planting%20young%20tree%20saplings%20in%20fertile%20soil%2C%20lush%20green%20community%20park%2C%20volunteers%2C%20environmental%20conservation%2C%20morning%20sunlight%2C%20eco%20theme&image_size=landscape_4_3',
    },
    {
      title: 'Vikas',
      category: 'Skill Development',
      description:
        'Vocational training and career guidance for economic independence and opportunity.',
      longDescription:
        'Vikas opens doors to dignified livelihoods through industry-aligned vocational training, career coaching, and placement support. The goal is not just a job but a sustainable career path.',
      focus: [
        'Certified vocational courses across 6 trades',
        'Career guidance and interview prep',
        'Placement linkages with local employers',
      ],
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Young%20adults%20learning%20computer%20and%20vocational%20skills%20in%20a%20modern%20training%20center%2C%20skill%20development%2C%20career%20training%2C%20focused%20students%2C%20professional%20environment&image_size=landscape_4_3',
    },
  ]

  const handleOpen = (e, cause) => {
    e.preventDefault()
    setOpenCause(cause)
  }

  const handleViewProjects = () => {
    setOpenCause(null)
    const target = document.querySelector('#projects')
    if (target) {
      const navH = 78
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12
      const prefersReduced =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' })
      history.replaceState(null, '', '#projects')
    }
  }

  return (
    <section id="causes" className="section section-alt causes">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Causes</span>
          <h2 className="section-title">Six Pillars of Impact</h2>
          <p className="section-subtitle">
            Every cause we champion is rooted in community need. Discover the
            focus areas driving our mission.
          </p>
        </div>

        <div className="grid grid-3 causes__grid">
          {causes.map((cause, i) => (
            <article key={i} className="cause-card">
              <div className="cause-card__media">
                <img
                  src={cause.image}
                  alt={`${cause.title} — ${cause.category}`}
                  loading="lazy"
                />
                <span className="cause-card__category">{cause.category}</span>
              </div>
              <div className="cause-card__body">
                <h3 className="cause-card__title">{cause.title}</h3>
                <p className="cause-card__desc">{cause.description}</p>
                <button
                  type="button"
                  className="cause-card__link"
                  onClick={(e) => handleOpen(e, cause)}
                  aria-label={`Learn more about ${cause.title}`}
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        isOpen={openCause !== null}
        onClose={() => setOpenCause(null)}
        title={openCause?.title ?? 'Cause'}
        accent="primary"
        size="md"
      >
        {openCause && (
          <div className="cause-modal">
            <span className="cause-modal__category">
              {openCause.category}
            </span>
            <p className="cause-modal__lead">{openCause.description}</p>
            <p className="cause-modal__long">{openCause.longDescription}</p>

            <h4 className="cause-modal__sub">Program focus</h4>
            <ul className="cause-modal__list">
              {openCause.focus.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="cause-modal__actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleViewProjects}
              >
                View Projects →
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setOpenCause(null)}
              >
                Close
              </button>
            </div>

            <p className="cause-modal__note">
              Sample program details for demonstration purposes only.
            </p>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Causes
