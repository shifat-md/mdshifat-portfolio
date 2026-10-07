import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight, FaCode, FaRocket, FaLaptopCode, FaCheckCircle, FaClock } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import profileImage from '../assets/profile';

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredSkills = skillCategories[0].skills.slice(0, 4);

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          minHeight: 'calc(100vh - 76px)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          padding: '60px 0 80px'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Text & CTAs */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  marginBottom: '20px'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 10px #10b981'
                  }}
                />
                Available for Junior Roles & Front-End Opportunities
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: '16px',
                  letterSpacing: '-0.02em'
                }}
              >
                Hello, I'm <br />
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              <h2
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <FaLaptopCode />
                {personalInfo.role}
              </h2>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                  maxWidth: '560px'
                }}
              >
                {personalInfo.tagline} Currently pursuing {personalInfo.currentStudy} with {personalInfo.experienceYears} of real-world frontend development experience.
              </p>

              {/* CTA Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginBottom: '40px'
                }}
              >
                <Link to="/projects" className="btn-primary">
                  <span>View My Projects</span>
                  <FaArrowRight size={14} />
                </Link>

                <Link to="/contact" className="btn-secondary">
                  <span>Contact Me</span>
                </Link>

                <a
                  href={personalInfo.socialLinks.cvDownloadUrl}
                  download="Md_Shifat_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  aria-label="Download CV"
                >
                  <FaDownload size={14} />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Quick stats grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '16px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {personalInfo.stats.map((stat, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        color: '#ffffff'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Profile Photo Card */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '380px',
                  aspectRatio: '1 / 1'
                }}
              >
                {/* Decorative Glowing Backdrop */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-15px',
                    borderRadius: '32px',
                    background: 'var(--gradient-primary)',
                    filter: 'blur(30px)',
                    opacity: 0.35,
                    zIndex: 0
                  }}
                />

                {/* Glass Container */}
                <div
                  className="glass-card"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(99, 102, 241, 0.3)',
                    padding: '12px'
                  }}
                >
                  <img
                    src={profileImage}
                    alt={`${personalInfo.name} Profile`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '20px'
                    }}
                  />
                </div>

                {/* Floating Experience Badge */}
                <div
                  className="glass-card"
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '-20px',
                    padding: '12px 20px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                    zIndex: 2
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <FaCheckCircle size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>1 Year Hands-On</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Front-End Dev</div>
                  </div>
                </div>

                {/* Floating Tech Badge */}
                <div
                  className="glass-card"
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    padding: '10px 16px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                    zIndex: 2
                  }}
                >
                  <FaCode color="#a855f7" size={18} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>React + CSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED SKILLS SNAPSHOT ================= */}
      <section className="section-wrapper" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Skill Highlights</span>
            <h2 className="section-title">Core Front-End Strengths</h2>
            <p className="section-subtitle">
              Technologies I use everyday to architect responsive, maintainable web applications.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '36px'
            }}
          >
            {featuredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/skills" className="btn-secondary">
              View All Skills & Tooling <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SNAPSHOT ================= */}
      <section className="section-wrapper" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Recent Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Selected client and personal web projects built with React.js, clean code, and API integrations.
            </p>
          </div>

          {featuredProjects.length > 0 ? (
            <>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '28px',
                  marginBottom: '40px'
                }}
              >
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <Link to="/projects" className="btn-primary">
                  Explore All Projects <FaArrowRight size={14} />
                </Link>
              </div>
            </>
          ) : (
            <div
              className="glass-card"
              style={{
                padding: '50px 24px',
                textAlign: 'center',
                maxWidth: '620px',
                margin: '0 auto',
                border: '1px dashed var(--border-glow)'
              }}
            >
              <FaClock size={36} color="var(--accent-cyan)" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: '#ffffff' }}>
                Projects Will Be Added Soon
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
                I am currently curating my personal projects and source code. They will be displayed here soon!
              </p>
              <Link to="/contact" className="btn-secondary" style={{ fontSize: '0.88rem' }}>
                Contact Me For Inquiries
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="section-wrapper" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '60px 32px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
              border: '1px solid var(--border-glow)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span className="section-badge" style={{ marginBottom: '16px' }}>Let's Build Together</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
              Have an opening or a project idea?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1.05rem' }}>
              I am open to Junior Front-End Developer roles, internships, and freelance contracts. Let's connect and discuss how I can add value to your team.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '14px 32px' }}>
                Get In Touch <FaRocket size={14} />
              </Link>
              <Link to="/about" className="btn-secondary" style={{ padding: '14px 28px' }}>
                Read My Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
