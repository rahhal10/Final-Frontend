import React from 'react'
import '../Css/Cart.css'
import Cart_Products from '../Comp/Cart_Products.jsx'
import { useState} from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Cart({ user , }) {
  const [coursesInCart, setCoursesInCart] = useState([]);

  const fetchCoursesInCart = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/showcart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user?.email,
          username: user?.username,
          role: user?.role
        })
      });
      const data = await response.json();
      setCoursesInCart(data);
    } catch (error) {
      console.error('Failed to fetch courses in cart:', error);
    }
  };


  useEffect(() => {
    fetchCoursesInCart();
  }, []);



  const delItem = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/delcart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (response.ok) {
        fetchCoursesInCart();
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };




  const updateQuantity = async (id, newQuantity) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/updatecartquantity', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, quantity: newQuantity })
      });
      if (response.ok) {
        fetchCoursesInCart();
      } else {
        console.error('Failed to update quantity');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };



  function totalCalc() {
    let total = 0;
    for (let i = 0; i < coursesInCart.length; i++) {
      const item = coursesInCart[i];
      total += item.price * (item.quantity);
    }
    return total;
  }

  function feeCalc() {
    return Math.round(totalCalc() * 0.10);
  }

  function serviceCharge() {
    return 50; 
  }

  function grandTotal() {
    return totalCalc() + feeCalc() + serviceCharge();
  }


  

  const FinalizeEnrollment = async () => {
    // Enroll all courses in cart to the courses table, then remove them from cart using delItem
    try {
      for (const course of coursesInCart) {
        const response = await fetch('http://localhost:5000/api/users/addcoursestouser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
             username: user.username,
            email: user.email,
            title: course.title,
            instructor: course.instructor,
            price: course.price,
            category: course.category,
            duration: course.duration,
            lessons_count: course.lessons_count,
            rating: course.rating,
            image_url: course.image_url,
            description: course.description
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to enroll in course: ' + course.title);
        }

        const data = await response.json();
        console.log('Enrollment successful:', data);

        // Remove course from cart after successful enrollment using delItem
        await delItem(course.id);
      }
      alert('Enrollment finalized! Your courses have been added and removed from cart.');
      // Refresh cart state
      fetchCoursesInCart();
    } catch (error) {
      console.error('Error enrolling in courses:', error);
      alert('Failed to finalize enrollment. Please try again.');
    }
  };
  
  
  return (
    <section className="cart-page">
      <div className="cart-container">
        <div className="cart-list">
          <h2>Your Cart</h2>

           
          {coursesInCart.map((coursesInCart) => (
            <Cart_Products
              key={coursesInCart.id}
              coursesInCart={coursesInCart}
              delItem={delItem}
              updateQuantity={updateQuantity}
            />
          ))}
        

        
        </div>

        <aside className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalCalc()}</span>
          </div>
          <div className="summary-row">
            <span>Fees (10%)</span>
            <span>${feeCalc()}</span>
          </div>
          <div className="summary-row">
            <span>Service Charge</span>
            <span>${serviceCharge()}</span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Grand Total</span>
            <span className="total-amt">${grandTotal()}</span>
          </div>

          <button className="checkout" type="button" aria-label="Proceed to checkout" onClick={FinalizeEnrollment}>
            <span>Proceed to Checkout</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link to="/courses"><button className="continue" type="button">Continue Shopping</button></Link>

          <div className="guarantee">
            <strong>💡 Learning Guarantee</strong>
            <p>30-day money-back guarantee. Learn with confidence!</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Cart