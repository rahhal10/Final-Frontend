import React from 'react'
import '../Css/Courses.css'

function Courses_CoursesCards({ courses, onEnroll }) {

  return (
    
    <>
            <div className="course-card popular">
              <div className="course-image">
                <img src={courses.image_url} alt={courses.title} />
                <div className="course-badge" data-badge={courses.category}>{courses.category}</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{courses.title}</h3>
                <p className="course-description">
                  {courses.description}
                </p>
                <div className="course-instructor">
                  <span className="instructor-name">{courses.instructor}</span>
                </div>
                <div className="course-meta">
                  <div className="course-rating">
                    <span className="rating-star">★</span>
                    <span className="rating-number">{courses.rating}</span>
                  </div>
                  <div className="course-stats">
                    <span className="duration">{courses.duration}</span>
                    <span className="students">{courses.students}</span>
                    <span className="lessons">{courses.lessons_count} lessons</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-price">
                    <span className="current-price">${courses.price}</span>
                    <span className="payment-info">{courses.paymentInfo}</span>
                  </div>
                  <button className="enroll-btn" onClick={() => onEnroll(courses)}>Enroll Now</button>
                </div>
              </div>
            </div>
            </>
  )
}

export default Courses_CoursesCards