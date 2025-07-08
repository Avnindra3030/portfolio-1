import { useState } from 'react';
import emailjs from 'emailjs-com';
// Confetti animation (simple SVG burst)
function Confetti() {
  return (
    <div className="confetti-animation" aria-label="Success confetti">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <g>
          <circle cx="40" cy="40" r="6" fill="#22c55e" />
          <circle cx="15" cy="20" r="3" fill="#fbbf24" />
          <circle cx="65" cy="25" r="3" fill="#3b82f6" />
          <circle cx="20" cy="60" r="2.5" fill="#ef4444" />
          <circle cx="60" cy="60" r="2.5" fill="#a21caf" />
          <circle cx="10" cy="40" r="2" fill="#f59e42" />
          <circle cx="70" cy="50" r="2" fill="#10b981" />
        </g>
      </svg>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', website: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);
    // Honeypot: if website field is filled, treat as spam and do nothing
    if (form.website) {
      setError('Spam detected. Submission blocked.');
      return;
    }
    emailjs.send(
      'service_ho0jdej',
      'template_sry4bbx',
      {
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message,
        time: new Date().toLocaleString(),
      },
      'IDvoWfssXedPkT7Ov'
    )
    .then(
      (result) => {
        setSubmitted(true);
        setForm({ name: '', email: '', company: '', message: '', website: '' });
      },
      (error) => {
        setError('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:avnindrasingh.dev@gmail.com" className="contact-link">
                    avnindrasingh.dev@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+917572073397" className="contact-link">
                    +91 7572073397
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <span className="contact-text">
                    Gurugram, Sector 15 Part 1, 122001
                  </span>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">💻</div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a href="https://github.com/Avnindra3030" target="_blank" rel="noopener noreferrer" className="contact-link">
                    github.com/Avnindra3030
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="contact-form-title">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Honeypot field (hidden from users) */}
              <div style={{ display: 'none' }}>
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex="-1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company" className="form-label">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Company or Organization (optional)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <span className="btn-icon">→</span>
              </button>
              {submitted && (
                <div className="success-message">
                  <Confetti />
                  <span className="success-icon">✓</span>
                  <span>Thank you! I'll get back to you soon.</span>
                </div>
              )}
              {error && (
                <div className="success-message" style={{ background: 'rgba(239,68,68,0.2)', color: '#ef4444', border: '1px solid #ef4444' }}>
                  <span className="success-icon">!</span>
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 