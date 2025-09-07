import React, { useState } from 'react';
import '../Css/Admin_CoursesMangment.css';


function Admin_CourseCard({ adminCourse, deleteCourse, editCourse }) {
  const [isEditing, setIsEditing] = useState(false);
  const [instructor, setInstructor] = useState(adminCourse.instructor);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setInstructor(adminCourse.instructor);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (instructor !== adminCourse.instructor) {
      editCourse(adminCourse.id, instructor);
    }
    setIsEditing(false);
  };


  return (
    <div className="admin-courses-card">
      <div className="admin-courses-card-header">
        <span className="admin-courses-card-title">{adminCourse.title}</span>
        <span className="admin-courses-card-actions">
          {isEditing ? (
            <>
              <button className="admin-courses-action-btn save" title="Save" onClick={handleSave}>Save</button>
              <button className="admin-courses-action-btn cancel" title="Cancel" onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button className="admin-courses-action-btn edit" title="Edit" onClick={handleEditClick}>Edit</button>
          )}
          <button className="admin-courses-action-btn delete" title="Delete" onClick={() => deleteCourse(adminCourse.id)}>Delete</button>
        </span>
      </div>
      <div className="admin-courses-card-description">
        {adminCourse.description}
      </div>
      <div className="admin-courses-card-meta">
        {isEditing ? (
          <input
            type="text"
            value={instructor}
            onChange={e => setInstructor(e.target.value)}
            className="admin-courses-instructor-input"
          />
        ) : (
          <span>{adminCourse.instructor}</span>
        )}
      </div>
    </div>
  );
}

export default Admin_CourseCard;
