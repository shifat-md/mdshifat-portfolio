import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaCompass, FaBullseye, FaCode, FaCheck } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import profileImage from '../assets/profile';

const About = () => {
  return (
    <div className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Get To Know Me</span>
          <h1 className="section-title">About Md Shifat</h1>
          <p className="section-subtitle">
            A look into my journey as a developer, academic background, and passion for front-end craft.
          </p>
        </div>

        {/* Profile Highlight Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '70px'
          }}
        >
          {/* Dedicated Photo Area */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '1 / 1'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '30px',
                  background: 'var(--gradient-primary)',
                  filter: 'blur(25px)',
                  opacity: 0.3
                }}
              />
              <div
                className="glass-card"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  padding: '12px',
                  border: '2px solid rgba(99, 102, 241, 0.3)'
                }}
              >
                <img
                  src={profileImage}
                  alt={`${personalInfo.name} Portrait`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '18px'
                  }}
                />
              </div>

              {/* Photo Caption / Helper */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '16px',
                  background: 'rgba(15, 23, 42, 0.95)',
                  border: '1px solid var(--border-glow)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600
                }}
              >
                Replaceable in src/assets
              </div>
            </div>
          </div>

          {/* Quick Bio & Key Attributes */}
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>
              Crafting Clean Code & <span className="gradient-text">Intuitive UIs</span>
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '20px'
              }}
            >
              {personalInfo.bio}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '14px',
                marginBottom: '28px'
              }}
            >
              <div
                className="glass-card"
                style={{
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ color: 'var(--accent-cyan)' }}>
                  <FaCheck />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Education</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>CSE Undergrad</div>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ color: 'var(--accent-cyan)' }}>
                  <FaCheck />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Experience</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>1 Year Hands-On</div>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ color: 'var(--accent-cyan)' }}>
                  <FaCheck />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Focus</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>React & Modern JS</div>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ color: 'var(--accent-cyan)' }}>
                  <FaCheck />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/experience" className="btn-primary">
                View My Experience
              </Link>
              <Link to="/education" className="btn-secondary">
                View Education
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Detailed Story Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}
        >
          {/* Card 1: Journey */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(56, 189, 248, 0.12)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <FaCompass size={24} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px' }}>
              My Journey as a Developer
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {personalInfo.journey}
            </p>
          </div>

          {/* Card 2: Education & Academic Focus */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(99, 102, 241, 0.12)',
                color: 'var(--accent-indigo)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <FaGraduationCap size={24} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px' }}>
              Education & Computer Science
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Studying Computer Science & Engineering (CSE) provides me with a grounded understanding of algorithms, data structures, and computer architecture. This foundational knowledge allows me to write more performant, structured front-end applications.
            </p>
          </div>

          {/* Card 3: Career Goals */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(168, 85, 247, 0.12)',
                color: 'var(--accent-purple)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <FaBullseye size={24} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px' }}>
              My Career Goals
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {personalInfo.careerGoals}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
