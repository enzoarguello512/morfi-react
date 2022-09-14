import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICart, ICartProduct } from 'common/types/cart.interface';
import {
  useDeleteCartProductMutation,
  useUpdateProductQtyMutation,
} from 'features/user/userApiSlice';
import {
  removeCartProduct,
  selectCurrentUser,
  setCart,
} from 'features/user/userSlice';
import { useAppDispatch, useAppSelector } from 'hooks/preTyped';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { debounce } from 'util/debounce';

const CartItem = ({ productData }) => {
  const { data: product, quantity } = productData as ICartProduct;
  const [count, setCount] = useState(quantity);
  const dispatch = useAppDispatch();
  const [deleteById, { isLoading }] = useDeleteCartProductMutation();
  const user = useAppSelector(selectCurrentUser);
  const [updateProductQty, { isLoading: isProductLoading }] =
    useUpdateProductQtyMutation();

  const increaseQuantity = useCallback(
    debounce(async (quantity: number): Promise<void> => {
      try {
        const payload: ICart = await updateProductQty({
          cartId: user.cart.id,
          productId: product.id,
          quantity,
        }).unwrap();
        dispatch(setCart(payload));
      } catch (err) {
        throw err;
      }
    }, 1000),
    []
  );

  const countHandler = (action: string): void => {
    let value: number = count;
    if (count < product.stock && action === 'add') setCount(++value);
    if (count > 1 && action === 'substract') setCount(--value);
    if (value > 0 && value <= product.stock) {
      increaseQuantity(value);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    try {
      let value = parseInt(e.target.value.replace(/\D/g, ''));
      if (value > 0 && value <= product.stock) {
        if (String(value) === '' || value === 0) value = 1;
      } else {
        value = 1;
      }
      setCount(value);
      increaseQuantity(value);
    } catch (err) {
      let message = 'No Server Response';
      if (err.status >= 400 && err.status < 500) {
        message = err.data?.message || 'Bad Request';
        toast.error(message);
      } else {
        toast.error(message);
      }
    }
  };

  const handleRemove = async (): Promise<void> => {
    try {
      await deleteById({
        cartId: user.cart.id,
        productId: product.id,
      }).unwrap();
      dispatch(removeCartProduct(product.id));
    } catch (err) {
      let message = 'No Server Response';
      if (err.status >= 400 && err.status < 500) {
        message = err.data?.message || 'Bad Request';
        toast.error(message);
      } else {
        toast.error(message);
      }
    }
  };

  return (
    <div className="border-bottom py-4 px-4 ff-lato-4 overflow-hidden bg-light border-bottom mb-3 rounded">
      <div className="row justify-content-center">
        <div className="col-3 col-sm-1 p-2 p-md-0 text-center">
          <button
            className="btn btn-outline-dark bg-gradient"
            onClick={handleRemove}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
        <div className="col-12 col-md-6 col-xl-7 overflow-hidden">
          <div className="text-truncate">
            <div className="d-flex align-items-center flex-column flex-md-row justify-content-center justify-content-sm-start text-center text-md-start">
              <figure className="m-0 text-center">
                <img
                  className="img-rez rounded w-60px h-60px"
                  src={product.imageUrl}
                  alt={product.name}
                />
              </figure>
              <div className="mx-2">
                <div className="fw-bold mb-1 text-truncate-1 cart-title-250px">
                  {product.name}
                </div>
                <div className="text-truncate-1">{product.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-md-3 col-xl-2">
          <div className="input-group justify-content-center border rounded">
            <button
              className="btn btn-white bg-white"
              onClick={() => countHandler('substract')}
            >
              -
            </button>
            <input
              className="form-control text-center border-0"
              aria-label="item quantity"
              value={count}
              onChange={handleInput}
            />
            <button
              className="btn btn-white bg-white"
              onClick={() => countHandler('add')}
            >
              +
            </button>
          </div>
          <div className="text-center">
            <span className="text-muted">{product.stock} available</span>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-2 fw-bold fs-5 order-1 order-md-0 text-center text-md-end my-0 my-sm-3 my-md-0">
          {isProductLoading ? (
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            `$${(product.discountedPrice * count).toFixed(2)}`
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
