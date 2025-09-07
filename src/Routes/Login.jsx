import React, { useEffect, useState } from "react";
import "../Css/Login.css";
import Logo from "../assets/Logo.png";
import {Link} from "react-router-dom";

  const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("http://localhost:5000/api/users/Login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (!res.ok) {
          console.error("Login failed", data);
          return;
        }

  setUser({ username: data?.username, role: data?.role });
  onLogin && onLogin({ email, username: data?.username , role: data?.role });
      } catch (err) {
        console.error("Login error:", err);
      }
    };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo-row">
          <img src={Logo} alt="LearnHub Logo" className="login-logo" />
          <span className="login-title">LearnHub</span>
          <span className="login-beta">Beta</span>
        </div>
        <h1 className="login-welcome">Welcome back</h1>
        <p className="login-subtitle">Sign in to your account to continue learning</p>


  <form className="login-form" onSubmit={handleSubmit}>
          <label>Email address</label>
          <div className="login-input-row">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <label>Password</label>
          <div className="login-input-row">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-options-row">
            <a href="#" className="login-forgot" onClick={e => e.preventDefault()}>
              Forgot password?
            </a>
          </div>
         
          {!user?.role ? (
            <button type="submit" className="login-btn">Sgn In</button>
          ) : (
            <Link to={user.role === 'admin' ? '/admin_home' : '/dashboard'}>
              <button type="button" className="login-btn">Go to Dashboard</button>
            </Link>
          )}
        </form>


        <div className="login-divider">
          <span></span>
          <span>OR CONTINUE WITH</span>
          <span></span>
        </div>
        <div className="login-social-row">
          <button className="login-social-btn google">
            <span className="login-social-svg">
              <svg width="22" height="22" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.22l6.9-6.9C35.62 2.36 30.13 0 24 0 14.61 0 6.36 5.74 2.44 14.09l8.06 6.27C12.6 13.13 17.82 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9.02h12.44c-.54 2.9-2.16 5.36-4.6 7.02l7.18 5.59C43.98 37.13 46.1 31.22 46.1 24.5z"/><path fill="#FBBC05" d="M10.5 28.36c-1.13-3.36-1.13-6.96 0-10.32l-8.06-6.27C.86 15.61 0 19.68 0 24c0 4.32.86 8.39 2.44 12.23l8.06-6.27z"/><path fill="#EA4335" d="M24 48c6.13 0 11.62-2.02 15.8-5.5l-7.18-5.59c-2.01 1.35-4.57 2.09-8.62 2.09-6.18 0-11.4-3.63-13.5-8.86l-8.06 6.27C6.36 42.26 14.61 48 24 48z"/></g></svg>
            </span>
            Google
          </button>
          <button className="login-social-btn github">
            <span className="login-social-svg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.7.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.09-2.71 0 0 .83-.27 2.73 1.05a9.13 9.13 0 012.49-.34c.85 0 1.71.12 2.49.34 1.9-1.32 2.73-1.05 2.73-1.05.53 1.41.19 2.45.09 2.71.62.72 1 1.63 1 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="#181717"/></svg>
            </span>
            GitHub
          </button>
        </div>
        <div className="login-signup-row">
          <span>Don't have an account? </span>
          <Link to="/signup" className="login-signup-link">Sign up for free</Link>
        </div>
      </div>
      <div className="login-right">
        <div className="login-right-content">
          <div className="login-right-icon">
            {/* Book SVG icon for visual match */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" fill="white" fillOpacity="0.08"/>
              <path d="M28 32C28 30.8954 28.8954 30 30 30H50C51.1046 30 52 30.8954 52 32V50C52 51.1046 51.1046 52 50 52H30C28.8954 52 28 51.1046 28 50V32Z" stroke="#fff" strokeWidth="2.5"/>
              <path d="M40 30V52" stroke="#fff" strokeWidth="2.5"/>
            </svg>
          </div>
          <h2 className="login-right-title">Learn Without Limits</h2>
          <p className="login-right-desc">
            Master new skills with expert instructors, interactive quizzes, and personalized learning paths.
          </p>
          <div className="login-right-stats">
            <div>
              <span className="login-right-stat-num">50,000+</span>
              <span className="login-right-stat-label">Students</span>
            </div>
            <div>
              <span className="login-right-stat-num">1,200+</span>
              <span className="login-right-stat-label">Courses</span>
            </div>
            <div>
              <span className="login-right-stat-num">4.9</span>
              <span className="login-right-stat-label">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
