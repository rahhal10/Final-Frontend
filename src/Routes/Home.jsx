import React from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">#1 Online Learning Platform</div>

        <h1 className="hero-title">
          <span className="block">Learn <span className="purple">Without</span></span>
          <span className="block">Limits</span>
        </h1>

        <p className="hero-desc">
          Master new skills with expert instructors, interactive quizzes, and personalized learning paths.
          Join thousands of students already transforming their careers.
        </p>

        <div className="hero-stats">
          <span>👨‍🎓 50,000+ Students</span>
          <span>📘 1,200+ Courses</span>
          <span>⭐ 4.9 Rating</span>
        </div>

        <div className="hero-actions">
          <Link to="/signup"><button className="hero-btn-primary">Start Learning Now</button></Link>
          <button className="hero-btn-secondary">
            <span className="play">▶</span>
            Watch Demo
          </button>
        </div>

        <div className="hero-trusted">
          <div className="hero-trusted-text">Trusted by leading companies</div>

          <div className="hero-logos">
            <div className="hero-logo-item">
              <svg className="hero-logo" viewBox="0 0 100 40" role="img" aria-label="Aurora" preserveAspectRatio="xMidYMid meet">
                <title>Aurora</title>
                {/* centered triangle */}
                <polygon points="50,6 68,34 32,34" fill="currentColor" opacity="0.95" />
              </svg>
              <span className="hero-logo-label">Aurora</span>
            </div>

            <div className="hero-logo-item">
              <svg className="hero-logo" viewBox="0 0 100 40" role="img" aria-label="Hexa" preserveAspectRatio="xMidYMid meet">
                <title>Hexa</title>
                {/* centered hexagon */}
                <polygon points="50,8 63,15 63,25 50,32 37,25 37,15" fill="none" stroke="currentColor"/>
                <line x1="44" y1="20" x2="56" y2="20" stroke="currentColor" />
              </svg>
              <span className="hero-logo-label">Hexa</span>
            </div>

            <div className="hero-logo-item">
              <svg className="hero-logo" viewBox="0 0 100 40" role="img" aria-label="Pulse" preserveAspectRatio="xMidYMid meet">
                <title>Pulse</title>
                {/* centered wave */}
                <path d="M30 25c4-12 6-12 10 0s6 12 10 0 6-12 10 0" fill="none" stroke="currentColor" strokeLinecap="round"/>
              </svg>
              <span className="hero-logo-label">Pulse</span>
            </div>

            <div className="hero-logo-item">
              <svg className="hero-logo" viewBox="0 0 100 40" role="img" aria-label="Grid" preserveAspectRatio="xMidYMid meet">
                <title>Grid</title>
                {/* centered 2x2 tiles */}
                <rect x="38" y="12" width="10" height="10" rx="2" fill="currentColor" opacity=".95"/>
                <rect x="52" y="12" width="10" height="10" rx="2" fill="currentColor" opacity=".75"/>
                <rect x="38" y="26" width="10" height="10" rx="2" fill="currentColor" opacity=".75"/>
                <rect x="52" y="26" width="10" height="10" rx="2" fill="currentColor" opacity=".95"/>
              </svg>
              <span className="hero-logo-label">Grid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
