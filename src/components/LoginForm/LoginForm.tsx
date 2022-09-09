import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from 'features/auth/authSlice';
import { useLoginMutation } from 'features/auth/authApiSlice';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  // @ts-ignore
  const from = location.state?.from?.pathname || '/';

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...payload }));
      setEmail('');
      setPassword('');
      navigate(from, { replace: true });
    } catch (err) {
      let message = 'No Server Response';
      if (err.status === 400) {
        message = err?.data?.message || 'Bad Request';
        toast.error(message);
      } else {
        toast.error(message);
      }
    }
  };

  const handleEmailInput = (e): void => setEmail(e.target.value);

  const handlePasswordInput = (e) => setPassword(e.target.value);

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
