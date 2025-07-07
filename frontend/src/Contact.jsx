import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would add email sending logic or API call
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
                  <span className="success-icon">✓</span>
                  <span>Thank you! I'll get back to you soon.</span>
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