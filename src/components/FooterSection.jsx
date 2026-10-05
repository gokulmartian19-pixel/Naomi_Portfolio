import { footerLinks } from '../data/portfolioData'

export default function FooterSection({ timeLabel, onOpenContact }) {
  const timeParts = timeLabel.split(' ')

  return (
    <section id="footer" className="footer-wrap">
      <footer className="site-footer">
        <div className="footer-top-row">
          <p className="footer-meta-text">Los Angeles, CA</p>
          <p id="footerClock" className="footer-meta-text">
            <span>{timeParts[0]}</span>
            <span className="blink-animation">:</span>
            <span>{timeParts[1]}</span>
            <span> {timeParts[2]}</span>
          </p>
        </div>

        <div className="footer-center">
          <h2 className="footer-hero-cta">
            Let&apos;s work <span>together!</span>
          </h2>

          <div className="footer-mobile-cta-group">
            <a href="mailto:naomi.sanchez@example.com" className="footer-email-card">
              <p className="footer-email-label">Email me</p>
              <p className="footer-email-val">naomi.sanchez@example.com</p>
            </a>
            <button id="footerMsgBtn" className="footer-send-btn" type="button" onClick={onOpenContact}>
              <p className="footer-send-text">Send me a message</p>
            </button>
          </div>
        </div>

        <div className="footer-bottom-mobile">
          <ul className="footer-social-col">
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer-social-link-mob">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="footer-social-link-mob">
                YouTube
              </a>
            </li>
          </ul>
          <p className="footer-copy-mob">©2026 Naomi Sanchez</p>
          <ul className="footer-social-col" style={{ alignItems: 'flex-end' }}>
            <li>
              <a href="https://unsplash.com/" target="_blank" rel="noreferrer" className="footer-social-link-mob">
                Unsplash
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="footer-social-link-mob">
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom-desktop">
          <p className="footer-desktop-copy">©2026 Naomi Sanchez</p>

          <ul style={{ display: 'flex', gap: '1rem' }}>
            {footerLinks.map((item) => (
              <li key={item}>
                <a
                  href={item === 'Instagram' ? 'https://www.instagram.com/' : item === 'YouTube' ? 'https://www.youtube.com/' : item === 'Unsplash' ? 'https://unsplash.com/' : 'https://www.tiktok.com/'}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-pill-link"
                >
                  <div className="footer-pill-roller-box">
                    <div className="footer-pill-roller">
                      <span className="footer-pill-text">{item}</span>
                      <span className="footer-pill-text">{item}</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </section>
  )
}
