import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBookOpen, FaAward, FaUniversity } from 'react-icons/fa';
import { educationList } from '../data/education';

const Education = () => {
  return (
    <div className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Academic Background</span>
          <h1 className="section-title">Education & Learning</h1>
          <p className="section-subtitle">
            Formal degrees, computer science studies, and academic milestones. All details can be configured in <code className="mono">education.js</code>.
          </p>
        </div>

        {/* Education List Cards */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}
        >
          {educationList.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '36px',
                position: 'relative'
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '14px',
                  marginBottom: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                    <div
                      style={{
                        padding: '8px 12px',
                        borderRadius: '10px',
                        background: 'rgba(99, 102, 241, 0.15)',
                        color: 'var(--accent-indigo)'
                      }}
                    >
                      <FaGraduationCap size={20} />
                    </div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
                      {item.degree}
                    </h2>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <FaUniversity size={16} />
                    {item.institution}
                  </div>
                </div>

                {/* Status & Duration */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      background: item.status.includes('Currently')
                        ? 'rgba(16, 185, 129, 0.15)'
                        : 'rgba(99, 102, 241, 0.15)',
                      border: item.status.includes('Currently')
                        ? '1px solid rgba(16, 185, 129, 0.4)'
                        : '1px solid rgba(99, 102, 241, 0.3)',
                      color: item.status.includes('Currently') ? '#34d399' : '#c7d2fe'
                    }}
                  >
                    {item.status}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <FaCalendarAlt size={12} />
                    {item.duration} • {item.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}
              >
                {item.description}
              </p>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div
                  style={{
                    padding: '18px 20px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#e2e8f0',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <FaAward color="var(--accent-amber)" /> Academic Highlights & Focus:
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.highlights.map((point, index) => (
                      <li
                        key={index}
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <span style={{ color: 'var(--accent-cyan)' }}>•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
