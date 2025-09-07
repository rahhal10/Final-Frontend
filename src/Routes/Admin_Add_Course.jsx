import React, { useState } from 'react';
import '../Css/Admin_CoursesMangment.css';
import { Link } from 'react-router-dom';

function Admin_Add_Course() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const [lessonsCount, setLessonsCount] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleAddCourse =  async (e) => {
    e.preventDefault();
    const newCourse = {
      title,
      description,
      instructor,
      rating: parseFloat(rating),
      duration,
      lessonsCount: parseInt(lessonsCount),
      price: parseFloat(price),
      imageUrl,
      category,
    };

 try {
      const response = await fetch('http://localhost:5000/api/admin/addadmincourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });
      if (!response.ok) {
        throw new Error('Failed to add course');
      }
      setTitle("");
      setDescription("");
      setInstructor("");
      setRating("");
      setDuration("");
      setLessonsCount("");
      setPrice("");
      setImageUrl("");
      setCategory("");


      alert('Course added successfully!');
    } catch (error) {
      alert(error.message);
    }
    
  };

  return (
    <div className="admin-courses-add-page">
      <div className="admin-courses-add-form-container">
        <form className="admin-courses-form" onSubmit={handleAddCourse}>
          <h2 className="admin-courses-title">Add New Course</h2>
          <input
            type="text"
            placeholder="Title"
            className="admin-courses-input"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="admin-courses-input"
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Instructor"
            className="admin-courses-input"
            required
            value={instructor}
            onChange={e => setInstructor(e.target.value)}
          />
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            placeholder="Rating"
            className="admin-courses-input"
            required
            value={rating}
            onChange={e => setRating(e.target.value)}
          />
          <input
            type="text"
            placeholder="Duration"
            className="admin-courses-input"
            required
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />
          <input
            type="number"
            min="1"
            placeholder="Lessons Count"
            className="admin-courses-input"
            required
            value={lessonsCount}
            onChange={e => setLessonsCount(e.target.value)}
          />
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder="Price"
            className="admin-courses-input"
            required
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="admin-courses-input"
            required
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            className="admin-courses-input"
            required
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <div className="admin-courses-form-actions">
            <button type="submit" className="admin-courses-add-btn">Add</button>
            <Link to="/admin_courses">
              <button type="button" className="admin-courses-action-btn delete">Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin_Add_Course;
