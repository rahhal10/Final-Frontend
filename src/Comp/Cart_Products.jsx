import React from 'react'

function Cart_Products({ coursesInCart , delItem , updateQuantity}) {
  return (
    <>  <div className="cart-item">
            <img className="thumb" src={coursesInCart.image_url} alt="course" />
            <div className="item-main">
              <div className="item-meta">
                <span className="tag">{coursesInCart.tag || 'Development'}</span>
                <h3 className="item-title">{coursesInCart.title}</h3>
                <div className="author">by {coursesInCart.instructor}</div>
                {/* move price under author/title */}
                <div className="price">
                  <div className="price-amount">{`$${coursesInCart.price}`}</div>
                </div>
                <div className="item-stats">{coursesInCart.duration} · {coursesInCart.lessons_count} lessons · <span className="star">★ {coursesInCart.rating}</span></div>
              </div>

              <div className="item-actions">
                <div className="qty">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => updateQuantity(coursesInCart.id, Math.max(1, coursesInCart.quantity - 1))}
                    aria-label="Decrease quantity"
                  >−</button>
                  <div className="qty-num">{coursesInCart.quantity}</div>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => updateQuantity(coursesInCart.id, coursesInCart.quantity + 1)}
                    aria-label="Increase quantity"
                  >+</button>
                </div>

                <button  type="button" className="remove" aria-label="Remove item" title="Remove item" onClick={() => delItem(coursesInCart.id)}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path d="M3 6h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div></>
  )
}

export default Cart_Products