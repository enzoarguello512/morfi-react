import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from 'features/user/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faRightFromBracket,
  faSearch,
  faShoppingCart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useLogoutMutation } from 'features/user/userApiSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser, { isLoading }] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logOut());
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
    // Start of nav-menu-container
    <div className="container-fluid bg-white fixed-top">
      <div className="container-xxl">
        <nav className="navbar navbar-expand-lg navbar-light m-2">
          <div className="h-40px text-center">
            <Link className="navbar-brand" to="/">
              <img
                className="h-100 w-auto"
                src="/img/logo/white_background/medium_logo_side/svg/medium_logo_side.svg"
                alt="side-logo"
              />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* nav */}
            <ul className="navbar-nav align-items-center justify-content-around mx-auto col-lg-8">
              {/* Home */}
              <li className="nav-item">
                <span className="nav-link fs-5">Home</span>
              </li>
              {/* About */}
              <li className="nav-item">
                <span className="nav-link fs-5">About</span>
              </li>
              {/* Shop */}
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  to="/"
                  aria-current="page"
                >
                  Shop
                </Link>
              </li>
              {/* Recipes */}
              <li className="nav-item">
                <span className="nav-link fs-5">Recipes</span>
              </li>
              {/* Help */}
              <li className="nav-item dropdown text-center">
                <Link
                  className="nav-link fs-5"
                  to="/help"
                  id="navbarDropdownMenuLinkHelp"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Help
                </Link>
                <ul
                  className="nav-color-list dropdown-menu text-center text-lg-start"
                  aria-labelledby="navbarDropdownMenuLinkHelp"
                >
                  <li>
                    <Link className="dropdown-item" to="/chat">
                      Contact
                    </Link>
                  </li>
                  {/*<li>
                    <Link className="dropdown-item" to="../help/faq/faq.html">
                      FAQ
                    </Link>
                  </li>*/}
                </ul>
              </li>
              {/* Searchbar */}
              <li className="nav-item">
                <form>
                  <div className="input-group">
                    <button
                      className="input-group-text nav-searchbar"
                      aria-label="searchbar icon"
                    >
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="text-darker-4"
                      />
                    </button>
                    <input
                      type="text"
                      className="form-control nav-searchbar"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-icon"
                    />
                  </div>
                </form>
              </li>
            </ul>
            <hr />
            {!user ? (
              <ul className="navbar-nav align-items-center justify-content-evenly min-w-179px">
                <li className="nav-item d-block d-lg-flex text-center btn-login-container m-1">
                  <Link
                    className="nav-link btn-login rounded text-nowrap px-4 py-3 px-lg-2 py-lg-2"
                    to="/login"
                  >
                    Log in
                  </Link>
                </li>
                <li className="nav-item text-center btn-sign-up-container m-1">
                  <Link
                    className="nav-link btn-sign-up rounded text-nowrap px-4 py-3 px-lg-2 py-lg-2"
                    to="/signup"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav align-items-center justify-content-evenly min-w-179px">
                <li className="m-1 nav-item dropdown text-center text-lg-start">
                  <button
                    className="btn"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className="fs-4 me-2"
                    />
                    <span className="text-darker-5 h-pointer">
                      {user.firstName}
                    </span>
                    <span className="visually-hidden">account</span>
                    <FontAwesomeIcon icon={faAngleDown} className="ms-3" />
                  </button>
                  <ul className="nav-color-list dropdown-menu">
                    <li>
                      {isLoading ? (
                        <div className="dropdown-item text-center">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      ) : (
                        <button
                          className="dropdown-item"
                          onClick={handleLogOut}
                        >
                          <FontAwesomeIcon
                            icon={faRightFromBracket}
                            className="me-2"
                          />
                          Log Out
                        </button>
                      )}
                    </li>
                  </ul>
                </li>
                <li className="m-1 d-none d-lg-block position-relative">
                  <Link className="text-dark" to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="fs-4" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary h-pointer">
                      <span>
                        {user.cart.products ? user.cart?.products?.length : 0}
                      </span>
                      <span className="visually-hidden">cart</span>
                    </span>
                  </Link>
                </li>
                <li className="m-1 d-lg-none">
                  <Link to="/cart">
                    <button className="btn btn-dark fw-bold">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="fs-4 pe-2"
                      />
                      <span>
                        Cart (
                        {user.cart.products ? user.cart?.products?.length : 0})
                      </span>
                    </button>
                    {/*<FontAwesomeIcon icon={faShoppingCart} className="fs-4" />
                    <span>Cart</span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary h-pointer">
                      <span>
                        {user.cart.products ? user.cart?.products?.length : 0}
                      </span>
                      <span className="visually-hidden">cart</span>
                    </span>*/}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
