import './Gallery.css'

const Gallery = () => {
  const images = [
    {
      src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Children%20celebrating%20education%20day%20event%2C%20colorful%20balloons%2C%20happy%20faces%2C%20school%20celebration%2C%20professional%20event%20photography&image_size=square_hd',
      title: 'Annual Education Day',
      category: 'BachpanShala',
    },
    {
      src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Large%20group%20of%20volunteers%20holding%20planted%20saplings%2C%20massive%20tree%20plantation%20drive%2C%20green%20park%2C%20environment%20day%2C%20wide%20angle&image_size=landscape_4_3',
      title: 'Mega Plantation Drive',
      category: 'Prakriti',
    },
    {
      src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Women%20in%20self%20help%20group%20meeting%20around%20table%2C%20savings%20microfinance%20discussion%2C%20rural%20empowerment%2C%20warm%20sunlight%2C%20close%20knit&image_size=square_hd',
      title: 'SHG Empowerment Meet',
      category: 'Udaan',
    },
    {
      src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Doctor%20volunteers%20at%20free%20medical%20health%20camp%2C%20patient%20checkup%20stethoscope%2C%20community%20healthcare%20outreach%2C%20clinical%20setting&image_size=square_hd',
      title: 'Health Camp Outreach',
      category: 'Healthcare',
    },
    {
      src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Volunteers%20serving%20hot%20meals%20to%20needy%20at%20community%20kitchen%2C%20food%20distribution%2C%20warm%20atmosphere%2C%20Seva%20charity%20work&image_size=landscape_4_3',
      title: 'Community Kitchen',
      category: 'Seva',
    },
    {
      src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Young%20trainees%20in%20modern%20computer%20lab%2C%20skill%20development%20training%2C%20typing%20keyboards%2C%20focused%20learning%2C%20Vikas%20program&image_size=square_hd',
      title: 'IT Skill Workshop',
      category: 'Vikas',
    },
    {
      src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Youth%20group%20playing%20sports%20on%20local%20ground%2C%20football%20match%2C%20Youth%20sports%20day%2C%20energetic%20outdoor%20activity%2C%20team%20spirit&image_size=landscape_4_3',
      title: 'Youth Sports Day',
      category: 'Udaan',
    },
    {
      src: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Volunteer%20feeding%20caring%20for%20rescued%20stray%20dogs%20at%20animal%20shelter%2C%20Jeev%20animal%20welfare%2C%20compassion%20care%2C%20warm%20tones&image_size=square_hd',
      title: 'Animal Rescue Drive',
      category: 'Jeev',
    },
  ]

  return (
    <section id="gallery" className="section section-alt gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Moments of Impact</h2>
          <p className="section-subtitle">
            Glimpses from our community events, drives, and programs across every cause we champion.
          </p>
        </div>

        <div className="gallery__grid">
          {images.map((img, i) => (
            <figure
              key={i}
              className={`gallery__item gallery__item--${(i % 4) + 1}`}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <figcaption className="gallery__caption">
                <span className="gallery__cat">{img.category}</span>
                <h4 className="gallery__title">{img.title}</h4>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
