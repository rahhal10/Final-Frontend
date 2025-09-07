import React, { use } from 'react'
import Course_cards from '../Comp/Dashboard_Mid_cards.jsx'
import hero from '../assets/hero-learning.jpg'
import '../Css/Dashboard.css'
import Dashboard_UperCard from '../Comp/Dashboard_UperCard.jsx'
import Dashboard_Assignment from '../Comp/Dashboard_Assignment.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
function Dashboard({ user }) {

  function courseCount() {
    return usercourse.length;
  }

  const courseUpper = [{ id: 1 }];
  const [usercourse, setUsercourse] = useState([]);
  const [assignments, setAssignments] = useState([]);

  async function fetchusercourse() {
    try {
      const response = await fetch('http://localhost:5000/api/users/user-courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user?.email,
          username: user?.username,
        }),
      });
      if (!response.ok) throw new Error('Failed to fetch user courses');
      const data = await response.json();
      setUsercourse(data);
    } catch (error) {
      console.error('Error fetching user courses:', error);
    }
  }

  useEffect(() => {
    fetchusercourse();
  }, []);



  async function fetchAssignments() {
    try {
      const response = await fetch('http://localhost:5000/api/users/assignments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch assignments');
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  }

  useEffect(() => {
    fetchAssignments();
  }, []);

  

  
  return (
    <main className="dash">
      <div className="dash-container">
        <header className="dash-head">
          <h1>Welcome back, {user.username}!</h1>
          <p>Continue your learning journey</p>
        </header>

        <div className="metric-grid" aria-label="stats">
          {courseUpper.map((courseuper) => (
            <Dashboard_UperCard key={courseuper.id} courseuper={courseuper} courseCount={courseCount()} />
          ))}
        </div>

         <div className="course-grid" aria-label="your courses">
          {usercourse.map((usercourse) => (
            <Course_cards key={usercourse.id} usercourse={usercourse} />
          ))}
         </div>
        {/* Assignments + Achievements */}
        <section className="lower-grid" aria-label="assignments and achievements">

      {/* Upcoming Assignments */}
          <article className="panel" role="region" aria-labelledby="assignments-title">
            <header className="panel-header">
              <span className="ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </svg>
              </span>
              <h3 id="assignments-title">Upcoming Assignments</h3>
            </header>

         <div>
          {assignments.map((assignments) => (
            <Dashboard_Assignment key={assignments.id} assignments={assignments} />
          ))}
        </div>

        </article>
        

          {/* Achievements */}
          <article className="panel" role="region" aria-labelledby="achievements-title">
            <header className="panel-header">
              <span className="ico" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4z" />
                  <path d="M6 7H4a3 3 0 0 0 3 3" />
                  <path d="M18 7h2a3 3 0 0 1-3 3" />
                  <path d="M12 11v3" />
                  <path d="M9 21h6" />
                </svg>
              </span>
              <h3 id="achievements-title">Achievements</h3>
            </header>

            <ul className="ach-list">
              <li className="ach-row earned">
                <div className="a-left">
                  <span className="a-ico" aria-hidden>🏆</span>
                  <span className="a-title">First Course Completed</span>
                </div>
                <span className="a-badge">Earned</span>
              </li>
              <li className="ach-row earned">
                <div className="a-left">
                  <span className="a-ico" aria-hidden>🎯</span>
                  <span className="a-title">7-Day Streak</span>
                </div>
                <span className="a-badge">Earned</span>
              </li>
              <li className="ach-row">
                <div className="a-left">
                  <span className="a-ico" aria-hidden>🥇</span>
                  <span className="a-title">Quiz Master</span>
                </div>
              </li>
              <li className="ach-row">
                <div className="a-left">
                  <span className="a-ico" aria-hidden>⚡</span>
                  <span className="a-title">Speed Learner</span>
                </div>
              </li>
            </ul>
          </article>
        </section>

        {/* Quick Actions */}
        <section className="panel quick-actions" aria-label="quick actions">
          <header className="panel-header">
            <h3>Quick Actions</h3>
          </header>

          <div className="qa-row">
            <button type="button" className="qa-btn primary">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
              Resume Last Lesson
            </button>
            <button type="button" className="qa-btn">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
              </svg>
              Browse Catalog
            </button>
            <button type="button" className="qa-btn">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10"/><path d="M9 9h6M9 13h6M9 17h6"/>
              </svg>
              Take Quiz
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Dashboard