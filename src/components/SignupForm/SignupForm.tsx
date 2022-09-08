import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = () => {
  const errRef = useRef();

  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    month: '',
    day: '',
    year: '',
  });
  const { name, lastName, email, password, month, day, year } = formValues;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(formValues).forEach((formElement) => {
      formData.append(formElement[0], formElement[1]);
    });

    try {
      toast.success('Successful registration');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form
      className="row g-3 needs-validation p-3 register-w-50 m-auto bg-white border border-2 rounded"
      onSubmit={handleSubmit}
    >
      {/* first name */}
      <div className="col-sm-6">
        <label htmlFor="name" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          autoComplete="off"
          onChange={handleChange}
          value={name}
          placeholder="First name"
          aria-describedby="name-feedback"
          required
          maxLength={20}
          autoFocus={true}
          name="name"
        />
      </div>
      <div id="name-feedback" className="invalid-feedback">
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

      {/* birthday */}
      <div className="col-12">
        <div className="row">
          <label htmlFor="month" className="form-label">
            Date of birth
          </label>
          <div className="col-12 col-sm-6">
            <select
              className="form-select"
              name="month"
              id="month"
              onChange={handleChange}
              aria-describedby="month-feedback"
              required
              defaultValue="January"
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <div id="month-feedback" className="invalid-feedback">
              Please select a valid month.
            </div>
          </div>
          <div className="col-12 col-sm-3">
            <label className="visually-hidden" htmlFor="day">
              birthday
            </label>
            <input
              type="text"
              className="form-control"
              name="day"
              id="day"
              onChange={handleChange}
              placeholder="day"
              aria-describedby="day-feedback"
              required
            />
            <div id="day-feedback" className="invalid-feedback">
              Please provide a valid day
            </div>
          </div>
          <div className="col-12 col-sm-3">
            <label className="visually-hidden" htmlFor="year">
              birth month
            </label>
            <input
              type="text"
              className="form-control"
              name="year"
              id="year"
              onChange={handleChange}
              placeholder="year"
              aria-describedby="year-feedback"
              required
            />
            <div id="year-feedback" className="invalid-feedback">
              Please provide a valid year
            </div>
          </div>
        </div>
      </div>
      {/* birthday */}

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
        <button className="btn btn-primary d-block mx-auto w-50">
          Sign up
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
