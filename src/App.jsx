import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Footer from './Comp/Footer'
import Navbar from './Comp/Navbar'
import Login from './Routes/Login'
import Signup from './Routes/Signup'
import { useState } from 'react'

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
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
