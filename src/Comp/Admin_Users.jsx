import React from 'react';
import '../Css/Admin_UserMangment.css';

function Admin_Users({ users, deleteUser }) {
  return (
    <div className="admin-user-mgmt-list-item">
      <span>{users.email}</span>
      <span>{users.username}</span>
      <span><span className="admin-user-mgmt-role">{users.role}</span></span>
      <span>
        <button className="admin-user-mgmt-delete-btn" onClick={() => deleteUser(users.id)}>Delete</button>
      </span>
    </div>
  );
}

export default Admin_Users;
