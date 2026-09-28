export default function ServicesSection({ services }) {
  return (
    <section id="services" className="services-section">
      <h2 id="services-title" className="services-title">
        Services
      </h2>

      <div className="services-cards-stack">
        {services.map((service) => (
          <div className="service-card" id={service.cardId} key={service.name}>
            <div className="service-card-inner">
              <div className="service-card-header">
                <h3 className="service-card-name">{service.name}</h3>
                <p className="service-card-num">{service.number}</p>
              </div>

              <div className="service-card-body">
                <div className="service-card-info">
                  <p className="service-card-desc">{service.description}</p>
                  <ul className="service-card-tags">
                    {service.tags.map((tag) => (
                      <li className="service-tag" key={`${service.name}-${tag}`}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-media">
                  <img src={service.image} alt={service.name} className="service-card-img" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
