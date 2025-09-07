import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Navbar.css'
import Logo from '../assets/Logo.png';

function Navbar({ user, onLogout }) {
  const isAdmin = user && user.role === 'admin';
  if (isAdmin) {
    return (
      <nav className="navbar admin-navbar">
        <div className="admin-navbar-left">
          <img className='admin-navbar-logo' src={Logo} alt="logo" />
          <span className="admin-navbar-title">LearnHub</span>
        </div>
        <div className="admin-navbar-right">
          <span className="admin-navbar-user-name">{user.username}</span>
          {user.role && <span className="admin-navbar-role">{user.role}</span>}
          <Link to="/">
            <button className="admin-navbar-logout" onClick={onLogout} aria-label="Log out">Logout</button>
          </Link>
        </div>
      </nav>
    );
  }
  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <img className='navbar-logo' src={Logo} alt="logo" />
        <span className="navbar-title">LearnHub</span>
      </div>
      <ul className='nav-links'>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <ul className='nav-links-right'>
        {user ? (
          <>
            <li className="navbar-username">
              <div className="navbar-user-info">
                <span className="navbar-user-name">{user.username}</span>
                {user.role && <span className="navbar-role">{user.role}</span>}
                <Link to="/cart" className="navbar-cart-icon" title="Cart">🛒</Link>
              </div>
            </li>
            <li>
              <Link to="/">
                <button className="navbar-logout" onClick={onLogout} aria-label="Log out">
                  Logout
                </button>
              </Link>
            </li>
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