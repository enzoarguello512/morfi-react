import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from 'features/auth/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faRightFromBracket,
  faSearch,
  faShoppingCart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useLogoutMutation } from 'features/auth/authApiSlice';

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
      console.error(err);
    }
  };

  return (
    // Start of nav-menu-container
    <div className="container-xxl navbar-min-h fixed-top bg-white">
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
        <div className="collapse navbar-collapse">
          {/* nav */}
          <ul className="navbar-nav align-items-center justify-content-around mx-auto col-lg-8">
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/">
                Home
              </Link>
            </li>
            {/* About */}
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/">
                About
              </Link>
            </li>
            {/* Shop */}
            <li className="nav-item">
              <Link className="nav-link active fs-5" to="/" aria-current="page">
                Shop
              </Link>
            </li>
            {/* Recipes */}
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/">
                Recipes
              </Link>
            </li>
            {/* Help */}
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/">
                Help
              </Link>
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
              <li className="m-1 d-none d-lg-block nav-item dropdown">
                <button
                  className="btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="fs-4 me-2" />
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
                      <button className="dropdown-item" onClick={handleLogOut}>
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
                    <span>0</span>
                    <span className="visually-hidden">cart</span>
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
