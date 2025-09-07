import { useEffect} from 'react'
import { useState } from 'react'
import '../Css/Courses.css'
import Courses_CoursesCards from '../Comp/Courses_CoursesCards.jsx'


function Courses({ user }) {
  const [courses, setCourses] = useState([]);

  const handleEnrollment = async (course) => {
  
      try {
        const response = await fetch('http://localhost:5000/api/users/addCart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',},
          body: JSON.stringify({
            username: user.username,
            email: user.email,
            title: course.title,
            instructor: course.instructor,
            price: course.price,
            category: course.category,
            duration: course.duration,
            lessons_count: course.lessons_count,
            rating: course.rating,
            image_url: course.image_url,
            description: course.description,
            quantity: 1
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to enroll in course');
        }

        const data = await response.json();
        console.log('Enrollment successful:', data);
      } catch (error) {
        console.error('Error enrolling in course:', error);
      
    };
  }

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    }
  }


  useEffect(() => {
    fetchCourses();
  }, []);


  

  return (
    <>
      <section className="courses-hero" aria-label="courses-hero">
        <div className="courses-container">
          <h1 className="courses-title">
            Explore Our <span className="highlight"><span className="purple">Courses</span></span>
          </h1>

          <p className="courses-desc">
            Discover thousands of courses taught by industry experts. Start your learning journey today and
            unlock your potential.
          </p>

          <div className="courses-stats" aria-label="site-stats">
            <span className="courses-stat">
              <span className="value purple">1,200+</span>
              <span className="label">Courses</span>
            </span>
            <span className="courses-stat">
              <span className="value purple">50,000+</span>
              <span className="label">Students</span>
            </span>
            <span className="courses-stat">
              <span className="value green">4.9</span>
              <span className="label">Avg Rating</span>
            </span>
          </div>
        </div>
      </section>
      
      <section className="courses-tools" aria-label="course search and filters">
        <div className="tools-container">
          <div className="tools-row">
            <div className="search-wrap">
              {/* label targets the input so clicking the icon focuses the input without JS */}
              <label className="icon-wrap" htmlFor="courses-search" aria-hidden="true">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </label>

              <input
                id="courses-search"
                type="search"
                placeholder="Search courses..."
                aria-label="Search courses"
                name="courses-search"
              />
            </div>

            <div className="filters-wrap">
              <span className="filter-label">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M22 3H2l8 10v6l4 2v-8z" />
                </svg>
                Filter by:
              </span>
              <div className="chips" role="radiogroup" aria-label="Course categories">
                <input className="chip-input" type="radio" id="cat-all" name="course-cat" defaultChecked />
                <label className="chip-label" htmlFor="cat-all">All</label>

                <input className="chip-input" type="radio" id="cat-dev" name="course-cat" />
                <label className="chip-label" htmlFor="cat-dev">Development</label>

                <input className="chip-input" type="radio" id="cat-ds" name="course-cat" />
                <label className="chip-label" htmlFor="cat-ds">Data Science</label>

                <input className="chip-input" type="radio" id="cat-mkt" name="course-cat" />
                <label className="chip-label" htmlFor="cat-mkt">Marketing</label>

                <input className="chip-input" type="radio" id="cat-design" name="course-cat" />
                <label className="chip-label" htmlFor="cat-design">Design</label>

                <input className="chip-input" type="radio" id="cat-biz" name="course-cat" />
                <label className="chip-label" htmlFor="cat-biz">Business</label>

                <input className="chip-input" type="radio" id="cat-levels" name="course-cat" />
                <label className="chip-label" htmlFor="cat-levels">All Levels</label>

                <input className="chip-input" type="radio" id="cat-beg" name="course-cat" />
                <label className="chip-label" htmlFor="cat-beg">Beginner</label>

                <input className="chip-input" type="radio" id="cat-int" name="course-cat" />
                <label className="chip-label" htmlFor="cat-int">Intermediate</label>

                <input className="chip-input" type="radio" id="cat-adv" name="course-cat" />
                <label className="chip-label" htmlFor="cat-adv">Advanced</label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-courses-section" aria-label="popular courses">
        <div className="popular-container">
          <div className="section-header">
            <div className="header-content">
              <h2 className="section-title">Popular Courses</h2>
              <p className="section-subtitle">Start with our most popular courses</p>
            </div>
            <button className="view-all-btn">View All Courses</button>
          </div>
          
          <div className="popular-grid">

            {courses.map((course) => (
              <Courses_CoursesCards key={course.id} courses={course} onEnroll={handleEnrollment} />
            ))}

            
          </div>
        </div>
      </section>
      
      {}
      <section className="cta-section" aria-label="ready-to-start">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start Learning?</h2>
          <p className="cta-subtitle">Join thousands of students who are already transforming their careers with our expert-led courses.</p>
        </div>
      </section>
    </>
  )
}


export default Courses