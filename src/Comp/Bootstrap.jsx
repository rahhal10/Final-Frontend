import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import '../Css/Bootstrap.css';

function Bootstrap({ user, onLogout }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const profileInitial = user?.username
    ? user.username[0].toUpperCase()
    : 'U';

  return (
    <>
      <button className="navbar-profile-btn" onClick={handleShow}>
        {profileInitial}
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>

        {/* flex column ONLY to push logout down */}
        <Offcanvas.Body className="profile-offcanvas-body">
          <div>
            {/* profile card */}
            <div className="profile-info">
              <div className="profile-avatar">{profileInitial}</div>
              <div className="profile-username">{user?.username}</div>
              <div className="profile-role">{user?.role}</div>
            </div>

            {/* buttons keep SAME classes */}
            {user?.role !== 'admin' && (
              <div className="profile-actions">
                <Button
                  variant="outline-primary"
                  className="w-100 mb-3"
                  as={Link}
                  to="/cart"
                  onClick={handleClose}
                >
                  🛒 View Cart
                </Button>

                <Button
                  variant="outline-primary"
                  className="w-100"
                  as={Link}
                  to="/chat"
                  onClick={handleClose}
                >
                  💬 Chatbot
                </Button>
              </div>
            )}
          </div>
          

          {/* Logout pushed to bottom */}
          <div className="profile-actions profile-logout-bottom">
           <Link to="/"><Button
              variant="danger"
              className="w-100"
              onClick={() => {
                handleClose();
                onLogout && onLogout();
              }}
            >
              🚪 Logout
            </Button></Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Bootstrap;
