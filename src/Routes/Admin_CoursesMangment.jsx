import React from 'react';
import Admin_CourseCard from '../Comp/Admin_CourseCard';
import { Link } from 'react-router-dom';
import '../Css/Admin_CoursesMangment.css';
import { useEffect } from 'react';
import { useState } from 'react';



function Admin_CoursesMangment() {

const [adminCourses, setAdminCourses] = useState([]);
    
async function fetchAllCourses() {
try {
const response = await fetch('http://localhost:5000/api/admin/admincourses');
 if (!response.ok) {
  throw new Error('Failed to fetch courses');
 }
const data = await response.json();
console.log('Fetched courses data:', data);
setAdminCourses(data);
} catch (error) {
  console.error('Error fetching courses:', error);
  return [];
 }
}

useEffect(() => {
  fetchAllCourses();
}, []);




const deleteCourse = async (id) => {
  try {
    const response = await fetch('http://localhost:5000/api/admin/deladmincourses', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    if (response.ok) {
      fetchAllCourses();
    } else {
      console.error('Failed to delete course');
    }
  } catch (error) {
    console.error('Error deleting course:', error);
  }
};




const editCourse = async (id, newInstructor) => {
  try {
    const response = await fetch('http://localhost:5000/api/admin/editadmincourse', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, instructor: newInstructor })
    });
    if (response.ok) {
      fetchAllCourses();
    } else {
      console.error('Failed to update course');
    }
  } catch (error) {
    console.error('Error updating course:', error);
  }
};



return (
    <div className="admin-courses-container">
      <aside className="admin-dashboard-sidebar">
        <div className="admin-dashboard-logo-row">
          <span className="admin-dashboard-logo">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#7c3aed" d="M12 3L2 9l10 6 10-6-10-6zm0 2.18L18.09 9 12 12.82 5.91 9 12 5.18zM4 10.09v5.18c0 2.21 3.58 4 8 4s8-1.79 8-4v-5.18l-8 4.8-8-4.8z"/></svg>
          </span>
          <span className="admin-dashboard-logo-text">EduAdmin</span>
        </div>
        <nav className="admin-dashboard-nav">
          <div className="admin-dashboard-nav-btns">
            <Link to="/admin_dashboard"><button className="admin-dashboard-nav-btn"><span className="icon">🏠</span> Dashboard</button></Link>
            <Link to="/admin_courses"><button className="admin-dashboard-nav-btn active"><span className="icon">📚</span> Course Management</button></Link>
            <Link to="/admin_users"><button className="admin-dashboard-nav-btn"><span className="icon">👥</span> Users Management</button></Link>
          </div>
        </nav>  
      </aside>
      <main className="admin-courses-main">
        <h1 className="admin-courses-title">Course Management</h1>
  <div className="admin-courses-add-btn-row">
         <Link to="/admin_add_course"><button className="admin-courses-add-btn">+ Add New Course</button></Link>
        </div>
        <div className="admin-courses-search-bar">
          <input type="text" placeholder="Search courses or instructors..." />
          <button className="admin-courses-search-btn" aria-label="search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="7" stroke="#7c3aed" strokeWidth="2"/>
              <line x1="14.4142" y1="14" x2="18" y2="17.5858" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="admin-courses-list">




          {adminCourses.map((adminCourse) => (
            <Admin_CourseCard key={adminCourse.id} adminCourse={adminCourse} deleteCourse={deleteCourse} editCourse={editCourse} />
          ))}






        </div>
      </main>
    </div>
  );
}

export default Admin_CoursesMangment;