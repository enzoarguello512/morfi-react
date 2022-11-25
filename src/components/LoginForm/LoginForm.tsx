import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCart, setCredentials } from 'features/user/userSlice';
import { useLoginMutation, userApiSlice } from 'features/user/userApiSlice';
import { toast } from 'react-toastify';
import { decryptJwt } from 'util/decryptJwt';
import { useAppDispatch } from 'hooks/preTyped';
import { ILocation } from 'common/types/location.interface';
import { ICredentialToken } from 'common/types/credentials.req.interface';
import { ICart } from 'common/types/cart.interface';
import { IUser } from 'common/types/user.interface';
import useLocalStorage from 'hooks/useLocalStorage';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const location: ILocation = useLocation();
  const navigate = useNavigate();
  const from: string = location.state?.from?.pathname || '/';

  const [login, { isLoading }] = useLoginMutation();
  const [getCart] = userApiSlice.endpoints.getCart.useLazyQuery();

  const [persist, setPersist] = useLocalStorage('persist', true);

  const handlePersistence = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersist(!persist);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const payload: ICredentialToken = await login({
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...payload }));
      const user: IUser = decryptJwt(payload.accessToken);
      if (user.cart.id) {
        const payload: ICart = await getCart(user.cart.id).unwrap();
        dispatch(setCart(payload));
      }
      setEmail('');
      setPassword('');
      navigate(from, { replace: true });
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

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value);

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const content = isLoading ? (
    <div className="spinner-border text-center" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    <form className="row needs-validation p-2 p-sm-3" onSubmit={handleSubmit}>
      {/* email */}
      <div className="col-md-11 mx-auto mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Email@domain.com"
          id="email"
          autoFocus={true}
          value={email}
          onChange={handleEmailInput}
          autoComplete="email"
          required
          maxLength={50}
          name="email"
        />
      </div>
      {/* email */}

      {/* password */}
      <div className="col-md-11 mx-auto mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          id="password"
          onChange={handlePasswordInput}
          value={password}
          autoComplete="current-password"
          required
          name="password"
        />
      </div>
      {/* password */}

      <div className="col-md-11 mx-auto mb-3 mt-2">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="persistSession"
            aria-describedby="persistSession-feedback"
            required={true}
            onChange={handlePersistence}
            checked={persist}
          />
          <label className="form-check-label" htmlFor="persistSession">
            Keep me signed in
          </label>
          <div id="persistSession-feedback" className="invalid-feedback">
            Optional to keep the session started
          </div>
        </div>
      </div>

      {/* login btn */}
      <div className="col-12 mb-3">
        <button className="btn btn-success d-block mx-auto login-w-50">
          Log in
        </button>
        <span className="d-block mt-4 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </div>
      {/* login btn */}
    </form>
  );

  return content;
};

export default LoginForm;
