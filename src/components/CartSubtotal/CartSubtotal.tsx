import { IUser } from 'common/types/user.interface';
import {
  useCreateOrderMutation,
  useUpdateCartMutation,
} from 'features/user/userApiSlice';
import { selectCurrentUser, setCart } from 'features/user/userSlice';
import { useAppDispatch, useAppSelector } from 'hooks/preTyped';
import { toast } from 'react-toastify';

const CartSubtotal = ({ productsQuantity, subtotal }) => {
  const [updateCart] = useUpdateCartMutation();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const user: IUser = useAppSelector(selectCurrentUser);

  const handleOrder = async (e) => {
    try {
      await updateCart({
        cartId: user.cart.id,
        body: {
          products: [],
        },
      }).unwrap();

      //const payload = await createOrder({
      await createOrder({
        userId: user.id,
        cartId: user.cart.id,
      }).unwrap();
      dispatch(
        setCart({
          ...user.cart,
          products: [],
        })
      );
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
    <div className="boder shadow text-center text-lg-start">
      <p className="fs-5 fw-bold px-3 pt-3">
        Subtotal ({productsQuantity}) items
      </p>
      <p className="border-bottom pb-3 px-3">${subtotal.toFixed(2)}</p>
      <div className="px-3 pb-3 text-center">
        <button className="btn btn-dark" onClick={handleOrder}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSubtotal;
