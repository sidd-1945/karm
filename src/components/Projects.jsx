import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Learn Forward',
      cause: 'Education',
      tag: 'Ongoing',
      description: 'After-school learning centers supporting 800+ students with tutoring and digital literacy.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Children%20studying%20together%20in%20bright%20after%20school%20learning%20center%2C%20books%20and%20laptops%2C%20education%20initiative%2C%20happy%20faces%2C%20warm%20lighting&image_size=landscape_4_3',
      progress: 78,
    },
    {
      title: 'Green Steps',
      cause: 'Environment',
      tag: 'Active',
      description: 'City-wide plantation drive with 15,000+ saplings across 12 neighborhoods.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Volunteers%20of%20all%20ages%20planting%20trees%20along%20city%20sidewalks%2C%20green%20urban%20environment%2C%20environment%20drive%2C%20daylight%2C%20lush%20greenery&image_size=landscape_4_3',
      progress: 92,
    },
    {
      title: 'Community Care',
      cause: 'Community Support',
      tag: 'Ongoing',
      description: 'Monthly ration kits and meal programs supporting 400+ families and elders.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Volunteers%20packaging%20ration%20kits%20and%20meal%20packets%20for%20distribution%2C%20food%20bank%20community%20kitchen%2C%20organized%20space%2C%20charity%20work%2C%20warm%20atmosphere&image_size=landscape_4_3',
      progress: 65,
    },
    {
      title: 'Youth Rise',
      cause: 'Women & Youth',
      tag: 'Active',
      description: 'Leadership workshops and sports empowering 350+ young girls and boys.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Diverse%20young%20people%20in%20a%20circle%20doing%20team%20activity%2C%20youth%20leadership%20program%2C%20outdoors%2C%20confidence%20teamwork%2C%20vibrant%20mood&image_size=landscape_4_3',
      progress: 84,
    },
    {
      title: 'SkillBridge',
      cause: 'Skill Development',
      tag: 'New',
      description: 'Free vocational courses in IT, tailoring, and retail preparing youth for jobs.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Young%20adults%20in%20vocational%20training%20lab%20on%20computers%20and%20equipment%2C%20skill%20development%20center%2C%20focused%20learners%2C%20modern%20facility&image_size=landscape_4_3',
      progress: 45,
    },
    {
      title: 'Healthy Communities',
      cause: 'Healthcare',
      tag: 'Ongoing',
      description: 'Free health camps and immunization drives in underserved areas.',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Medical%20professional%20conducting%20free%20health%20checkup%20camp%20for%20community%2C%20doctor%20stethoscope%2C%20rural%20healthcare%2C%20caring%20atmosphere%2C%20daytime&image_size=landscape_4_3',
      progress: 72,
    },
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Projects</span>
          <h2 className="section-title">Initiatives in Motion</h2>
          <p className="section-subtitle">
            Active projects delivering measurable results on the ground. Each one is changing lives.
          </p>
        </div>

        <div className="grid grid-3 projects__grid">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              <div className="project-card__media">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className={`project-card__tag project-card__tag--${p.tag.toLowerCase()}`}>{p.tag}</span>
              </div>
              <div className="project-card__body">
                <span className="project-card__cause">{p.cause}</span>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__progress">
                  <div className="project-card__progress-bar">
                    <div className="project-card__progress-fill" style={{ width: `${p.progress}%` }}></div>
                  </div>
                  <div className="project-card__progress-meta">
                    <span>Progress</span>
                    <span className="project-card__progress-pct">{p.progress}%</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
