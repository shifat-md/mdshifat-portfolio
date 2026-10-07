import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <div className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Career Track</span>
          <h1 className="section-title">Work Experience</h1>
          <p className="section-subtitle">
            Professional roles, freelance projects, and front-end development responsibilities. Fully editable via <code className="mono">experience.js</code>.
          </p>
        </div>

        {/* Timeline Layout */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px'
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                padding: '36px',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '14px',
                  marginBottom: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <div
                      style={{
                        padding: '6px 10px',
                        borderRadius: '8px',
                        background: 'rgba(56, 189, 248, 0.12)',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      <FaBriefcase size={16} />
                    </div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
                      {exp.role}
                    </h2>
                  </div>

                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                    {exp.company}
                  </div>
                </div>

                {/* Duration & Location Badges */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      color: '#c7d2fe'
                    }}
                  >
                    <FaCalendarAlt size={12} />
                    {exp.duration}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <FaMapMarkerAlt size={12} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '20px', lineHeight: 1.6 }}>
                {exp.description}
              </p>

              {/* Responsibilities bullet points */}
              <div style={{ marginBottom: '24px' }}>
                <h3
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#e2e8f0',
                    marginBottom: '12px'
                  }}
                >
                  Key Contributions & Responsibilities:
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.93rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5
                      }}
                    >
                      <FaCheckCircle
                        size={15}
                        color="var(--accent-cyan)"
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}
                >
                  Technologies Applied:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-color)',
                        color: '#f1f5f9'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
