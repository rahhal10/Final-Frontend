import React, { useEffect } from 'react';
import { useState } from 'react';
import '../Css/Admin_Dashboard.css';
import Admin_Upercards from '../Comp/Admin_Upercards';
import { Link } from 'react-router-dom';

function Admin_Dashboard({ user }) {




  const [userCount, setUserCount] = useState('');
  const [coursesCount, setCoursesCount] = useState('');

  async function fetchUserCount() {
    try {
      const response = await fetch('http://localhost:5000/api/admin/usercount');
      if (!response.ok) throw new Error('Failed to fetch user count');
      const data = await response.json();
      setUserCount(data.count);
    } catch (err) {
      console.error('Error fetching user count:', err);
      setUserCount('0');
    }
  }


  async function fetchCoursesCount() {
    try {
      const response = await fetch('http://localhost:5000/api/admin/coursescount');
      if (!response.ok) throw new Error('Failed to fetch courses count');
      const data = await response.json();
      console.log('Courses count data:', data);
      setCoursesCount(data.count);
    } catch (err) {
      console.error('Error fetching courses count:', err);
      setCoursesCount('0');
    }
  }

  useEffect(() => {
    fetchUserCount();
    fetchCoursesCount();
  }, []);




  return (
    <div className="admin-dashboard-container">
      <aside className="admin-dashboard-sidebar">
        <div className="admin-dashboard-logo-row">
          <span className="admin-dashboard-logo">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#7c3aed" d="M12 3L2 9l10 6 10-6-10-6zm0 2.18L18.09 9 12 12.82 5.91 9 12 5.18zM4 10.09v5.18c0 2.21 3.58 4 8 4s8-1.79 8-4v-5.18l-8 4.8-8-4.8z"/></svg>
          </span>
          <span className="admin-dashboard-logo-text">EduAdmin</span>
        </div>
        <nav className="admin-dashboard-nav">
          <div className="admin-dashboard-nav-btns">
            <Link to="/admin_dashboard"><button className="admin-dashboard-nav-btn active"><span className="icon">🏠</span> Dashboard</button></Link>
            <Link to="/admin_courses"><button className="admin-dashboard-nav-btn"><span className="icon">📚</span> Course Management</button></Link>
            <Link to="/admin_users"><button className="admin-dashboard-nav-btn"><span className="icon">👥</span> Users Management</button></Link>
          </div>
        </nav>
      </aside>
      <main className="admin-dashboard-main">
        <div className="admin-dashboard-header-row">
          <h1 className="admin-dashboard-title">Dashboard Overview</h1>
          <span className="admin-dashboard-welcome">Welcome back, {user.username}</span>
        </div>


  <Admin_Upercards userCount={userCount} coursesCount={coursesCount} />

        
        <div className="admin-dashboard-activities-card">
          <div className="admin-dashboard-activities-title">Recent Activities</div>
          <div className="admin-dashboard-activities-empty">No recent activities yet.</div>
        </div>
      </main>
    </div>
  );
}

export default Admin_Dashboard;