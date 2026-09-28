export default function AboutSection({ currentFact }) {
  return (
    <section id="about" className="about-section">
      <div className="about-intro-wrap">
        <p className="about-label">(About Naomi)</p>
        <p className="about-statement">
          I&apos;m a passionate marketing enthusiast driven by creativity and curiosity. While I&apos;m early in my professional journey, my love for marketing runs deep—from digital advertising to content creation. I thrive on spotting trends and bringing fresh perspectives to every project.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-photo-card">
          <div className="about-photo-inner">
            <img id="aboutPhotoImg" src={currentFact.image} alt="Naomi Sanchez" className="about-photo-img" />
          </div>
        </div>

        <div className="about-stat-card">
          <p id="aboutFactText" className="about-stat-text">
            {currentFact.description}
          </p>
          <div className="about-stat-number-wrap">
            <span id="aboutFactNumber">{currentFact.number}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
