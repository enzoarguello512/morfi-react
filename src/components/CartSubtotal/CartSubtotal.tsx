const CartSubtotal = ({ productsQuantity, subtotal }) => {
  return (
    <div className="boder shadow text-center text-lg-start">
      <p className="fs-5 fw-bold px-3 pt-3">
        Subtotal ({productsQuantity}) items
      </p>
      <p className="border-bottom pb-3 px-3">${subtotal.toFixed(2)}</p>
      <div className="px-3 pb-3 text-center">
        <button className="btn btn-dark">Proceed To Checkout</button>
      </div>
    </div>
  );
};

export default CartSubtotal;
