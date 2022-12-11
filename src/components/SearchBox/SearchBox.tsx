import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { IProductFilters } from 'common/types/product.interface';

const SearchBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const parsedQuery = queryString.parse(location.search) as IProductFilters;

  useEffect(() => {
    inputRef.current.value = parsedQuery?.search ? parsedQuery.search : '';
  }, [parsedQuery]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current.value) {
      parsedQuery.search = inputRef.current.value;
      setSearchParams(queryString.stringify(parsedQuery));
    } else {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label visually-hidden" htmlFor="searchBox">
        Search
      </label>
      <div className="input-group mb-3 mt-2">
        <input
          className="form-control"
          type="text"
          name="searchBox"
          id="searchBox"
          placeholder="Search"
          //value={parsedQuery?.search}
          ref={inputRef}
        />
        <button
          className="input-group-text"
          id="searchBoxBtn"
          aria-label="search"
          type="button"
        >
          <FontAwesomeIcon icon={faSearch} className="text-darker-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
