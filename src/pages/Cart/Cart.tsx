import Navbar from '../../components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import React from 'react';
import CartItemsContainer from 'components/CartItemsContainer/CartItemsContainer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProducsInCart } from 'features/user/userSlice';

const Cart = () => {
  const productsData = useSelector(selectProducsInCart);

  return (
    <React.Fragment>
      <Navbar />
      <main className="mt-11 ff-lato-4">
        <section className="container-xxl my-4 ff-lato-4 min-h-400px">
          {!productsData ? (
            <div className="text-center py-5 border shadow rounded">
              <h2 className="mt-4 p-2 fs-4">It seems that the cart is empty</h2>
              <p className="fs-4 fw-bold my-3">¯\_(ツ)_/¯</p>
              <Link className="btn btn-primary px-5 my-3" to="/">
                Add products
              </Link>
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9">
                <h2 className="fw-bold py-3 text-center text-lg-start">
                  Shopping Cart
                </h2>
                <CartItemsContainer productsData={productsData} />
              </div>
              <div className="col-10 col-sm-8 col-md-6 col-lg-3">
                <div className="boder shadow text-center text-lg-start">
                  {/* TODO: This is handled by redux status */}
                  <p className="fs-5 fw-bold px-3 pt-3">Subtotal (0) items</p>
                  <p className="border-bottom pb-3 px-3">$1412</p>
                  <div className="px-3 pb-3 text-center">
                    <button className="btn btn-dark">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
