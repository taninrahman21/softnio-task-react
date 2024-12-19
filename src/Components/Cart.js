import React from "react";
import { FaXmark } from "react-icons/fa6";
import purple from '../assets/purple.png';
import cyan from '../assets/cyan.png';
import blue from '../assets/blue.png';
import black from '../assets/black.png';

const CartModal = ({ show, handleClose, cart, totalQuantity }) => {

  const colorImages = {
    purple: purple,
    cyan: cyan,
    blue: blue,
    black: black,
  };


  const totalPrice = cart.reduce((acc, curr) => {
    return acc + (curr.price * curr.quantity);
  }, 0);

  

  return (
    <>
      {/* Modal */}
      <div className={`position-absolute top-50 start-50 translate-middle bg-white rounded overflow-hidden border w-75 z-3 ${show ? "d-block" : "d-none"}`} style={{ width: '90%', maxWidth: '40rem' }} >
        <div className="p-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h4 text-dark">Your Cart</h1>
            <button
              className="p-0 border-0 bg-body"
              onClick={handleClose}
              style={{
                fontSize: "1.5rem", // text-2xl
                color: "#6c757d", // text-gray-400
              }}
            >
              <FaXmark />
            </button>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="w-100">
              <thead>
                <tr style={{ borderBottom: "1px dotted #dee2e6" }}>
                  <th className="text-start pb-2">Item</th>
                  <th className="text-start pb-2">Color</th>
                  <th className="text-start pb-2">Size</th>
                  <th className="text-start pb-2">Qnt</th>
                  <th className="text-end pb-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((item, index) => {
                    return (
                        <tr key={index}>
                          <td className="py-3">
                            <div className="d-flex align-items-center">
                              <img
                              src={colorImages[item.image]}
                                alt={item.name}
                                style={{
                                  height: "50px",
                                  width: "50px"
                                }}
                                className="rounded-2"
                              />
                              <span className="fw-medium ms-3">{item.name}</span>
                            </div>
                          </td>
                          <td className="py-3">{item.color.charAt(0).toUpperCase() + item.color.slice(1)}</td>
                          <td className="py-3">{item.size}</td>
                          <td className="py-3">{item.quantity}</td>
                          <td className="py-3 text-end">${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    )
                  })
                }
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="pt-3"></td>
                  <td
                    className="pt-3 fw-medium text-dark"
                    style={{ fontWeight: "500" }}
                  >
                    {totalQuantity}
                  </td>
                  <td
                    className="pt-3 text-end fw-medium text-dark"
                    style={{ fontWeight: "500" }}
                  >
                    ${totalPrice}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Actions */}
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button
              className="btn btn-outline-secondary"
              style={{
                padding: "0.5rem 1rem",
              }}
            >
              Continue Shopping
            </button>
            <button
              className="btn btn-primary"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#007bff", // bg-blue-500
                borderColor: "#007bff", // same as bg
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;