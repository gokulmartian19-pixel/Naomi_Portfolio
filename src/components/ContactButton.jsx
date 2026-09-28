export default function ContactButton({ onOpenContact }) {
  return (
    <button
      id="floatingContactBtn"
      className="floating-contact-btn"
      type="button"
      aria-label="Open contact form"
      onClick={onOpenContact}
    >
      <div className="floating-btn-avatar-wrap">
        <div className="floating-btn-avatar">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
            alt="Naomi Sanchez"
          />
        </div>
        <div className="floating-btn-icon-hover">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </div>
      </div>

      <div className="floating-btn-ticker-wrap">
        <div className="floating-btn-ticker">
          <span className="floating-btn-ticker-text">Contact</span>
          <span className="floating-btn-ticker-text">Contact</span>
        </div>
      </div>
    </button>
  )
}
