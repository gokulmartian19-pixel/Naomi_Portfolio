export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-header-wrap">
        <h1 className="hidden">Naomi Sanchez</h1>

        <div className="hero-gif-wrap">
          <img
            src="/assets/images/hero/copy_A4E1A51F-C00E-4741-B61C-DBE5612E8870.gif"
            alt="Animated Naomi portfolio banner"
            className="hero-gif"
          />
        </div>

        <div className="hero-title-container">
          <div className="hero-wordmark-wrap">
            <div className="hero-wordmark-inner">
              <span className="hero-wordmark-text">NAOMI</span>
            </div>
          </div>
          <div className="hero-wordmark-wrap">
            <div className="hero-wordmark-inner">
              <span className="hero-wordmark-text">SANCHEZ</span>
            </div>
          </div>
        </div>

        <div className="hero-tagline-container">
          <div className="hero-tagline-row">
            <div className="hero-tagline-mask hero-tagline-left">
              <p className="hero-tagline-text">Content Creation &amp; Digital Storytelling</p>
            </div>

            <div className="hero-star-wrap">
              <div className="hero-star-inner">
                <img src="/assets/images/icons/star.svg" alt="star" className="hero-star-img" />
              </div>
            </div>

            <div className="hero-tagline-mask hero-tagline-right">
              <p className="hero-tagline-serif">Scaling brands reach and impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
