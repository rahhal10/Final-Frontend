import React from 'react'
import '../Css/Dashboard.css'

function Course_cards({usercourse}) {

  return (
    <div>
              

        {/* Course cards */}
          <article className="course-card">
            <div className="card-media">
              <img src={usercourse.image_url} alt={`${usercourse.title} thumbnail`} />
              <span className="pill level">{usercourse.category}</span>
              <span className="pill tag">{usercourse.duration}</span>
            </div>
            <div className="card-body">
              <h3 className="title">{usercourse.title}</h3>
              <p className="sub">{usercourse.description}</p>

              <div className="author">
                <div className="avatar" aria-hidden>SJ</div>
                <span>{usercourse.instructor}</span>
              </div>

              <div className="prog">
                <span className="label">Progress</span>
                <div className="track"><div className="bar" style={{ width: '65%' }} /></div>
                <span className="pct">65%</span>
              </div>

              <div className="meta">
                <span className="m">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                  </svg>
                  {usercourse.lessons_count} Lesson
                </span>
                <span className="m">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="9" cy="9" r="3"/><circle cx="17" cy="9" r="3"/>
                    <path d="M3 21a6 6 0 0 1 12 0"/><path d="M13 21a6 6 0 0 1 8 0"/>
                  </svg>
                  12,450
                </span>
                <span className="m">
                  <svg className="icon star" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 17.25l-5.4 3.18 1.44-6.2L3 9.57l6.3-.54L12 3.25l2.7 5.78 6.3.54-5.04 4.66 1.44 6.2z"/>
                  </svg>
                  4.8
                </span>
              </div>

              <div className="card-foot">
                <button className="btn-continue" type="button">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
                  </svg>
                  <span>Continue</span>
                </button>
              </div>
            </div>
          </article>
    </div>
  )
}

export default Course_cards