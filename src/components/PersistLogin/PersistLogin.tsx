import { Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentToken,
  setCredentials,
  setLoadingSession,
} from 'features/user/userSlice';
import { useRefreshMutation } from 'features/user/userApiSlice';
import LoadingPage from 'components/LoadingPage/LoadingPage';

const PersistLogin = () => {
  const [refresh, { isLoading }] = useRefreshMutation();
  const token = useSelector(selectCurrentToken);
  const [persist] = useLocalStorage('persist', false);
  const isUnitialized = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const payload = await refresh().unwrap();
        dispatch(setCredentials({ ...payload }));
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
