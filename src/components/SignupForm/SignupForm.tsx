import { useLoginMutation } from 'features/user/userApiSlice';
import { setCredentials } from 'features/user/userSlice';
import { useSignupMutation } from 'features/user/userApiSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ICredentialToken } from 'common/types/credentials.req.interface';
import { IUserFormData } from 'common/types/user.interface';

const SignupForm = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const [login] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultAvatar =
    'https://res.cloudinary.com/enzoarguello512/image/upload/v1667251875/Users/abstract-user-flat-4_zsviri.svg';

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    age: '',
    phoneNumber: '',
    image: '',
  });
  const {
    email,
    password,
    firstName,
    lastName,
    address,
    age,
    phoneNumber,
    image,
  } = formValues;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name !== 'image') {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.files[0]) {
      setFormValues({
        ...formValues,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  console.log(formValues);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData() as IUserFormData;
    Object.entries(formValues).forEach((formElement) => {
      formData.append(formElement[0], formElement[1]);
    });

    try {
      await signup(formData).unwrap();
      toast.success('Successful registration');
      const payload: ICredentialToken = await login({
        email,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...payload }));
      setFormValues({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        age: '',
        phoneNumber: '',
        image: '',
      });
      navigate('/');
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

      {/* phone number */}
      <div className="col-sm-12">
        <label htmlFor="phoneNumber" className="form-label">
          Phone number
        </label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          onChange={handleChange}
          value={phoneNumber}
          placeholder="phone-number"
          aria-describedby="phoneNumber-feedback"
          autoComplete="current-phoneNumber"
          required
          name="phoneNumber"
        />
        <div id="phone-number-i-feedback" className="invalid-feedback">
          Please provide a valid phone-number
        </div>
      </div>
      {/* phone number */}

      {/* address */}
      <div className="col-sm-12">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          onChange={handleChange}
          value={address}
          placeholder="Street address or P.O. Box"
          aria-describedby="address-feedback"
          autoComplete="current-address"
          required
          name="address"
        />
        <div id="address-i-feedback" className="invalid-feedback">
          Please provide a valid address
        </div>
      </div>
      {/* address */}

      {/* age */}
      <div className="col-sm-12">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="text"
          className="form-control"
          id="age"
          onChange={handleChange}
          value={age}
          placeholder="204"
          aria-describedby="age-feedback"
          autoComplete="age"
          required
          maxLength={3}
          name="age"
        />
        <div id="age-feedback" className="invalid-feedback">
          Please choose a valid age.
        </div>
      </div>
      {/* age */}

      {/* image */}
      <div className="col-sm-12 text-center">
        <label htmlFor="image" className="form-label d-block">
          Avatar image
        </label>
        <div className="d-inline-block p-3 bg-white rounded-circle mb-2">
          <div className="m-0 thumbnail">
            <img
              className="img-rez"
              src={image ? image : defaultAvatar}
              alt="user avatar"
            />
          </div>
        </div>
        <input
          type="file"
          className="form-control"
          id="image"
          onChange={handleChange}
          aria-describedby="image-feedback"
          autoComplete="image"
          name="image"
        />
        <div id="image-feedback" className="invalid-feedback">
          Please choose a valid image.
        </div>
      </div>
      {/* image */}

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
