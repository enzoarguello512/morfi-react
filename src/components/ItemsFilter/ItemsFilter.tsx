import {
  faChevronRight,
  faSearch,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ItemsFilter = () => {
  return (
    <aside className="d-none d-lg-block col-lg-4 col-xl-3 border bg-light">
      <div className="p-md-3 ff-lato-4" id="filters-btns-container">
        <form>
          <label className="form-label visually-hidden" htmlFor="s-shop">
            Search
          </label>
          <div className="input-group mb-3 mt-2">
            <input
              className="form-control"
              type="text"
              name="s-shop"
              id="s-shop"
              placeholder="Search"
            />
            <button
              className="input-group-text"
              id="si-shop"
              aria-label="search"
              type="button"
            >
              <FontAwesomeIcon icon={faSearch} className="text-darker-4" />
            </button>
          </div>
        </form>
        <div>
          <div className="row filter">
            <div className="col-md-9">
              <h4>
                Categories <span className="text-muted fs-6">- (A-Z)</span>
              </h4>
            </div>
          </div>
          <ul className="list-unstyled">
            <li>
              <button className="sel-primary">
                <a className="text-white" href="/">
                  All
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Appetizers
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Condiments
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Confectionery
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Convenience foods
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Desserts
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Dips, pastes and spreads
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Dried foods
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Dumplings
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Fast food
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-secondary a-disabled" href="/">
                  Products
                </a>
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <a className="text-decoration-underline a-disabled" href="/">
                  Show more
                </a>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div className="row filter">
            <div className="col-md-9">
              <h4>Region</h4>
            </div>
          </div>
          <ul className="list-unstyled">
            <li>
              <button className="sel-none">North America</button>
            </li>
            <li>
              <button className="sel-none">United States</button>
            </li>
            <li>
              <button className="sel-none">Europe</button>
            </li>
            <li>
              <button className="sel-none">Global</button>
            </li>
          </ul>
        </div>
        <div>
          <div className="row filter">
            <div className="col-md-9">
              <h4>Discount</h4>
            </div>
          </div>
          <ul className="list-unstyled">
            <li>
              <button className="sel-none">25%</button>
            </li>
            <li>
              <button className="sel-none">50%</button>
            </li>
            <li>
              <button className="sel-none">75%</button>
            </li>
            <li>
              <button className="sel-none">100%</button>
            </li>
            <li>
              <form className="px-1">
                <label className="visually-hidden" htmlFor="dis-from">
                  minimum-discount
                </label>
                <input
                  className="w-80px border border-darker-4"
                  type="number"
                  name="dis-from"
                  id="dis-from"
                  placeholder="Min"
                />
                <span>-</span>
                <label className="visually-hidden" htmlFor="dis-to">
                  maximum-discount
                </label>
                <input
                  className="w-80px border border-darker-4"
                  type="number"
                  name="dis-to"
                  id="dis-to"
                  placeholder="Max"
                />
                <button
                  className="sel-primary disabled"
                  id="discount-filter"
                  type="button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </form>
            </li>
          </ul>
        </div>
        <div>
          <div className="row filter">
            <div className="col-md-9">
              <h4>Ratings</h4>
            </div>
          </div>
          <ul className="list-unstyled">
            <li>
              <button className="sel-none" data-stars="1">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <span className="mx-2">&#38; Up</span>
              </button>
            </li>
            <li>
              <button className="sel-none" data-stars="2">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} className="ps-1" />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <span className="mx-2">&#38; Up</span>
              </button>
            </li>
            <li>
              <button className="sel-none" data-stars="3">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} className="ps-1" />
                <FontAwesomeIcon icon={faStar} className="ps-1" />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <span className="mx-2">&#38; Up</span>
              </button>
            </li>
            <li>
              <button className="sel-none" data-stars="4">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} className="ps-1" />
                <FontAwesomeIcon icon={faStar} className="ps-1" />
                <FontAwesomeIcon icon={faStar} className="ps-1" />
                <FontAwesomeIcon icon={farStar} className="ps-1" />
                <span className="mx-2">&#38; Up</span>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div className="row filter">
            <div className="col-md-9">
              <h4>Payment</h4>
            </div>
          </div>
          <ul className="list-unstyled">
            <li>
              <button className="sel-none">In 12 installments</button>
            </li>
            <li>
              <button className="sel-none">In 6 installments</button>
            </li>
            <li>
              <button className="sel-none">In cash</button>
            </li>
          </ul>
        </div>
        <div>
          <div className="row filter">
            <div className="col-md-9">
              <h4>Promotions</h4>
            </div>
          </div>
          <ul className="list-unstyled">
            <li>
              <button className="sel-none">Special offer</button>
            </li>
            <li>
              <button className="sel-none">New</button>
            </li>
          </ul>
        </div>
        <div>
          <div className="row filter">
            <div className="col-md-9">
              <h4>Delivery</h4>
            </div>
          </div>
          <ul className="list-unstyled">
            <li>
              <button className="sel-none">Free shipping</button>
            </li>
            <li>
              <button className="sel-none">Withdrawal in person</button>
            </li>
          </ul>
        </div>
        <div>
          {/*<!--select-->*/}
          <div className="row filter">
            <div className="col-md-9">
              <h4>Price</h4>
            </div>
          </div>
          <ul className="list-unstyled">
            <li>
              <button className="sel-none">$0 - $10</button>
            </li>
            <li>
              <button className="sel-none">$10 - $50</button>
            </li>
            <li>
              <button className="sel-none">$50 - $100</button>
            </li>
            <li>
              <button className="sel-none">$100+</button>
            </li>
            <li>
              <form className="px-1">
                <label className="visually-hidden" htmlFor="pri-from">
                  price-from
                </label>
                <input
                  className="w-80px border border-darker-4"
                  type="number"
                  name="pri-from"
                  id="pri-from"
                  placeholder="Min"
                />
                <span>-</span>
                <label className="visually-hidden" htmlFor="pri-to">
                  price-to
                </label>
                <input
                  className="w-80px border border-darker-4"
                  type="number"
                  name="pri-to"
                  id="pri-to"
                  placeholder="Max"
                />
                <button
                  className="sel-primary disabled"
                  id="price-filter"
                  type="button"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </form>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" id="clean-all-filters">
            Clean all filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ItemsFilter;
