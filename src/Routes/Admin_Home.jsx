import React from 'react'
import '../Css/Admin_Home.css'
import { Link } from 'react-router-dom'

function Admin_Home() {
  return (
    <div className="admin-home-container">
      <div className="admin-home-bg-mesh"></div>
      <div className="admin-home-center">
        <div className="admin-home-title-row">
          <span className="admin-home-logo">
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#7c3aed" d="M12 3L2 9l10 6 10-6-10-6zm0 2.18L18.09 9 12 12.82 5.91 9 12 5.18zM4 10.09v5.18c0 2.21 3.58 4 8 4s8-1.79 8-4v-5.18l-8 4.8-8-4.8z"/></svg>
          </span>
          <h1 className="admin-home-title">EduAdmin</h1>
        </div>
        <p className="admin-home-subtitle">
          Powerful learning management system for administrators to manage<br />
          courses, students, and track educational progress.
        </p>
        <Link to="/admin_dashboard">
          <button className="admin-home-btn">
            Access Admin Dashboard
          </button>
        </Link>
        <div className="admin-home-cards-row">
          {/* Card 1 */}
          <div className="admin-home-card">
            <div className="admin-home-card-icon">
              {/* Book/learning icon, modern and purple */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect width="36" height="36" rx="8" fill="url(#card1)"/><g><path d="M8 6h8a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2z" stroke="#fff" strokeWidth="1.5"/><path d="M8 6v12M16 6v12" stroke="#fff" strokeWidth="1.5"/></g><defs><linearGradient id="card1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#7c3aed"/></linearGradient></defs></svg>
            </div>
            <h2 className="admin-home-card-title">Course Management</h2>
            <p className="admin-home-card-desc">
              Add, edit, and organize courses with detailed tracking and progress monitoring.
            </p>
          </div>
          {/* Card 2 */}
          <div className="admin-home-card">
            <div className="admin-home-card-icon">
              {/* User group icon, modern and purple */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect width="36" height="36" rx="8" fill="url(#card2)"/><g><circle cx="12" cy="10" r="3" stroke="#fff" strokeWidth="1.5"/><path d="M6 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" stroke="#fff" strokeWidth="1.5"/></g><defs><linearGradient id="card2" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#7c3aed"/></linearGradient></defs></svg>
            </div>
            <h2 className="admin-home-card-title">Student Management</h2>
            <p className="admin-home-card-desc">
              Manage student accounts, enrollments, and track their learning journey.
            </p>
          </div>
          {/* Card 3 */}
          <div className="admin-home-card">
            <div className="admin-home-card-icon">
              {/* Analytics/graph icon, modern and purple */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect width="36" height="36" rx="8" fill="url(#card3)"/><g><path d="M8 16v-4m4 4V8m4 8v-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 20h12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></g><defs><linearGradient id="card3" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#7c3aed"/></linearGradient></defs></svg>
            </div>
            <h2 className="admin-home-card-title">Analytics & Reporting</h2>
            <p className="admin-home-card-desc">
              Comprehensive analytics and reporting tools to monitor performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Home;