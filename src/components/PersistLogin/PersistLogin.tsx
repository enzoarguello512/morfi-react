import { Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { getLocalValue } from 'hooks/useLocalStorage';
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
  const [getCart] = userApiSlice.endpoints.getCart.useLazyQuery();

  const token = useSelector(selectCurrentToken);
  const persist = getLocalValue('persist');

  const isUnitialized = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        // This renews our "access token" in case we still have a valid "refresh token"
        const payload = await refresh().unwrap();
        dispatch(setCredentials({ ...payload }));
        // This loads the shopping cart in case of reloading the page in the shopping cart("/cart")
        const user: IUser = decryptJwt(payload.accessToken);
        if (user.cart.id) {
          const payload: ICart = await getCart(user.cart.id).unwrap();
          dispatch(setCart(payload));
        }
      } catch (err) {
        // We only display an error on the console due to the fact that it is a call that can be executed multiple times.
        console.error(err);
      } finally {
        // We release the user from the loading screen (which by default starts true in all protected views)
        dispatch(setLoadingSession(false));
      }
    };

    //Avoids unwanted call to verifyRefreshToken
    if (!token && persist && isUnitialized.current) {
      isUnitialized.current = false;
      verifyRefreshToken();
    } else if (!persist) {
      // Prevents loading screen from displaying infinitely if persistence is not enabled
      dispatch(setLoadingSession(false));
    }
  }, [dispatch, getCart, persist, refresh, token]);

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
