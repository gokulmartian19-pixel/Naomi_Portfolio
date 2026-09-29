export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-header-wrap">
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
              <h1 className="hero-wordmark-text">NAOMI SANCHEZ</h1>
            </div>
          </div>
        </div>

        <div className="hero-tagline-container">
          <div className="hero-tagline-row">
            <div className="hero-tagline-mask hero-tagline-left">
              <p className="hero-tagline-text">Content Creator &amp; Storyteller</p>
            </div>

            <div className="hero-tagline-mask hero-tagline-right">
              <p className="hero-tagline-serif">Scaling brands&apos; reach &amp; impact</p>
            </div>
          </div>
        </div>

        <a className="hero-scroll-indicator" href="#services" aria-label="Scroll to services">
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
