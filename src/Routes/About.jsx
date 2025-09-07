import React from 'react'
import '../Css/About.css'
import Footer from '../Comp/Footer'

function About() {
  return (
    <>
      <main className="about-hero" aria-label="about-hero">
        <div className="about-container">
          <h1 className="about-title">
            Empowering Minds,
            <br />
            <span className="highlight"><span className="purple">Transforming</span></span>
            <br />
            Futures
          </h1>

          <p className="about-subtitle">
            At LearnHub, we believe that quality education should be accessible to everyone, everywhere.
            Our mission is to break down barriers to learning and create opportunities for personal and
            professional growth through innovative, engaging, and effective online education.
          </p>
        </div>
      </main>

      <section className="about-stats" aria-label="about-stats">
        <div className="stats-grid">
          <article className="stat-card">
            <div className="stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zM8 13c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zM16 13c-1.08 0-2.08.216-3 .6"/></svg>
            </div>
            <div className="stat-value">50,000+</div>
            <div className="stat-label">Active Students</div>
          </article>

          <article className="stat-card">
            <div className="stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H18"/><path d="M6.5 2H18l-6.75 8L6.5 2z"/></svg>
            </div>
            <div className="stat-value">1,200+</div>
            <div className="stat-label">Courses Available</div>
          </article>

          <article className="stat-card">
            <div className="stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2v20"/></svg>
            </div>
            <div className="stat-value">150+</div>
            <div className="stat-label">Countries Reached</div>
          </article>

          <article className="stat-card">
            <div className="stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z"/></svg>
            </div>
            <div className="stat-value">95%</div>
            <div className="stat-label">Completion Rate</div>
          </article>
        </div>
      </section>

      

      <section className="mission-section" aria-label="our-mission">
        <div className="mission-grid">
          <div className="mission-left">
            <h3 className="mission-heading"><span className="muted-title">Our</span> <span className="purple">Mission</span></h3>
            <p className="mission-text">We're on a mission to democratize education and make high-quality learning experiences accessible to everyone. By combining cutting-edge technology with proven pedagogical methods, we create an environment where students can thrive and achieve their full potential.</p>

            <ul className="mission-list">
              <li><span className="check">✓</span> Personalized learning experiences tailored to individual needs</li>
              <li><span className="check">✓</span> Expert instructors from top universities and companies</li>
              <li><span className="check">✓</span> Interactive content that makes learning engaging and effective</li>
              <li><span className="check">✓</span> Global community of learners supporting each other's growth</li>
            </ul>

            <button className="mission-cta">Join Our Mission <span className="arrow">→</span></button>
          </div>

          <div className="mission-right">
            <div className="impact-card">
              <div className="impact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8l4 4-6 6-4-4 6-6z"/></svg>
              </div>
              <h4 className="impact-title">Impact by Numbers</h4>

              <dl className="impact-list">
                <div className="impact-row"><dt>Career Advancement</dt><dd>78% of graduates</dd></div>
                <div className="impact-row"><dt>Salary Increase</dt><dd>Average 35%</dd></div>
                <div className="impact-row"><dt>Student Satisfaction</dt><dd>4.9/5 rating</dd></div>
                <div className="impact-row"><dt>Course Completion</dt><dd>95% rate</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section" aria-label="our-values">
        <div className="values-container">
          <h3 className="values-heading">Our <span className="purple">Values</span></h3>
          <p className="values-sub">These core values guide every decision we make and every feature we build.</p>

          <div className="values-grid">
            <article className="value-card">
              <div className="value-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21l-1-1a6 6 0 1 1 2 0l-1 1z"/></svg></div>
              <h4 className="value-title">Student-First Approach</h4>
              <p className="value-desc">Every decision we make prioritizes the learning experience and success of our students.</p>
            </article>

            <article className="value-card">
              <div className="value-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M5 12h14"/><path d="M12 22v-6"/></svg></div>
              <h4 className="value-title">Innovation in Learning</h4>
              <p className="value-desc">We continuously explore new technologies and methodologies to enhance education.</p>
            </article>

            <article className="value-card">
              <div className="value-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/></svg></div>
              <h4 className="value-title">Quality Excellence</h4>
              <p className="value-desc">We maintain the highest standards in content creation and instructor selection.</p>
            </article>

            <article className="value-card">
              <div className="value-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 0-18 0"/></svg></div>
              <h4 className="value-title">Global Accessibility</h4>
              <p className="value-desc">Making quality education accessible to learners worldwide, regardless of location.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="team-section" aria-label="leadership-team">
        <div className="team-container">
          <h3 className="team-heading">Leadership <span className="purple">Team</span></h3>
          <p className="team-sub">Our leadership brings together education, engineering, and community experience to guide LearnHub's mission.</p>

          <div className="team-grid">
            <article className="team-card">
              <div className="avatar">JD</div>
              <h4 className="team-name">Jane Doe</h4>
              <div className="team-role">Chief Executive Officer</div>
            </article>

            <article className="team-card">
              <div className="avatar">RM</div>
              <h4 className="team-name">Rami Malik</h4>
              <div className="team-role">Head of Product</div>
            </article>

            <article className="team-card">
              <div className="avatar">AN</div>
              <h4 className="team-name">Anna Nguyen</h4>
              <div className="team-role">Director of Curriculum</div>
            </article>

            <article className="team-card">
              <div className="avatar">MK</div>
              <h4 className="team-name">Mohamed Khalid</h4>
              <div className="team-role">VP Engineering</div>
            </article>
          </div>
        </div>
      </section>
            <section className="about-cta-section" aria-label="join-cta">
        <div className="about-cta-inner">
          <h2 className="about-cta-title">Ready to Be Part of Our Story?</h2>
          <p className="about-cta-sub">Join our community of learners and start your transformation journey today.</p>

          <div className="about-cta-actions">
            <button className="about-cta-primary">Start Learning Today <span className="arrow">→</span></button>
            <a className="about-cta-link" href="#contact">Contact Us</a>
          </div>
        </div>
  </section>
    </>
  )
}

export default About