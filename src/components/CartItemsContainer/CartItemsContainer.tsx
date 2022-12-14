import { ICartProduct } from 'common/types/cart.interface';
import CartItem from 'components/CartItem/CartItem';
import React from 'react';

const CartItemsContainer = ({ productsData }) => {
  // productsData: Array<ICartProduct>
  return (
    <React.Fragment>
      <h2 className="fw-bold py-3 text-center text-lg-start">Shopping Cart</h2>
      {!productsData.length ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-secondary my-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        productsData.map((productData: ICartProduct) => (
          <CartItem productData={productData} key={productData.data.id} />
        ))
      )}
    </React.Fragment>
  );
};

export default CartItemsContainer;
