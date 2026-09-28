export default function ContactDrawer({
  isDrawerOpen,
  onClose,
  selectedServices,
  selectedBudget,
  isSubmitted,
  onToggleService,
  onSelectBudget,
  onSubmit,
}) {
  return (
    <>
      <div className={`modal-backdrop ${isDrawerOpen ? 'open' : ''}`} onClick={onClose}></div>

      <div className={`modal-drawer ${isDrawerOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="contactTitle">
        <button id="closeContactBtn" className="modal-close-btn" type="button" aria-label="Close contact drawer" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-content-container">
          <h2 id="contactTitle" className="modal-title">
            <span className="pink-accent">Get in</span> <span className="dark-accent">touch</span>
          </h2>

          <form id="contactForm" className="contact-form" onSubmit={onSubmit}>
            <div className="form-row-1">
              <div className="form-input-card">
                <label htmlFor="name" className="form-label">Full name</label>
                <input type="text" id="name" name="name" placeholder="Naomi Sanchez" className="form-input" required />
              </div>

              <div className="form-input-card">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" placeholder="naomi@example.com" className="form-input" required />
              </div>

              <div className="form-input-card">
                <label htmlFor="company" className="form-label">Company</label>
                <input type="text" id="company" name="company" placeholder="Studio Brand" className="form-input" />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-textarea-card">
                <label htmlFor="message" className="form-label" style={{ marginBottom: '0.5rem' }}>
                  Project details
                </label>
                <textarea id="message" name="message" placeholder="Tell me your goals" className="form-textarea" required />
              </div>

              <div className="form-options-card">
                <p className="form-label">What can I do for you?</p>
                <div id="servicesPills" className="pills-list">
                  {['UGC', 'Brand Photography', 'Short-Form Video', 'Content Strategy', 'Identity', 'Account Management', 'Other'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill-option ${selectedServices.includes(item) ? 'selected' : ''}`}
                      onClick={() => onToggleService(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-options-card">
                <p className="form-label">Do you have a budget range?</p>
                <div id="budgetPills" className="pills-list">
                  {['Under $500', '$500-$1k', '$1k-$2.5k', '$2.5k-$5k', '$5k+'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill-option ${selectedBudget === item ? 'selected' : ''}`}
                      onClick={() => onSelectBudget(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-submit-row">
              <button id="formSubmitBtn" className="form-submit-btn" type="submit">
                <span>{isSubmitted ? 'Message Sent! Thank you ✨' : 'Send message'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                  <path d="M6.5 12h14.5" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
