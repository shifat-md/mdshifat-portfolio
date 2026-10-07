import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'rgba(7, 9, 19, 0.95)',
        position: 'relative',
        zIndex: 10,
        padding: '60px 0 30px'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}
        >
          {/* Col 1: Bio */}
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>
              {personalInfo.name}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '18px', maxWidth: '320px' }}>
              {personalInfo.tagline}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease'
                }}
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease'
                }}
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                aria-label="Email"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease'
                }}
              >
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '16px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>About Me</Link></li>
              <li><Link to="/skills" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>Technical Skills</Link></li>
              <li><Link to="/projects" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>Projects Showcase</Link></li>
              <li><Link to="/experience" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>Work Experience</Link></li>
              <li><Link to="/education" style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>Education</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '16px' }}>
              Contact Info
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '8px' }}>
              <strong>Location:</strong> {personalInfo.location}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '8px' }}>
              <strong>Email:</strong> {personalInfo.email}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '14px' }}>
              <strong>Status:</strong> Open for Junior Front-End Roles & Internships
            </p>
            <Link to="/contact" className="btn-secondary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
              Send Message
            </Link>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.88rem',
            color: 'var(--text-muted)'
          }}
        >
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Built with React.js & <FaHeart color="#ef4444" size={13} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
