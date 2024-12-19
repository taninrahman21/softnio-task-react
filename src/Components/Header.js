import React from 'react';
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = ({ setShow, show }) => {
  return (
    <header className='border-bottom'>
      <nav className="container">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center" style={{ height: '64px' }}>
            <div className="flex-shrink-0">
              <span className="fs-4 fw-bold" style={{ color: '#9333ea' }}>Softnio</span>
            </div>
            <div className="d-flex align-items-center">
              <button className="border-0 bg-body rounded-circle me-2 position-relative shopping-cart-btn" onClick={() => setShow(!show)}>
                <FaShoppingCart className='fs-4' />
              </button>
              <button className="border-0 bg-body rounded-circle">
                <FaUser className='fs-4' />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;