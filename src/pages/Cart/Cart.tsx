import Navbar from '../../components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import React, { useEffect, useState } from 'react';
import CartItemsContainer from 'components/CartItemsContainer/CartItemsContainer';
import { Link } from 'react-router-dom';
import { selectProducsInCart } from 'features/user/userSlice';
import { useAppSelector } from 'hooks/preTyped';
import { ICartProduct } from 'common/types/cart.interface';
import CartSubtotal from 'components/CartSubtotal/CartSubtotal';

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);

  const productsData: Array<ICartProduct> = useAppSelector(selectProducsInCart);

  useEffect(() => {
    if (productsData) {
      const totalPrice = productsData.reduce(
        (acc, { data: { discountedPrice }, quantity }) =>
          acc + discountedPrice * quantity,
        0
      );
      setSubtotal(totalPrice);
    }
  }, [productsData]);

  return (
    <React.Fragment>
      <Navbar />
      <main className="mt-11 ff-lato-4">
        <section className="container-xxl my-4 ff-lato-4 min-h-400px">
          {productsData.length === 0 ? (
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
                <CartItemsContainer productsData={productsData} />
              </div>
              <div className="col-10 col-sm-8 col-md-6 col-lg-3">
                <CartSubtotal
                  productsQuantity={productsData.length}
                  subtotal={subtotal}
                />
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
