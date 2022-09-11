import { useLoginMutation } from 'features/user/userApiSlice';
import { setCredentials } from 'features/user/userSlice';
import { useSignupMutation } from 'features/user/userApiSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const [login] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { firstName, lastName, email, password } = formValues;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signup(formValues).unwrap();
      toast.success('Successful registration');
      const payload = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...payload }));
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      navigate('/');
    } catch (err) {
      let message = 'No Server Response';
      if (err.status === 400) {
        message = err.data?.message || 'Bad Request';
        toast.error(message);
      } else {
        toast.error(message);
      }
    }
  };

  return (
    <form
      className="row g-3 needs-validation p-3 register-w-50 m-auto bg-white border border-2 rounded"
      onSubmit={handleSubmit}
    >
      {/* first name */}
      <div className="col-sm-6">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          autoComplete="off"
          onChange={handleChange}
          value={firstName}
          placeholder="First name"
          aria-describedby="firstName-feedback"
          required
          maxLength={20}
          autoFocus={true}
          name="firstName"
        />
      </div>
      <div id="firstName-feedback" className="invalid-feedback">
        Please complete your first name
      </div>
      {/* first name */}

      {/* last name */}
      <div className="col-sm-6">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          autoComplete="off"
          onChange={handleChange}
          value={lastName}
          placeholder="Last name"
          aria-describedby="lastName-feedback"
          required
          maxLength={20}
          name="lastName"
        />
        <div id="lastName-feedback" className="invalid-feedback">
          Please complete your last name
        </div>
      </div>
      {/* last name */}

      {/* email */}
      <div className="col-sm-12">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={handleChange}
          value={email}
          placeholder="Email@domain.com"
          aria-describedby="email-feedback"
          autoComplete="email"
          required
          maxLength={50}
          name="email"
        />
        <div id="email-feedback" className="invalid-feedback">
          Please choose a valid email.
        </div>
      </div>
      {/* email */}

      {/* password */}
      <div className="col-sm-12">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleChange}
          value={password}
          placeholder="Password"
          aria-describedby="password-feedback"
          autoComplete="current-password"
          required
          name="password"
        />
        <div id="password-feedback" className="invalid-feedback">
          Please provide a valid password
        </div>
      </div>
      {/* password */}

      {/* newsletter */}
      <div className="col-md-12">
        <div className="form-check form-switch mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="s-newsletter"
          />
          <label className="form-check-label" htmlFor="s-newsletter">
            Suscribe to newsletter
            <i className="far fa-question-circle ms-1"></i>
          </label>
        </div>
      </div>
      {/* newsletter */}

      {/* terms */}
      <div className="col-md-12">
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms-c"
            aria-describedby="terms-c-feedback"
            required
          />
          <label className="form-check-label" htmlFor="terms-c">
            I have read and agree with the <Link to="/">Terms of Service </Link>
            and <Link to="/">Privacy Notice</Link>
          </label>
          <div id="terms-c-feedback" className="invalid-feedback">
            Please agree the terms to continue
          </div>
        </div>
      </div>
      {/* terms */}

      {/* sign up btn */}
      <div className="col-12">
        <button
          className="btn btn-primary d-block mx-auto w-50"
          disabled={
            !firstName || !lastName || !email || !password ? true : false
          }
        >
          {isLoading ? (
            <div className="spinner-border text-center fs-1" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            'Sign up'
          )}
        </button>
        <span className="d-block mt-4 text-center">
          Have an account? <Link to="/login">Log in</Link>
        </span>
      </div>
      {/* sign up btn */}
    </form>
  );
};

export default SignupForm;
