import React, { useState, useMemo } from 'react';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';
import { FaClock, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const displayedProjects = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  return (
    <div className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Portfolio Archive</span>
          <h1 className="section-title">Projects Showcase</h1>
          <p className="section-subtitle">
            Explore my work and front-end builds. You can easily add your personal projects anytime in <code className="mono">projects.js</code>.
          </p>
        </div>

        {/* If projects exist, show categories, list and pagination */}
        {projects.length > 0 ? (
          <>
            {/* Category Filters Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '40px'
              }}
            >
              {/* {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  style={{
                    padding: '9px 20px',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    background:
                      selectedCategory === category
                        ? 'var(--gradient-primary)'
                        : 'rgba(255, 255, 255, 0.05)',
                    color: selectedCategory === category ? '#ffffff' : 'var(--text-secondary)',
                    border:
                      selectedCategory === category
                        ? '1px solid transparent'
                        : '1px solid var(--border-color)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {category}
                </button>
              ))} */}
            </div>

            {/* Project Count Indicator */}
            {/* <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '28px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem'
              }}
            >
              <span>
                Showing <strong>{displayedProjects.length}</strong> of{' '}
                <strong>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
              </span>
              <span>
                Page <strong>{currentPage}</strong> of <strong>{totalPages || 1}</strong>
              </span>
            </div> */}

            {/* Projects Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px'
              }}
            >
              {displayedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* React Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 320, behavior: 'smooth' });
              }}
            />
          </>
        ) : (
          /* Placeholder Card when no projects are listed yet */
          <div
            className="glass-card"
            style={{
              padding: '80px 24px',
              textAlign: 'center',
              maxWidth: '680px',
              margin: '0 auto',
              border: '1px dashed var(--border-glow)'
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                color: 'var(--accent-cyan)'
              }}
            >
              <FaClock size={32} />
            </div>

            <h2
              style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '12px'
              }}
            >
              Projects Will Be Added Soon
            </h2>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                maxWidth: '480px',
                margin: '0 auto 28px',
                lineHeight: 1.6
              }}
            >
              I am currently preparing and curating my personal front-end projects, live demos, and source code to showcase here. Stay tuned!
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: '#c7d2fe',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <FaCodeBranch size={13} />
              <span>src/data/projects.js</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
