
import Admin_Users from '../Comp/Admin_Users';
import { Link } from 'react-router-dom';
import { useEffect} from 'react';
import { useState } from 'react';

function Admin_UserMangment() {


  const [users, setUsers] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:5000/api/admin/adminusers');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setUsers([]);
    }
  }


  const deleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    setDeletingId(id);
    try {
      const response = await fetch('http://localhost:5000/api/admin/deluser', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (response.ok) {
        fetchUsers();
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setDeletingId(null);
    }
  };


   useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div className="admin-dashboard-container">
      <aside className="admin-dashboard-sidebar">
        <div className="admin-dashboard-logo-row">
          <span className="admin-dashboard-logo">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#7c3aed" d="M12 3L2 9l10 6 10-6-10-6zm0 2.18L18.09 9 12 12.82 5.91 9 12 5.18zM4 10.09v5.18c0 2.21 3.58 4 8 4s8-1.79 8-4v-5.18l-8 4.8-8-4.8z"/></svg>
          </span>
          <span className="admin-dashboard-logo-text">EduAdmin</span>
        </div>
        <nav className="admin-dashboard-nav">
          <div className="admin-dashboard-nav-btns">
            <Link to="/admin_dashboard"><button className="admin-dashboard-nav-btn"><span className="icon">🏠</span> Dashboard</button></Link>
            <Link to="/admin_courses"><button className="admin-dashboard-nav-btn"><span className="icon">📚</span> Course Management</button></Link>
            <Link to="/admin_users"><button className="admin-dashboard-nav-btn active"><span className="icon">👥</span> Users Management</button></Link>
          </div>
        </nav>
      </aside>
      <main className="admin-user-mgmt-main">
        <div className="admin-user-mgmt-header-row">
          <h1 className="admin-user-mgmt-title">Users Management</h1>
          <Link to="/admin_add_user"><button className="admin-user-mgmt-add-btn">
            <span className="icon">+</span> Add New User
          </button></Link>
        </div>
        <section className="admin-user-mgmt-section">
          <div className="admin-user-mgmt-section-header">
            <h2 className="admin-user-mgmt-section-title">Users <span className="admin-user-mgmt-count">({users.length})</span></h2>
          </div>
          <div className="admin-user-mgmt-list">
            <div className="admin-user-mgmt-list-header">
              <span>Email</span>
              <span>Username</span>
              <span>Role</span>
            </div>



            {users.map((user) => (
              <Admin_Users key={user.id} users={user} deleteUser={deleteUser} />
            ))}




          </div>
        </section>
      </main>
    </div>
  );
}

export default Admin_UserMangment;