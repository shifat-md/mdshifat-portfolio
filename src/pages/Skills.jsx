import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Filter categories if tab is selected
  const displayedCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeTab);

  return (
    <div className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Technical Expertise</span>
          <h1 className="section-title">My Skills & Tooling</h1>
          <p className="section-subtitle">
            A comprehensive overview of my front-end toolkit, frameworks, and developer workflows. Completely data-driven and easy to update in <code className="mono">skills.js</code>.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px'
          }}
        >
          <button
            onClick={() => setActiveTab('All')}
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 600,
              background: activeTab === 'All' ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.05)',
              color: activeTab === 'All' ? '#ffffff' : 'var(--text-secondary)',
              border: activeTab === 'All' ? '1px solid transparent' : '1px solid var(--border-color)',
              transition: 'all 0.2s ease'
            }}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: activeTab === cat.category ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === cat.category ? '#ffffff' : 'var(--text-secondary)',
                border: activeTab === cat.category ? '1px solid transparent' : '1px solid var(--border-color)',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Render Skill Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {displayedCategories.map((group) => (
            <div key={group.category}>
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {group.category}
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  {group.description}
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px'
                }}
              >
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning & Exploration Note */}
        <div
          className="glass-card"
          style={{
            marginTop: '60px',
            padding: '30px',
            textAlign: 'center',
            border: '1px dashed rgba(99, 102, 241, 0.35)'
          }}
        >
          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '8px' }}>
            Continuous Learning & Future Stack
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '650px', margin: '0 auto' }}>
            Currently expanding into TypeScript, Next.js, Tailwind CSS, and advanced state management patterns (Zustand/Redux Toolkit) to elevate my front-end capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
