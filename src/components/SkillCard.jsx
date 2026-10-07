import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaChrome,
  FaCode,
  FaMobileAlt,
  FaRoute,
  FaExchangeAlt,
  FaIcons,
  FaLayerGroup,
  FaPalette,
  FaRocket
} from 'react-icons/fa';

// Map icon string name from skills.js to actual react-icon component
const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJsSquare: FaJsSquare,
  FaReact: FaReact,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  FaNpm: FaNpm,
  FaChrome: FaChrome,
  FaCode: FaCode,
  FaMobileAlt: FaMobileAlt,
  FaRoute: FaRoute,
  FaExchangeAlt: FaExchangeAlt,
  FaIcons: FaIcons,
  FaLayerGroup: FaLayerGroup,
  FaPalette: FaPalette,
  FaRocket: FaRocket
};

const SkillCard = ({ skill }) => {
  const IconComponent = iconMap[skill.icon] || FaCode;

  return (
    <div
      className="glass-card"
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: `1px solid ${skill.color ? skill.color + '40' : 'var(--border-color)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: skill.color || 'var(--accent-cyan)'
            }}
          >
            <IconComponent size={24} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{skill.name}</h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              {skill.badge || 'Proficient'}
            </span>
          </div>
        </div>
        <span
          className="mono"
          style={{
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--accent-cyan)'
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: '100%',
          height: '6px',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.07)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: `${skill.level}%`,
            height: '100%',
            borderRadius: '9999px',
            background: `linear-gradient(90deg, ${skill.color || '#38bdf8'}, #6366f1)`,
            transition: 'width 1s ease-in-out'
          }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
