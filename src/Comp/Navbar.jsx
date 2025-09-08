import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Navbar.css'
import Logo from '../assets/Logo.png';
import Bootstrap from './Bootstrap.jsx'

function Navbar({ user, onLogout }) {
  const isAdmin = user && user.role === 'admin';
  if (isAdmin) {
    return (
      <nav className="navbar admin-navbar">
        <div className="admin-navbar-left">
          <img className='admin-navbar-logo' src={Logo} alt="logo" />
          <span className="admin-navbar-title">LearnHub</span>
        </div>
       <Bootstrap user={user} onLogout={onLogout} />
      </nav>
    );
  }
  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <img className='navbar-logo' src={Logo} alt="logo" />
        <span className="navbar-title">LearnHub</span>
      </div>
      {user && (
        <ul className='nav-links'>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      )}
      <ul className='nav-links-right'>
        {user ? (
          <>
           <li><Bootstrap user={user} onLogout={onLogout} /></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Log In</Link></li>
            <li id='Signup'><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar