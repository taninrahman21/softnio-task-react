import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';

const Main = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <Header setShow={setShow} show={show} />
      <Product show={show} handleClose={handleClose} handleShow={handleShow} />
      <Footer />
    </div>
  );
};

export default Main;