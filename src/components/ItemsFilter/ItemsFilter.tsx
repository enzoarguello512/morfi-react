import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import queryString from 'query-string';
import { IProductFilters } from 'common/types/product.interface';

const ItemsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [indexedQuery, setIndexedQuery] = useState<IProductFilters>({});
  const location = useLocation();

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search) as IProductFilters;
    for (const key in parsedQuery) {
      let newHash = {};
      if (Array.isArray(parsedQuery[key])) {
        for (let i = 0; i < parsedQuery[key].length; i++) {
          const arrayItem: string = parsedQuery[key][i];
          newHash = { ...newHash, [arrayItem]: true };
        }
        parsedQuery[key] = newHash;
      } else {
        parsedQuery[key] = { [parsedQuery[key]]: !!parsedQuery[key] };
      }
    }
    setIndexedQuery(parsedQuery);
  }, [location.search, searchParams]);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const [key, value, isArray] = e.currentTarget.name.split('-');

    const parsedQuery = queryString.parse(location.search) as IProductFilters;

    if (
      (!isArray && typeof parsedQuery[key] === 'string') ||
      (isArray && parsedQuery[key] === value)
    ) {
      delete parsedQuery[key];
    } else if (isArray) {
      if (Array.isArray(parsedQuery[key])) {
        const valueIndex: number = parsedQuery[key].indexOf(value);
        if (valueIndex !== -1) {
          parsedQuery[key].splice(valueIndex, 1);
        } else {
          parsedQuery[key].push(value);
        }
      } else {
        parsedQuery[key] = [parsedQuery[key], value];
      }
    } else {
      parsedQuery[key] = value;
    }

    setSearchParams(queryString.stringify(parsedQuery));
  };

  return (
    <aside className="d-none d-lg-block col-lg-4 col-xl-3 border bg-light">
      <div className="p-md-3 ff-lato-4" id="filters-btns-container">
        <SearchBox />
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
              <button
                className={
                  indexedQuery?.['categories']?.['Appetizers']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Appetizers-true"
              >
                Appetizers
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['categories']?.['Condiments']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Condiments-true"
              >
                Condiments
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['categories']?.['Confectionery']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Confectionery-true"
              >
                Confectionery
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['categories']?.['Convenience foods']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Convenience foods-true"
              >
                Convenience foods
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['categories']?.['Desserts']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Desserts-true"
              >
                Desserts
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['categories']?.['Dips, pastes and spreads']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Dips, pastes and spreads-true"
              >
                Dips, pastes and spreads
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['categories']?.['Dried foods']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Dried foods-true"
              >
                Dried foods
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['categories']?.['Dumplings']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Dumplings-true"
              >
                Dumplings
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['categories']?.['Fast food']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Fast food-true"
              >
                Fast food
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['categories']?.['Products']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="categories-Products-true"
              >
                Products
              </button>
            </li>
            <li>
              <button className="sel-none" disabled>
                <span className="text-decoration-underline text-secondary">
                  Show more
                </span>
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
              <button
                className={
                  indexedQuery?.['region']?.['North America']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="region-North America-true"
              >
                North America
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['region']?.['United States']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="region-United States-true"
              >
                United States
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['region']?.['Europe']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="region-Europe-true"
              >
                Europe
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['region']?.['Global']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="region-Global-true"
              >
                Global
              </button>
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
                <span> - </span>
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
                  className="sel-primary "
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
              <button
                className={
                  indexedQuery?.['payment']?.['In 12 installments']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="payment-In 12 installments-true"
              >
                In 12 installments
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['payment']?.['In 6 installments']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="payment-In 6 installments-true"
              >
                In 6 installments
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['payment']?.['In cash']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="payment-In cash-true"
              >
                In cash
              </button>
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
              <button
                className={
                  indexedQuery?.['promotion']?.['Special offer']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="promotion-Special offer-true"
              >
                Special offer
              </button>
            </li>
            <li>
              <button
                className={
                  indexedQuery?.['promotion']?.['New']
                    ? 'sel-primary'
                    : 'sel-none'
                }
                onClick={handleChange}
                name="promotion-New-true"
              >
                New
              </button>
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
                <span> - </span>
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
                <button className="sel-primary" id="price-filter" type="button">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </form>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => setSearchParams('')}
          >
            Clean all filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ItemsFilter;
