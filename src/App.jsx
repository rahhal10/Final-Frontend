import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Footer from './Comp/Footer'
import Navbar from './Comp/Navbar'
import Login from './Routes/Login'
import Signup from './Routes/Signup'
import { useState } from 'react'
import Courses from './Routes/Courses'
import Cart from './Routes/Cart'
import Dashboard from './Routes/Dashboard'
import Admin_Home from './Routes/Admin_Home'
import Admin_Dashboard from './Routes/Admin_Dashboard'

function App() {

   const [user, setUser] = useState(() => {
      try {
        const stored = localStorage.getItem('user');
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        return null;
      }
    });

  const onLogin = (loginData) => {
    setUser(loginData);
    console.log('Logged in user:', loginData);
    localStorage.setItem('user', JSON.stringify(loginData));
  };

  const onLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };


  return (
    <>
    <Router>
      <Navbar onLogout={onLogout} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/courses" element={user ? <Courses user={user} /> : <Home />} />
         <Route path="/cart" element={user ? <Cart user={user} /> : <Home />} />
         <Route path="/dashboard" element={user  ? <Dashboard user={user} /> : <Home />} />

         <Route path="/admin_home" element={<Admin_Home />} />
         <Route path="/admin_dashboard" element={<Admin_Dashboard user={user} />} />

      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
