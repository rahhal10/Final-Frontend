import React from 'react'
import '../Css/Dashboard.css'

function Dashboard_UperCard({courseCount}) {
  return (
    <>
          <div className="metric-card">
            <div className="metric-top">
              <span className="metric-title">Enrolled Courses</span>
              <span className="metric-ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="4" y="5" width="7" height="14" rx="1"/>
                  <rect x="13" y="5" width="7" height="14" rx="1"/>
                  <path d="M11 5v14"/>
                </svg>
              </span>
            </div>
            <div className="metric-value">{courseCount}</div>
          </div>
          <div className="metric-card">
            <div className="metric-top">
              <span className="metric-title">Hours Learned</span>
              <span className="metric-ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 2"/>
                </svg>
              </span>
            </div>
            <div className="metric-value text-green">48.5</div>
            <div className="metric-note">+12.2 this week</div>
          </div>
          <div className="metric-card">
            <div className="metric-top">
              <span className="metric-title">Avg Progress</span>
              <span className="metric-ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="4,14 9,9 13,12 20,6"/>
                </svg>
              </span>
            </div>
            <div className="metric-value text-orange">45%</div>
            <div className="metric-note">Across all courses</div>
          </div>
          <div className="metric-card">
            <div className="metric-top">
              <span className="metric-title">Achievements</span>
              <span className="metric-ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M8 4h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4z"/>
                  <path d="M6 7H4a3 3 0 0 0 3 3"/>
                  <path d="M18 7h2a3 3 0 0 1-3 3"/>
                  <path d="M12 11v3"/>
                  <path d="M9 21h6"/>
                </svg>
              </span>
            </div>
            <div className="metric-value">2</div>
            <div className="metric-note">Badges earned</div>
          </div>
          </>
  )
}

export default Dashboard_UperCard