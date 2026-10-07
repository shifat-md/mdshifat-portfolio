import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

/**
 * Reusable Project Card Component
 */
const ProjectCard = ({ project }) => {
  return (
    <article
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Project Cover Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          overflow: 'hidden',
          backgroundColor: '#1e293b'
        }}
      >
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onError={(e) => {
            // Fallback image if unsplash or remote fails
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
          }}
        />
        {/* Category Pill Tag */}
        <span
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            color: 'var(--accent-cyan)',
            backdropFilter: 'blur(8px)'
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Card Content Body */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: '10px',
            color: 'var(--text-primary)'
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            marginBottom: '18px',
            lineHeight: 1.55,
            flexGrow: 1
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '7px',
            marginBottom: '20px'
          }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(99, 102, 241, 0.12)',
                color: '#c7d2fe',
                border: '1px solid rgba(99, 102, 241, 0.25)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            paddingTop: '14px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{
                flex: 1,
                padding: '8px 14px',
                fontSize: '0.85rem'
              }}
            >
              <FaGithub size={15} />
              Code
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{
                flex: 1,
                padding: '8px 14px',
                fontSize: '0.85rem'
              }}
            >
              <FaExternalLinkAlt size={13} />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
