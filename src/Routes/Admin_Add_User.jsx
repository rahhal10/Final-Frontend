import React, { useState } from 'react';
import '../Css/Admin_Add_User.css';
import { Link } from 'react-router-dom';

function Admin_Add_User() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleAddUser = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      username,
      password,
      role,
    };
    try {
      const response = await fetch('http://localhost:5000/api/admin/addadminuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      setEmail("");
      setUsername("");
      setPassword("");
      setRole("");
      alert('User added successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="admin-user-add-page">
      <div className="admin-user-add-form-container">
        <form className="admin-user-form" onSubmit={handleAddUser}>
          <h2 className="admin-user-title">Add New User</h2>
          <input
            type="email"
            placeholder="Email"
            className="admin-user-input"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="admin-user-input"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="admin-user-input"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <select
            className="admin-user-input"
            required
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="" disabled>Select role</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
          <div className="admin-user-form-actions">
            <button type="submit" className="admin-user-add-btn">Add</button>
            <Link to="/admin_users">
              <button type="button" className="admin-user-action-btn delete">Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin_Add_User;
