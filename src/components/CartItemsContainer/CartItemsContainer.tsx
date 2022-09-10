import { IProduct } from 'common/types/product.interface';
import CartItem from 'components/CartItem/CartItem';
import React from 'react';

const CartItemsContainer = ({ products }) => {
  return (
    <React.Fragment>
      {!products.length ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-secondary my-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        products.map((product: IProduct) => (
          <CartItem product={product} key={product.id} />
        ))
      )}
    </React.Fragment>
  );
};

export default CartItemsContainer;
