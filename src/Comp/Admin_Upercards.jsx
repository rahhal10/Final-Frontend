import React from 'react';
import '../Css/Admin_Dashboard.css';

export default function Admin_Upercards({ userCount, coursesCount }) {
  return (
    <div className="admin-dashboard-stats-row">
      {/* Total Students */}
      <div className="admin-dashboard-stat-card">
        <div className="admin-dashboard-stat-label">Total Users</div>
        <div className="admin-dashboard-stat-value">{userCount}</div>
        <div className="admin-dashboard-stat-desc">+12% from last month</div>
        <div className="admin-dashboard-stat-icon">
          {/* Modern purple user group icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect width="28" height="28" rx="8" fill="url(#students)"/>
            <g><path d="M7.5 17v-1a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v1" stroke="#fff" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="#fff" strokeWidth="1.5"/></g>
            <defs><linearGradient id="students" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#7c3aed"/></linearGradient></defs>
          </svg>
        </div>
      </div>
      {/* Active Courses */}
      <div className="admin-dashboard-stat-card">
        <div className="admin-dashboard-stat-label">Active Courses</div>
        <div className="admin-dashboard-stat-value">{coursesCount}</div>
        <div className="admin-dashboard-stat-desc">+3 new this month</div>
        <div className="admin-dashboard-stat-icon">
          {/* Modern purple course icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect width="28" height="28" rx="8" fill="url(#courses)"/>
            <g><rect x="7" y="8" width="10" height="8" rx="2" stroke="#fff" strokeWidth="1.5"/><rect x="9" y="10" width="6" height="4" rx="1" stroke="#fff" strokeWidth="1.5"/></g>
            <defs><linearGradient id="courses" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#7c3aed"/></linearGradient></defs>
          </svg>
        </div>
      </div>
      {/* Completion Rate */}
      <div className="admin-dashboard-stat-card">
        <div className="admin-dashboard-stat-label">Completion Rate</div>
        <div className="admin-dashboard-stat-value">87%</div>
        <div className="admin-dashboard-stat-desc">-5% from last month</div>
        <div className="admin-dashboard-stat-icon">
          {/* Modern purple chart icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect width="28" height="28" rx="8" fill="url(#rate)"/>
            <g><path d="M8 16v-4m4 4V8m4 8v-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 20h12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></g>
            <defs><linearGradient id="rate" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#7c3aed"/></linearGradient></defs>
          </svg>
        </div>
      </div>
      {/* Certificates Issued */}
      <div className="admin-dashboard-stat-card">
        <div className="admin-dashboard-stat-label">Certificates Issued</div>
        <div className="admin-dashboard-stat-value">456</div>
        <div className="admin-dashboard-stat-desc">+32% from last month</div>
        <div className="admin-dashboard-stat-icon">
          {/* Modern purple graduation cap icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect width="28" height="28" rx="8" fill="url(#certs)"/>
            <g><path d="M12 7l8 3.5-8 3.5-8-3.5L12 7z" stroke="#fff" strokeWidth="1.5"/><path d="M4 10.5V14c0 2 3.58 3.5 8 3.5s8-1.5 8-3.5v-3.5" stroke="#fff" strokeWidth="1.5"/><path d="M18 14v2" stroke="#fff" strokeWidth="1.5"/></g>
            <defs><linearGradient id="certs" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#7c3aed"/></linearGradient></defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
