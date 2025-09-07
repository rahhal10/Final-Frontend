import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Comp/Navbar.jsx'
import Home from './Routes/Home.jsx'
import Dashboard from './Routes/Dashboard.jsx'
import Courses from './Routes/Courses.jsx'
import About from './Routes/About.jsx'
import Footer from './Comp/Footer.jsx'
import Cart from './Routes/Cart.jsx'
import Login from './Routes/Login.jsx'
import Signup from './Routes/Signup.jsx'
import Admin_Home from './Routes/Admin_Home.jsx'
import Admin_Dashboard from './Routes/Admin_Dashboard.jsx'
import Admin_CoursesMangment from './Routes/Admin_CoursesMangment.jsx'
import Admin_UserMangment from './Routes/Admin_UserMangment.jsx'
import Admin_Add_Course from './Routes/Admin_Add_Course.jsx'
import Admin_Add_User from './Routes/Admin_Add_User.jsx'
import React, { useState } from 'react';



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
        <Route path="/dashboard" element={user  ? <Dashboard user={user} /> : <Home />} />
        <Route path="/courses" element={user ? <Courses user={user} /> : <Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={user ? <Cart user={user} /> : <Home />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/signup" element={<Signup />} />

        
        <Route path="/admin_home" element={<Admin_Home />} />
        <Route path="/admin_dashboard" element={<Admin_Dashboard user={user} />} />
        <Route path="/admin_courses" element={<Admin_CoursesMangment />} />
        <Route path="/admin_users" element={<Admin_UserMangment />} />
        <Route path="/admin_add_course" element={<Admin_Add_Course />} />
        <Route path="/admin_add_user" element={<Admin_Add_User />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
