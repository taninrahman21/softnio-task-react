import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import black from '../assets/black.png';
import blue from '../assets/blue.png';
import cyan from '../assets/cyan.png';
import purple from '../assets/purple.png';
import CartModal from './Cart';


const colors = [
  { name: "purple", color: "#c083fc" },
  { name: "cyan", color: "#21d2ed" },
  { name: "blue", color: "#5fa5fa" },
  { name: "black", color: "#000000" }
];
const sizes = [
  { size: 'S', price: 69 },
  { size: 'M', price: 79 },
  { size: 'L', price: 89 },
  { size: 'XL', price: 99 },
];
const colorImages = {
  purple: purple,
  cyan: cyan,
  blue: blue,
  black: black,
};


const Product = ({ show, handleShow, handleClose }) => {
  const [showCheckoutBtn, setShowCheckoutBtn] = useState(false)
  const [selectedColor, setSelectedColor] = useState('purple');
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);


  const totalQuantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const addToCart = (product) => {
    setShowCheckoutBtn(true);
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.size === product.size && item.color === product.color);
      if (existingProduct) {
        return prevCart.map(item =>
          item.size === product.size && item.color === product.color
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };


  const handleAddToCart = () => {
    if (quantity < 1) {
      alert("You can't add product on you cart with 0 quantity");
      return;
    }
    const product = {
      id: 1,
      name: "Classy Modern Smart watch",
      color: selectedColor,
      size: selectedSize,
      price: sizes.find(s => s.size === selectedSize).price,
      quantity: quantity,
      image: selectedColor,
    };
    addToCart(product);
  };

  return (
    <div className="px-4 py-4 flex-grow-1">
      <div className="container m-auto">

        {/* Product */}
        <div className='px-0 px-md-4 d-flex flex-column flex-md-row '>
          <div className="w-100 w-md-50 d-flex justify-content-center align-items-center ratio ratio-4x3">
            <img style={{ width: "90%" }} src={colorImages[selectedColor]} alt="Purple Watch" className="" />
          </div>

          <div className="w-100 w-md-50 ps-md-3 py-4">
            <h1 className="fs-3 fw-bold mb-1">Classy Modern Smart watch</h1>
            <div className="d-flex align-items-center mb-2">
              <div className="me-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className='text-warning' />
                ))}
              </div>
              <span className="text-muted">(2 Reviews)</span>
            </div>
            <p className="fs-4 mb-3">
              <span className="text-muted text-decoration-line-through me-2">$99.00</span>
              <span style={{ color: '#6678ff' }}>$79.00</span>
            </p>
            <p className="text-muted mb-3">
              I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teaching.
            </p>
            <div className="d-flex mb-2">
              <div className="me-4">
                <h6 className="fw-bold">Type</h6>
                <p className="text-muted">Watch</p>
              </div>
              <div>
                <h6 className="fw-bold">Model Number</h6>
                <p className="text-muted">Forerunner 290XT</p>
              </div>
            </div>
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Band Color</h6>
              <div className="d-flex">
                {colors.map(color => (
                  <button
                    key={color.name}
                    className={`btn rounded-circle me-2`}
                    style={{
                      width: '35px',
                      height: '35px',
                      backgroundColor: color.color,
                      outline: selectedColor === color.name ? `2px solid ${color.color}` : 'none',
                      outlineOffset: '3px'
                    }}
                    onClick={() => setSelectedColor(color.name)}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Wrist Size</h6>
              <div className="d-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '10px' }}>
                {sizes.map(({ size, price }) => (
                  <div
                    key={size}
                    className="text-sm-center rounded w-100 d-flex justify-content-center py-1"
                    style={
                      selectedSize === size
                        ? {
                          backgroundColor: '#faf5ff',
                          border: '1px solid #9234eb',
                          color: '#9234eb',
                        }
                        : {
                          backgroundColor: 'white',
                          border: '1px solid #dee2e6',
                          color: '#495057',
                        }
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size} ${price}
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex align-items-center mb-4 w-100">
              <div className="input-group me-3" style={{ width: '120px' }}>
                <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity(q => Math.max(0, q - 1))}>
                  <FaMinus />
                </button>
                <input type="text" className="form-control text-center" value={quantity} readOnly />
                <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity(q => q + 1)}>
                  <FaPlus />
                </button>
              </div>
              <button className="btn me-2" style={{ backgroundColor: '#6678ff', color: 'white' }} onClick={handleAddToCart}>Add to Cart</button>
              <CiHeart className='ms-3 fs-4' />
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className={`justify-content-center my-5 ${showCheckoutBtn ? "d-flex" : "d-none"}`} onClick={handleShow}>
          <button
            className="px-6 py-2 rounded-5 hover:bg-purple-700 hover:text-black checkout-btn border px-4"
            style={{ backgroundColor: '#ffba59', color: '#374b63' }}
          >
            Checkout
            <span className="bg-white px-2 ms-2 hover:text-black">
              {totalQuantity}
            </span>
          </button>
        </div>


        {/* Cart Modal */}
        <CartModal show={show} handleClose={handleClose} cart={cart} totalQuantity={totalQuantity} />

      </div>

    </div>
  );
};

export default Product;