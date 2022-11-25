import { Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentToken,
  setCart,
  setCredentials,
  setLoadingSession,
} from 'features/user/userSlice';
import { userApiSlice, useRefreshMutation } from 'features/user/userApiSlice';
import LoadingPage from 'components/LoadingPage/LoadingPage';
import { IUser } from 'common/types/user.interface';
import { decryptJwt } from 'util/decryptJwt';
import { ICart } from 'common/types/cart.interface';

const PersistLogin = () => {
  const [refresh, { isLoading }] = useRefreshMutation();
  const token = useSelector(selectCurrentToken);
  const [persist] = useLocalStorage('persist', false);
  const isUnitialized = useRef(true);
  const dispatch = useDispatch();
  const [getCart, { isLoading: isQueryLoading }] =
    userApiSlice.endpoints.getCart.useLazyQuery();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const payload = await refresh().unwrap();
        dispatch(setCredentials({ ...payload }));
        const user: IUser = decryptJwt(payload.accessToken);
        if (user.cart.id) {
          const payload: ICart = await getCart(user.cart.id).unwrap();
          dispatch(setCart(payload));
        }
      } catch (err) {
        console.error(err);
      } finally {
        dispatch(setLoadingSession(false));
      }
    };

    //Avoids unwanted call to verifyRefreshToken
    if (!token && persist && isUnitialized.current) {
      isUnitialized.current = false;
      verifyRefreshToken();
    }
  }, []);

  return (
    <>
      {!persist ? (
        <Outlet />
      ) : isLoading ? (
        <LoadingPage message={'Loading session'} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
