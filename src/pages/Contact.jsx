import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const createCaptcha = () => {
  const first = Math.floor(Math.random() * 9) + 1;
  const second = Math.floor(Math.random() * 9) + 1;
  const answer = first + second;

  return {
    question: `${first} + ${second} = ?`,
    answer
  };
};

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [captcha, setCaptcha] = useState(createCaptcha());

  useEffect(() => {
    setCaptcha(createCaptcha());
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetCaptcha = () => {
    setCaptcha(createCaptcha());
    setFormData((prev) => ({ ...prev, captcha: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(formData.captcha) !== captcha.answer) {
      setStatusMessage('Captcha answer is incorrect. Please solve the math challenge correctly.');
      resetCaptcha();
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage(
        'EmailJS is not configured yet. Add your service ID, template ID, and public key to the .env file.'
      );
      return;
    }

    setLoading(true);
    setStatusMessage('');

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', captcha: '' });
      resetCaptcha();
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatusMessage(
        'Something went wrong while sending your message. Please try again or email me directly.'
      );
      resetCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h1 className="section-title">Contact Me</h1>
          <p className="section-subtitle">
            Interested in working together or have an opportunity? Drop me a message or connect through social channels.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            maxWidth: '1080px',
            margin: '0 auto'
          }}
        >
          {/* Left Column: Contact Cards & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Direct Email Card */}
            <div
              className="glass-card"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <FaEnvelope size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  Email Address
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', wordBreak: 'break-all' }}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="glass-card"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(99, 102, 241, 0.12)',
                  color: 'var(--accent-indigo)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <FaMapMarkerAlt size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  Location
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>
                Follow & Connect
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>
                Check out my open source repositories or reach out professionally via LinkedIn.
              </p>

              <div style={{ display: 'flex', gap: '14px' }}>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter Profile"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60a5fa',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
              Send a Message
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '28px' }}>
              Fill in the form below and I'll get back to you as soon as possible.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '24px',
                  borderRadius: '14px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center'
                }}
              >
                <FaCheckCircle size={36} color="#34d399" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '6px' }}>
                  Thank you! Message Sent.
                </h3>
                <p style={{ color: '#a7f3d0', fontSize: '0.92rem' }}>
                  I have received your message and will reply promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '16px', fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {statusMessage && (
                  <div
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      color: '#fecaca',
                      fontSize: '0.9rem'
                    }}
                  >
                    {statusMessage}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#e2e8f0'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#e2e8f0'
                    }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#e2e8f0'
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job opportunity / Project inquiry"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#e2e8f0'
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Shifat, I reviewed your portfolio and would like to discuss..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.95rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <label
                    htmlFor="captcha"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#e2e8f0'
                    }}
                  >
                    Human verification: {captcha.question}
                  </label>

                  <input
                    type="number"
                    id="captcha"
                    name="captcha"
                    required
                    value={formData.captcha}
                    onChange={handleChange}
                    placeholder="Enter the answer"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '1rem',
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  <FaPaperPlane size={15} />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
