
import React, { useState } from 'react';
import '../Css/Signup.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
    const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
       if (!username || !email || !password || !role) {
      alert("Please fill in all fields.");
      return;
    }
    const signupData = { username, email, password, role };
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData)
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Signup successful:', result);
        setSignupSuccess(true);
      } else {

        if (result.error ) {
          window.alert("Account already exists.");
        } else {
          window.alert("Signup failed.");
        }
      }
    } catch (err) {
      window.alert("Network error. Please try again.");
    }
  };



  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-logo-row">
          <img src={Logo} alt="LearnHub Logo" className="signup-logo" />
          <span className="signup-title">LearnHub</span>
          <span className="signup-beta">Beta</span>
        </div>
        <h1 className="signup-welcome">Welcome</h1>
        <p className="signup-subtitle">Sign up to start your learning journey</p>

  <form className="signup-form" onSubmit={handleSubmit}>
          <label>Username</label>
          <div className="signup-input-row">
            <input
              type="text"
              placeholder="Enter your username"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <label>Email address</label>
          <div className="signup-input-row">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <label>Password</label>
          <div className="signup-input-row">
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <label>Role</label>
          <div className="signup-input-row">
              <select required value={role} onChange={e => setRole(e.target.value)}>
                <option value="user">user</option>
                <option value="admin">admin</option>
              </select>
          </div>
          <div className="signup-options-row">
            <a href="#" className="signup-forgot" onClick={e => e.preventDefault()}>
              Forgot password?
            </a>
          </div>
          {signupSuccess ? (
            <Link to="/login">
              <button type="button" className="signup-btn">Go to Login</button>
            </Link>
          ) : (
            <button type="submit" className="signup-btn" onClick={handleSubmit}>Sign Up</button>
          )}
        </form>

        <div className="signup-divider">
          <span></span>
          <span>OR CONTINUE WITH</span>
          <span></span>
        </div>
        <div className="signup-social-row">
          <button className="signup-social-btn google">
            <span className="signup-social-svg">
              <svg width="22" height="22" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.22l6.9-6.9C35.62 2.36 30.13 0 24 0 14.61 0 6.36 5.74 2.44 14.09l8.06 6.27C12.6 13.13 17.82 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9.02h12.44c-.54 2.9-2.16 5.36-4.6 7.02l7.18 5.59C43.98 37.13 46.1 31.22 46.1 24.5z"/><path fill="#FBBC05" d="M10.5 28.36c-1.13-3.36-1.13-6.96 0-10.32l-8.06-6.27C.86 15.61 0 19.68 0 24c0 4.32.86 8.39 2.44 12.23l8.06-6.27z"/><path fill="#EA4335" d="M24 48c6.13 0 11.62-2.02 15.8-5.5l-7.18-5.59c-2.01 1.35-4.57 2.09-8.62 2.09-6.18 0-11.4-3.63-13.5-8.86l-8.06 6.27C6.36 42.26 14.61 48 24 48z"/></g></svg>
            </span>
            Google
          </button>
          <button className="signup-social-btn github">
            <span className="signup-social-svg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.7.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.09-2.71 0 0 .83-.27 2.73 1.05a9.13 9.13 0 012.49-.34c.85 0 1.71.12 2.49.34 1.9-1.32 2.73-1.05 2.73-1.05.53 1.41.19 2.45.09 2.71.62.72 1 1.63 1 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="#181717"/></svg>
            </span>
            GitHub
          </button>
        </div>
        <div className="signup-signup-row">
          <span>Already have an account? </span>
          <Link to="/login" className="signup-signup-link">Sign in</Link>
        </div>
      </div>
      <div className="signup-right">
        <div className="signup-right-content">
          <div className="signup-right-icon">
            {/* Book SVG icon for visual match */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" fill="white" fillOpacity="0.08"/>
              <path d="M28 32C28 30.8954 28.8954 30 30 30H50C51.1046 30 52 30.8954 52 32V50C52 51.1046 51.1046 52 50 52H30C28.8954 52 28 51.1046 28 50V32Z" stroke="#fff" strokeWidth="2.5"/>
              <path d="M40 30V52" stroke="#fff" strokeWidth="2.5"/>
            </svg>
          </div>
          <h2 className="signup-right-title">Learn Without Limits</h2>
          <p className="signup-right-desc">
            Master new skills with expert instructors, interactive quizzes, and personalized learning paths.
          </p>
          <div className="signup-right-stats">
            <div>
              <span className="signup-right-stat-num">50,000+</span>
              <span className="signup-right-stat-label">Students</span>
            </div>
            <div>
              <span className="signup-right-stat-num">1,200+</span>
              <span className="signup-right-stat-label">Courses</span>
            </div>
            <div>
              <span className="signup-right-stat-num">4.9</span>
              <span className="signup-right-stat-label">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
